import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { cartSelector } from "../../redux/reducers/cartReducer";
import { LOGOUT } from "../../redux/Constants";
import { authSelector } from "../../redux/reducers/authReducer";

export const paths: string[] = ["/login", "/signup"];

export const isPathInclude = (pathname: string) => {
  return paths.some((path) => {
    return path === pathname;
  });
};

const Navbar = () => {
  const state = useSelector(cartSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedUsername = useSelector(authSelector);
  const location = useLocation();
  console.log(location.pathname);

  const handleLogout = () => {
    dispatch({
      type: LOGOUT,
    });
    navigate("/login");
  };
  return (
    <div id="nav">
      <div className="logo" onClick={() => navigate("/")}>
        <h1>PC</h1>
      </div>
      {!isPathInclude(location.pathname) ? (
        <div className="right-part">
          <h3>{savedUsername?.email?.split("@")[0]}</h3>

          <h3 onClick={() => handleLogout()}>logout</h3>
          <div className="like">
            <i
              className="ri-shopping-cart-line"
              onClick={() => navigate("/wishlist")}
            >
              <sub>{state.length}</sub>
            </i>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* {location.pathname !== "/signup" && location.pathname !== "/login" ? (
        <div className="right-part">
          <h3>{savedUsername.email.split("@")[0]}</h3>

          <h3 onClick={() => handleLogout()}>logout</h3>
          <div className="like">
            <i
              className="ri-shopping-cart-line"
              onClick={() => navigate("/wishlist")}
            >
              <sub>{state.length}</sub>
            </i>
          </div>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Navbar;
