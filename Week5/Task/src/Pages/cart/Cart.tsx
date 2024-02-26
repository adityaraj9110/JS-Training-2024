import { Suspense, lazy, useEffect, useState } from "react";
import "./cart.css";
import { Data } from "../../shared/dataTypes/ProductType";
import { apiProvider } from "../../shared/utilityClasses/ApiProvider";
import { useSelector } from "react-redux";
import { cartSelector } from "../../shared/redux/reducers/cartReducer";
import Loader from "../../shared/Loader/Loader";
import noCartFallback from "../../assests/no-cart-fallback.png";

const LazyProductCard = lazy(
  () => import("../../shared/components/productCard/ProductCard")
);

const Cart = () => {
  const [savedData, setSavedData] = useState<Data[] | undefined>([]);
  const savedItems = useSelector(cartSelector);

  useEffect(() => {
    const fetchData = () => {
      apiProvider
        .getProductsByIds(savedItems)
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

  const totalAmount = savedData?.reduce((acc, curr) => {
    return acc + curr?.price;
  }, 0);

  return (
    <div className="cartContent">
      {savedData && savedData.length > 0 ? (
        savedData?.map((product) => (
          <Suspense key={product.title} fallback={<Loader />}>
            <LazyProductCard
              key={product.title}
              data={product}
              setData={removeItemFromCart}
            />
          </Suspense>
        ))
      ) : (
        <img src={noCartFallback} alt="fallback" className="fallback" />
      )}

      {savedData && savedData?.length > 0 && (
        <div className="price-section">
          <h3 className="price-title">Price Details</h3>
          <div className="price-info">
            <div className="price">
              <h3>Price ({savedData?.length} items)</h3>
              <span>$ {totalAmount}</span>
            </div>
            <div className="delivery">
              <h3>Delivery Charges</h3>
              <span style={{ color: "#388E3C" }}> Free</span>
            </div>
            <div className="totalAmount">
              <h3>Total Amount</h3>
              <span>$ {totalAmount}</span>
            </div>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
