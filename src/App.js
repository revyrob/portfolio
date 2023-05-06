import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import ReactGA from "react-ga";
import home from "./assets/icons/home-icon.svg";
import info from "./assets/icons/info-icon.png";
import project from "./assets/icons/project-icon.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const TRACKING_ID = "UA-212922012-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  //local storage for light and dark theme
  //set light and dark them in app.js and pass it down to all pages
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <BrowserRouter>
      <section className="bottomNav">
        <Link className="bottomNav__link" to="/">
          <img
            src={home}
            className={
              "bottomNav__logo filter-white" + (url === "/" ? " activeBot" : "")
            }
            alt="Brainflix logo"
          />
          <p className={"bottomNav__p " + (url === "/" ? " activep" : "")}>
            Home
          </p>
        </Link>
        <Link className="bottomNav__link" to="/about">
          <img
            src={info}
            className={
              "bottomNav__logo filter-white" +
              (url === "/about" ? " activeBot" : "")
            }
            alt="Brainflix logo"
          />
          <p className={"bottomNav__p" + (url === "/about" ? " activep" : "")}>
            About
          </p>
        </Link>
        <Link className="bottomNav__link" to="/projects">
          <img
            src={project}
            className={
              "bottomNav__logo filter-white" +
              (url === "/projects" ? " activeBot" : "")
            }
            alt="Brainflix logo"
          />
          <p
            className={"bottomNav__p" + (url === "/projects" ? " activep" : "")}
          >
            Projects
          </p>
        </Link>
      </section>
    </BrowserRouter>
  );
}

export default App;
