import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Work from "../pages/Work/Work";

import RoutesForApp from "./RouteType";
// routes
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={RoutesForApp["/"].link} element={<Home />} />
        <Route path={RoutesForApp["about"].link} element={<About />} />
        <Route path={RoutesForApp["work"].link} element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
