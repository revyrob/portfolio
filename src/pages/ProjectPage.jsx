import { useState } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectData from "../data/projects.json";
//import TopNav from "../components/TopNav/TopNav";
import HackData from "../data/hackProjects.json";
import Footer from "../components/Footer/Footer";
import BottomNav from '../components/BottomNav/BottomNav';


function ProjectPage() {
  //create a state with project data
  const [projects] = useState(ProjectData);
  const [hackProjects] = useState(HackData);
  console.log(projects)
  console.log(hackProjects)
  
  return (
    <>
    {/* <TopNav /> */}
    <ProjectList projects={projects} />
    <ProjectList projects={hackProjects} />
    <BottomNav/>
    <Footer/>
    </>
    );
  }
  
  export default ProjectPage;
  