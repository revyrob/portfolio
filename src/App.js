import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import ReactGA from "react-ga";
import { useEffect } from "react";
const TRACKING_ID = "UA-212922012-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  //local storage for light and dark theme
  //set light and dark them in app.js and pass it down to all pages
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
