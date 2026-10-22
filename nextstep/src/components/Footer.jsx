
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="next-footer">
      <div className="container">
        <div className="row gy-4 footer-content">

          {/* Brand and Description */}
          <div className="col-lg-5 col-md-6 footer-brand">
            <h3 className="footer-logo">
              Next<span>Step</span>
            </h3>

            <p className="footer-tagline">
              Discover your path. Build your future.
            </p>

            <p className="footer-description">
              Explore career possibilities, discover your strengths,
              and create a learning roadmap that takes you closer
              to your dream career.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 footer-links">
            <h5>Quick Links</h5>

            <Link to="/">Discover</Link>
            <Link to="/categories">Career Categories</Link>
            <Link to="/roadmap">My Roadmap</Link>
            <Link to="/profile">My Profile</Link>
          </div>

          {/* Explore More */}
          <div className="col-lg-4 col-md-12 footer-links">
            <h5>Explore More</h5>

            <Link to="/games">Career Game Zone</Link>
            <Link to="/about">About NextStep</Link>

            <div className="footer-message">
              <span className="footer-message-icon">✦</span>
              <p>
                Your future is full of possibilities.
                Take the next step with confidence!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} NextStep. All rights reserved.
          </p>

          <small>
            Career exploration and learning guidance for educational
            purposes. Career suggestions do not guarantee employment.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
