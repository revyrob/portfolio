import "./BottomNav.scss";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home-icon.svg";

export default function BottomNav() {
  return (
    <section className="bottomNav">
      <NavLink className="bottomNav__link" to="/">
        <img src={home} className="bottomNav__logo" alt="Brainflix logo" />
        <p>home</p>
      </NavLink>
      <NavLink className="bottomNav__link" to="/">
        <img src={home} className="bottomNav__logo" alt="Brainflix logo" />
        <p>home</p>
      </NavLink>
      <NavLink className="bottomNav__link" to="/">
        <img src={home} className="bottomNav__logo" alt="Brainflix logo" />
        <p>home</p>
      </NavLink>
    </section>
  );
}
