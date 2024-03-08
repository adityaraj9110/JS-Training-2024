"use client";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./features.module.css";
import {
  ApiResponseType,
  DataType,
} from "@/shared/utils/DataTypes/ResponsedataType";
import LoaderWrapper from "../LoaderWrapper/LoaderWrapper";
import { ThreeCircles } from "react-loader-spinner";
import { apiProvider } from "@/shared/utils/apiClasses/apiProvider";
import { useSelector } from "react-redux";
import { pageSelector } from "@/shared/redux/reducers/PageReducers";
import { offsetSelector } from "@/shared/redux/reducers/OffsetReducer";

const Features = () => {
  const [listOfData, setListOfData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const currentpageNumber = useSelector(pageSelector);
  const offset = useSelector(offsetSelector);

  console.log("pathName", offset);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const data: ApiResponseType<DataType> = await apiProvider.getAllProducts(
        offset * currentpageNumber - offset,
        offset
      );
      setListOfData(data.products);
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentpageNumber, offset]);

  return (
    <div className={styles.container}>
      {listOfData === undefined || listOfData.length === 0 || loading ? (
        <LoaderWrapper>
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#fff"
            ariaLabel="Loading ..."
          />
        </LoaderWrapper>
      ) : (
        listOfData.map((data) => <ProductCard key={data.id} data={data} />)
      )}
    </div>
  );
};

export default Features;
