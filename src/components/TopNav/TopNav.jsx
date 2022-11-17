import "./TopNav.scss";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home-icon.svg";
import info from "../../assets/icons/info-icon.png";
import project from "../../assets/icons/project-icon.png";


function TopNav() {
    return (
      <section className="topNav">
        <NavLink className="topNav__link" to="/">
          <img src={home} className="topNav__logo filter-white" alt="Brainflix logo" />
          <p className="topNav__p">Home</p>
        </NavLink>
        <NavLink className="topNav__link" to="/about">
          <img src={info} className="topNav__logo filter-white" alt="Brainflix logo" />
          <p className="topNav__p">About</p>
        </NavLink>
        <NavLink className="topNav__link" to="/projects">
          <img src={project} className="topNav__logo filter-white" alt="Brainflix logo" />
          <p className="topNav__p">Projects</p>
        </NavLink>
      </section>
    );
  }
  export default TopNav;
  