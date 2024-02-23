import { ImageObj } from "../../pages/About/About"; // shared import
import "./showcase.css";

type PropType = {
  Data: ImageObj[];
};
// naming convention, use camelCase instead UpperCase
// name should be meaningfull
const Showcase = ({ Data }: PropType) => {
  return (
    <div className="about-section">
      <div className="container about">
        {Data.map((image: ImageObj) => (
          <div className="about-img" key={image.imageUrl}>
            <img src={image.imageUrl} alt="img" />
            <h3>{image.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
