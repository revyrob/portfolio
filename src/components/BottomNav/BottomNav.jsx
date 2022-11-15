import "./BottomNav.scss";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home-icon.svg";
import info from "../../assets/icons/info-icon.png";
import project from "../../assets/icons/project-icon.png";


function BottomNav() {
  return (
    <section className="bottomNav">
      <NavLink className="bottomNav__link" to="/">
        <img src={home} className="bottomNav__logo" alt="Brainflix logo" />
        <p className="bottomNav__p">Home</p>
      </NavLink>
      <NavLink className="bottomNav__link" to="/about">
        <img src={info} className="bottomNav__logo" alt="Brainflix logo" />
        <p className="bottomNav__p">About</p>
      </NavLink>
      <NavLink className="bottomNav__link" to="/projects">
        <img src={project} className="bottomNav__logo" alt="Brainflix logo" />
        <p className="bottomNav__p">Projects</p>
      </NavLink>
    </section>
  );
}
export default BottomNav;
