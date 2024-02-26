import { useNavigate } from "react-router-dom";
import { Data } from "../../dataTypes/ProductType";
import "./productCard.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_TO_CART } from "../../redux/Constants";
import { cartSelector } from "../../redux/reducers/cartReducer";

type Prop = {
  data: Data;
  setData?: (id: number) => void;
};

const ProductCard = ({ data, setData }: Prop) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemids = useSelector(cartSelector);

  const findLikedProduct = (id: number) => {
    return cartItemids?.some((item) => id === item);
  };

  const handleClick = (id: number) => {
    const isAlreadySelected: number | undefined = cartItemids?.find(
      (item) => item === id
    );

    if (isAlreadySelected === undefined) {
      dispatch({
        type: ADD_TO_CART,
        payload: id,
      });
    } else {
      console.log("setData-->", setData);
      dispatch({
        type: REMOVE_TO_CART,
        payload: id,
      });
      if (setData) {
        setData(id);
      }
    }
  };

  const handleRouting = () => {
    navigate(`/products/${data.id}`);
  };

  return (
    <div className="imageContainer">
      <div className="image">
        <img src={data?.thumbnail} alt="" onClick={handleRouting} />
      </div>
      <div className="imageInfo">
        <div className="infoPart1">
          <h4>{data?.title}</h4>
          <h4>Rating: {data.rating}</h4>
        </div>
        <div className="priceSection">
          <h4>$ {data?.price}</h4>
          <h4>Discount: {data?.discountPercentage}</h4>
        </div>
      </div>
      <button className="add-to-cart" onClick={() => handleClick(data?.id)} style={{backgroundColor: findLikedProduct(data?.id) ? "#f95959": " "}}>
        {findLikedProduct(data?.id) ? "Remove To Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
