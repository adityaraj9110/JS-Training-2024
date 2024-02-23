import { useState } from "react";
import "./navbar.css";
import {  useNavigate } from "react-router-dom";
import { useSearch } from "../../context/categoryContext/SearchContext";
const Navbar = () => {
  const [data, setData] = useState<string | null>(null);
  const { setItem } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    setItem(data);
  };

  return (
    <div id="nav">
      <div className="logo" onClick={()=>navigate("/")}>
        <h1>PC</h1>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          id="searchImage"
          placeholder="search here."
          onChange={(e) => handleSearch(e)}
        />
        <i className="ri-search-line searchIcon" onClick={handleClick}></i>
      </div>

      <div className="like">
        <i
          className="ri-shopping-cart-line"
          onClick={() => navigate("/wishlist")}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
