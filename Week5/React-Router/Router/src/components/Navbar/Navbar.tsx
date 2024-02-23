import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-section">
      <div className="container nav">
        <div className="left-part">
          <Link className="link logo" to={"/"}>
            <h1>Router</h1>
          </Link>
        </div>
        <div className="right-part">
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return {
                color: isActive ? "#E8CEEC" : "",
              };
            }}
            className="link"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) => {
              return {
                color: isActive ? "#E8CEEC" : "",
              };
            }}
            className="link"
          >
            About
          </NavLink>
          <NavLink
            to={"/work"}
            style={({ isActive }) => {
              return {
                color: isActive ? "#E8CEEC" : "",
              };
            }}
            className="link"
          >
            Work
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
