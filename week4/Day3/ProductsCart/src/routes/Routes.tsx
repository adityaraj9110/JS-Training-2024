import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home";
import Feature from "../shared/components/features/Feature";
import Cart from "../Pages/cart/Cart";
import AddProduct from "../Pages/Addproduct/AddProduct";
import routes from "./RouterType";
import ProductDetail from "../Pages/ProductDetails/ProductDetail";

// routes

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes["/"].link} element={<Home />}>
          <Route path={routes["/"].link} element={<Feature />} />
          <Route path={routes["wishlist"].link} element={<Cart />} />
          <Route
            path={routes["products/:id"].link}
            element={<ProductDetail />}
          />
          <Route path={routes["add-product"].link} element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
