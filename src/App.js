import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProjectList from "./components/ProjectList/ProjectList";
import ReactGA from "react-ga";
import home from "./assets/icons/home-icon.svg";
import info from "./assets/icons/info-icon.png";
import project from "./assets/icons/project-icon.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import About from "./components/About/About";
import ProjectData from "./data/projects.json";

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

  //create a state with project data
  const [projects] = useState(ProjectData);
  return (
    <>
      <BrowserRouter>
        <header className="bottomNav">
          <Link className="bottomNav__link" to="">
            Home
          </Link>
          <Link className="bottomNav__link" to="">
            About
          </Link>
          <Link className="bottomNav__link" to="#projects">
            Projects
          </Link>
        </header>
      </BrowserRouter>
      <About />
      <ProjectList projects={projects} />
    </>
  );
}

export default App;
