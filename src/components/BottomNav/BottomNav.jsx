import "./BottomNav.scss";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home-icon.svg";
import info from "../../assets/icons/info-icon.png";
import project from "../../assets/icons/project-icon.png";
import React, { useEffect, useState } from 'react';
// Import useLocation hook
import { useLocation } from 'react-router-dom';


function BottomNav() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    // <section className="bottomNav">
    //   <NavLink className="bottomNav__link" to="/">
    //     <img src={home} className="bottomNav__logo activeBot" alt="Brainflix logo" />
    //     <p className="bottomNav__p activep">Home</p>
    //   </NavLink>
    //   <NavLink className="bottomNav__link" to="/about">
    //     <img src={info} className="bottomNav__logo filter-white" alt="Brainflix logo" />
    //     <p className="bottomNav__p">About</p>
    //   </NavLink>
    //   <NavLink className="bottomNav__link" to="/projects">
    //     <img src={project} className="bottomNav__logo filter-white" alt="Brainflix logo" />
    //     <p className="bottomNav__p">Projects</p>
    //   </NavLink>
    // </section>
    <section className="bottomNav">
        <NavLink className="bottomNav__link" to="/">
        <img src={home} className={"bottomNav__logo filter-white" + (url === "/" ?" activeBot" : "")} alt="Brainflix logo" />
          <p className={"bottomNav__p " + (url === "/" ?" activep" : "")}>Home</p>
        </NavLink>
        <NavLink className="bottomNav__link" to="/about">
          <img src={info} className={"bottomNav__logo filter-white" + (url === "/about" ?" activeBot" : "")} alt="Brainflix logo" />
          <p className={"bottomNav__p" + (url === "/about" ?" activep" : "")}>About</p>
        </NavLink>
        <NavLink className="bottomNav__link" to="/projects">
          <img src={project} className={"bottomNav__logo filter-white" + (url === "/projects" ?" activeBot" : "")} alt="Brainflix logo" />
          <p className={"bottomNav__p" + (url === "/projects" ?" activep" : "")}>Projects</p>
        </NavLink>
      </section>
  );
}
export default BottomNav;
