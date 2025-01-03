import { NavLink } from "react-router-dom";
import ScrollToTop from "../../helpers/ScrollToTop";
import Resume from "../../assets/documents/udayResume.pdf";

const activeNavLink = ({ isActive }) =>
  "gray-text nav-link" + (isActive ? " active" : "");

const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " main-active" : "")
        }
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
        className={activeNavLink}
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={activeNavLink}
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={activeNavLink}
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
      >
        Contact
      </NavLink>
      <NavLink
          to={Resume}
          className={activeNavLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            props.closeMenu();
          }}
        >
         myResume
      </NavLink>

    </section>
  );
};

export default NavigationMenu;
