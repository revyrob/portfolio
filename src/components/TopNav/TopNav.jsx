import "./TopNav.scss";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home-icon.svg";
import info from "../../assets/icons/info-icon.png";
import project from "../../assets/icons/project-icon.png";
import React, { useEffect, useState } from 'react';
// Import useLocation hook
import { useLocation } from 'react-router-dom';

function TopNav() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
    return (
      <section className="topNav">
        <NavLink className="topNav__link" to="/">
          <img src={home} className="topNav__logo filter-white" alt="Brainflix logo" />
          <p className="topNav__p">Home</p>
        </NavLink>
        <NavLink className="topNav__link" to="/about">
          <img src={info} className={"topNav__logo filter-white" + (url === "/about" ?" activeBot" : "")} alt="Brainflix logo" />
          <p className={"topNav__p" + (url === "/about" ?" activep" : "")}>About</p>
        </NavLink>
        <NavLink className="topNav__link" to="/projects">
          <img src={project} className={"topNav__logo filter-white" + (url === "/projects" ?" activeBot" : "")} alt="Brainflix logo" />
          <p className={"topNav__p" + (url === "/projects" ?" activep" : "")}>Projects</p>
        </NavLink>
      </section>
    );
  }
  export default TopNav;
  