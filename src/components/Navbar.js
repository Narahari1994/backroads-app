import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, to, text } = link;
            return (
              <li key={id}>
                <Link to={to} className="nav-link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, to, icon } = link;
            return (
              <li key={id}>
                <Link to={to} target="_blank" className="nav-icon">
                  <i className={icon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
