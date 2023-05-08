import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import AboutPage from "./pages/AboutPage";
// import ProjectPage from "./pages/ProjectPage";
// import NotFound from "./pages/NotFound";
import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import BottomNav from "./components/BottomNav/BottomNav";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectData from "./data/projects.json";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
const TRACKING_ID = "UA-212922012-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  //create a state with project data
  const [projects] = useState(ProjectData);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  //local storage for light and dark theme
  //set light and dark them in app.js and pass it down to all pages
  return (
    <BrowserRouter>
      {/* <section className="landing"> */}
      <Banner />
      <BottomNav />
      {/* </section> */}
      <About />
      <ProjectList id="projects" projects={projects} />
    </BrowserRouter>
    // <>
    //   <section className="landing">
    //     <Banner />
    //     <TopNav />
    //   </section>
    //   <About />
    //   <ProjectList id="projects" projects={projects} />
    // </>
  );
}

export default App;
