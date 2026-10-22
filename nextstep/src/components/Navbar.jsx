
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg next-navbar">
      <div className="container">
        <Link className="navbar-brand brand-name" to="/">
          Next<span>Step</span>
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nextNavbar"
          aria-controls="nextNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nextNavbar">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/" end>
              Discover
            </NavLink>

            <NavLink className="nav-link" to="/categories">
              Categories
            </NavLink>

            <NavLink className="nav-link" to="/roadmap">
              My Roadmap
            </NavLink>

            <NavLink className="nav-link" to="/profile">
              My Profile
            </NavLink>

            <NavLink className="nav-link" to="/games">
              Game Zone
            </NavLink>

            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
