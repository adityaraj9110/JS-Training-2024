import { useEffect, useState } from "react";
import "./cart.css";
import ProductCard from "../../shared/components/productCard/ProductCard";
import { Data } from "../../shared/dataTypes/ProductType";
import { apiProvider } from "../../shared/utilityClasses/ApiProvider";


const Cart = () => {
  const [savedData, setSavedData] = useState<Data[] | undefined>([]);
  
  useEffect(() => {
    const savedId: number[] | undefined = JSON.parse(
      localStorage.getItem("cartItems") ?? JSON.stringify([])
    );

    const fetchData = () => {
      apiProvider
        .getProductsByIds(savedId)
        .then((res) => {
          setSavedData(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchData();
  }, []);

  const removeItemFromCart = (id: number) => {
    setSavedData((prevData: Data[] | undefined) => {
      if (!prevData) return prevData;
      return prevData.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="cartContent">
      {savedData?.map((product) => (
        <ProductCard
          key={product.title}
          data={product}
          setData={removeItemFromCart}
        />
      ))}
    </div>
  );
};

export default Cart;
