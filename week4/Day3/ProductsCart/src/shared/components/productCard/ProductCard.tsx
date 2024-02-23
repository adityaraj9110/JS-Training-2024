import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/categoryContext/CartContext";
import { Data } from "../../dataTypes/ProductType";
import "./productCard.css";

type Prop = {
  data: Data;
  setData?: (id: number) => void;
};

const ProductCard = ({ data, setData }: Prop) => {
  let { cartItemId } = useCart();
  const { addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // custom hook for getting data from the local storage, get and setting data
  const savedItems: number[] = JSON.parse(
    localStorage.getItem("cartItems") ?? JSON.stringify([])
  );

  const findLikedProduct = (id: number) => {
    return savedItems?.some((item) => id === item);
  };

  const handleClick = (id: number) => {
    cartItemId =
      JSON.parse(localStorage.getItem("cartItems") ?? JSON.stringify([])) ||
      cartItemId;

    const isAlreadySelected: number | undefined = cartItemId?.find(
      (item) => item === id
    );

    if (isAlreadySelected === undefined) {
      addToCart(id);
      const updatedCartItem =
        JSON.parse(localStorage.getItem("cartItems") ?? JSON.stringify([])) ||
        [];
      updatedCartItem.push(id);

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItem));
    } else {
      console.log("setData-->", setData);
      removeFromCart(id);
      const currentCartItem = cartItemId ? [...cartItemId] : []; // focus on the errors

      const updatedCartItem: number[] = currentCartItem.filter((item) => {
        return item !== id;
      });

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItem));
      if(setData) {
        setData(id);
      }
    }
  };

  const handleRouting = ()=>{
      navigate(`/products/${data.id}`)
  }

  return (
    <div className="imageContainer">
      <div className="image">
        <img src={data?.thumbnail} alt=""  onClick={handleRouting}/>
      </div>
      <div className="imageInfo">
        <div className="infoPart1">
          <h4>{data?.title}</h4>
          <h4>Rating: {data.rating}</h4>
        </div>
        <div className="priceSection">
          <h4>$ {data?.price}</h4>
          <h4>Discount: {data?.discountPercentage}</h4>
          <i
            className="ri-heart-3-line addToCart"
            onClick={() => handleClick(data?.id)}
            style={{ color: findLikedProduct(data?.id) ? "#E67F6E" : "" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
