import "./footer.css";
import Pagination from "../pagination/Pagination";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  console.log(location.pathname);
  
  return (
    <div className="pagination">
      {location.pathname === "/" ? (
        <Pagination />
      ) : (
        <h3 className="footerLogo">
          All Right Reserved to Product Cart &copy;{" "}
        </h3>
      )}
    </div>
  );
};

export default Footer;
