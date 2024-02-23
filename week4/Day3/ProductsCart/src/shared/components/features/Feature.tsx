import "./feature.css";
import { Data } from "../../dataTypes/ProductType";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Categories from "../categories/Categories";
import { useLocation } from "react-router-dom";
import { useCategory } from "../../context/categoryContext/CategoryContext";
import { useSearch } from "../../context/categoryContext/SearchContext";
import { useCart } from "../../context/categoryContext/CartContext";
import { usePagination } from "../../context/categoryContext/PaginationContext";
import { apiProvider } from "../../utilityClasses/ApiProvider";

// avoid any type  
const Feature = () => {
  const [products, setProducts] = useState<Data[]>();
  const { selectedCategory } = useCategory();
  const { searchedItem } = useSearch();
  const { cartItemId } = useCart();
  const { page, offset } = usePagination();

  const location = useLocation();

  const fetchData = async () => {
    console.log({ page, offset });
    if (page && offset) {
      const data = await apiProvider.getAllData(offset, page);
      setProducts(data);
    }
  };

  const fetchSelectedItem = async () => {
    const data = await apiProvider.getSearchedCategory(selectedCategory);
    setProducts(data);
  };

  const fetchSearchedItem = async () => {
    const data = await apiProvider.getSearchedQuery(searchedItem);

    setProducts(data);
  };

  useEffect(() => {
    console.log("cartItemId", cartItemId);
  }, [cartItemId]);

  useEffect(() => {
    fetchSearchedItem();
  }, [searchedItem]);

  useEffect(() => {
    fetchSelectedItem();
  }, [selectedCategory]);

  useEffect(() => {
    fetchData();
  }, [page, offset]);

  return (
    <>
      {location.pathname === "/add-cart" ? " " : <Categories />}
      <div className="content">
        {products?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Feature;
