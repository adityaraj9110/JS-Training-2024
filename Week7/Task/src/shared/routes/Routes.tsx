import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import routes from "./RouterType";
import SignUp from "../../pages/SignUp/SignUp";
import { authSelector } from "../../redux/reducers/AuthReducer";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";

const Router = () => {
  const user = useSelector(authSelector);

  return (
    <BrowserRouter>
       <Navbar/>
        <Routes>
          
          <Route
            path={routes["/"].link} 
            element={<ProtectedRoute user={user} component={<Home />} />}
          >
          </Route>
          <Route path={routes["login"].link} element={<Login />} />
          <Route path={routes["signup"].link} element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
