import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logodiv">
          <img src="/logo.png" className="imglogo" alt="logo" />
          <h3 className="logo">Paw Society</h3>
        </div>
        <ul className="nav-links">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/dogs">
            <li>Dogs</li>
          </Link>
          <Link to="/cats">
            <li>Cats</li>
          </Link>
          <Link to="/" onClick={() => localStorage.clear()}>
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
