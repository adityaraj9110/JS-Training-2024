import "./imageCard.css";

type PropType = {
  title:string,
  src:string
}

const ImageCard = ({title,src}:PropType) => {
  return (
    <div className="image-card">
      <div className="img-container">
        <img src={src} alt="pic" />
      </div>
      <div className="img-info-container">
        <h3>{title}</h3>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ImageCard;
