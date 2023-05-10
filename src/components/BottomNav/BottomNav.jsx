import "./BottomNav.scss";
import social from "../../assets/icons/social-media.png";
// import resume from "../../assets/icons/resume.png";
import info from "../../assets/icons/info-icon.png";
import project from "../../assets/icons/project-icon.png";
import React, { useEffect, useState } from 'react';
// Import useLocation hook
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';



function BottomNav() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  console.log(url)
  //I need to set the url pathname with #name
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
  
    <section className="bottomNav">
        <NavHashLink className="bottomNav__link" to="/#about">
          <img src={info} className={"bottomNav__logo filter-white" + (url === "/#about" ? "activeBot" : "")} alt="about icon" />
          <p className={"bottomNav__p" + (url === "/#about" ?" activep" : "")}>About</p>
        </NavHashLink>
        <NavHashLink className="bottomNav__link" to="/#projects">
          <img src={project} className={"bottomNav__logo filter-white" + (url === "/#projects" ? "activeBot" : "")} alt="projects icon" />
          <p className={"bottomNav__p" + (url === "/#projects" ?" activep" : "")}>Projects</p>
        </NavHashLink>
        <NavHashLink className="bottomNav__link" to="/#social">
          <img src={social} className={"bottomNav__logo filter-white" + (url === "/#social" ? "activeBot" : "")} alt="social icon" />
          <p className={"bottomNav__p" + (url === "/#social" ?" activep" : "")}>Social</p>
        </NavHashLink>
        {/* <NavHashLink className="bottomNav__link" to="/#resume">
          <img src={resume} className={"bottomNav__logo filter-white" + (url === "/#resume" ? "activeBot" : "")} alt="resume icon" />
          <p className={"bottomNav__p" + (url === "/#resume" ?" activep" : "")}>Resume</p>
        </NavHashLink> */}
      </section>
  );
}
export default BottomNav;
