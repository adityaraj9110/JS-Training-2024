import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home";
import routes from "./RouterType";
import ProductDetail from "../Pages/ProductDetails/ProductDetail";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import { useSelector } from "react-redux";
import { authSelector } from "../shared/redux/reducers/authReducer";
import ProtectedRoute from "./ProtectedRoute";
import { Suspense, lazy } from "react";
import Loader from "../shared/Loader/Loader";

const LazyFeature = lazy(() => import("../shared/components/features/Feature"));
const LazyCart = lazy(() => import("../Pages/cart/Cart")); 

const Router = () => {
  const user = useSelector(authSelector);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          
          <Route
            path={routes["/"].link} // badhiya....
            element={<ProtectedRoute user={user} component={<Home />} />}
          >
            <Route
              path={routes["/"].link}
              element={<ProtectedRoute user={user} component={<LazyFeature />} />}
            />
            <Route
              path={routes["wishlist"].link}
              element={<ProtectedRoute user={user} component={<LazyCart />} />} 
            />
            <Route
              path={routes["products/:id"].link}
              element={<ProtectedRoute user={user} component={<ProductDetail />} />}
            />
          </Route>
          <Route path={routes["login"].link} element={<Login />} />
          <Route path={routes["signup"].link} element={<SignUp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
