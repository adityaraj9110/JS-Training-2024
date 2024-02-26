import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="container navbar">
        <div className="left-part">
          <h1>ImageBazar</h1>
        </div>
        <div className="right-part">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
