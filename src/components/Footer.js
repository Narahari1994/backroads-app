import { Link } from "react-router-dom";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, to, text } = link;

          return (
            <li key={id}>
              <Link to={to} className="footer-link">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, to, icon } = link;

          return (
            <li key={id}>
              <Link to={to} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
