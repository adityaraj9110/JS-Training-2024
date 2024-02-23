import { Params, useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useEffect, useState } from "react";
import { apiProvider } from "../../shared/utilityClasses/ApiProvider";
import { Data } from "../../shared/dataTypes/ProductType";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const params: Readonly<Params<string>> = useParams();
  const [id, setId] = useState<number>(parseInt(params.id as string));
  const [data, setData] = useState<Data>();
  const navigate = useNavigate();

  const [thumbnailofProduct, setThumbnailOfProduct] = useState<
    string | undefined
  >(data?.thumbnail);

  const fetchData = async (id: number) => {
    const responseData = await apiProvider.getProductById(id);
    setData(responseData);
    setThumbnailOfProduct(responseData.thumbnail);
  };
  -``
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setThumbnailOfProduct(e.target.src as string);
  };

  const handleDelete = () => {
    alert("item Deleted");
    setTimeout(() => {
      apiProvider.deleteProductById(id);
      navigate("/");
    }, 800);
  };

  useEffect(() => {
    setId(parseInt(params.id as string));
    fetchData(id);
  }, []);

  return (
    <div className="showCase">
      <div className="mainDiv">
        <img src={`${thumbnailofProduct}`} alt="" />

        <div className="allImages">
          {data?.images.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt=""
              onClick={(e) => handleClick(e)}
            />
          ))}
        </div>
      </div>

      <div className="rightDiv">
        <div className="productInfo">
          <h3 className="productTitle">{data?.title}</h3>
          <i className="fa-solid fa-trash deleteBtn" onClick={handleDelete}></i>
          <div className="logoContainer">
            <span className="rating">Ratings : </span>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          </div>

          <h3 className="price">
            $ {data?.price}.00{" "}
            <span className="discount">{data?.discountPercentage}% off</span>
          </h3>

          <h3 className="stock">stock left: {data?.stock}</h3>
        </div>

        <div className="discriptionBox">
          <h4 className="productDescription">
            {data?.description}Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi iste mollitia harum maiores id sit?
            Corporis id eaque minima dolores {data?.description} aliquam beatae
            dicta consectetur tempore vel quas earum reiciendis mollitia nemo
            quisquam itaque inventore, tenetur commodi error odio non
            asperiores?
          </h4>
        </div>

        <div className="actionButtons">
          <button>Buy Now</button>
          <button>Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
