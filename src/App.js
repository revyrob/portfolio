import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import BottomNav from "./components/BottomNav/BottomNav";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectData from "./data/projects.json";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const TRACKING_ID = "UA-212922012-1"; // OUR_TRACKING_ID for google analytics
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
      <Banner />
      <BottomNav />
      <About />
      <ProjectList id="projects" projects={projects} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
