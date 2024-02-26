import "./feature.css";
import { Data } from "../../dataTypes/ProductType";
import { Suspense, lazy, useEffect, useState } from "react";
import { apiProvider } from "../../utilityClasses/ApiProvider";
import Loader from "../../Loader/Loader";

const LazyProductCard = lazy(() => import("../productCard/ProductCard"));

const Feature = () => {
  const [products, setProducts] = useState<Data[]>();

  const fetchData = async () => {
    
    const data = await apiProvider.getAllData();
    console.log("data-->", data);
    setProducts(data); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div className="content">
      {products?.map((product) => (
        <Suspense fallback={<Loader />} key={product.id}>
          <LazyProductCard data={product} />
        </Suspense>
      ))}
    </div>
  );
};

export default Feature;
