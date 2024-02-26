import LoaderImg from "../../assests/loader.svg";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderImg} alt="loader" />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
