import "./footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  console.log(location.pathname);
  
  return (
    <div className="pagination">
      
        <h3 className="footerLogo">
          All Right Reserved to Product Cart &copy;{" "}
        </h3>
      
    </div>
  );
};

export default Footer;
