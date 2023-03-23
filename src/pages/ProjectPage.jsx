import ProjectList from "../components/ProjectList/ProjectList";
import ProjectData from "../data/projects.json";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

function ProjectPage() {
  //create a state with project data
  const [projects] = useState(ProjectData);

  return (
    <>
    <TopNav />
    <ProjectList projects={projects} />
    <Footer/>
    </>
    );
  }
//}
  
  export default ProjectPage;
  