import ProjectList from "../components/ProjectList/ProjectList";
import ProjectData from "../data/projects.json";
import TopNav from "../components/TopNav/TopNav";
import HackData from "../data/hackProjects.json";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

function ProjectPage() {
  //create a state with project data
  const [projects] = useState(ProjectData);
  const [hackProjects] = useState(HackData);

    /*
    *Loading when pressed Links back to Homepage
    *start State in true so that we can
    *toggle between loading
    */
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Loading function to load data or
        // fake it using setTimeout;
        const loadData = async () => {
            // wait for 2 secs if there is no wait
            await new Promise((resolved) => setTimeout(resolved, 2000));
            // set the toggle loading state
            setLoading((loading) => !loading);
        };
        loadData();
    }, []);
    if (loading) {
        return <div className="loader"></div>;
    } else {
  return (
    <>
    <TopNav />
    <ProjectList projects={projects} />
    <ProjectList projects={hackProjects} />
    {/* <BottomNav/> */}
    <Footer/>
    </>
    );
  }
}
  
  export default ProjectPage;
  