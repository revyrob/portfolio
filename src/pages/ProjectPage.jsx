import { useState } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectData from "../data/projects.json";
import NavBar from "../components/Navbar/NavBar";

function ProjectPage() {
  //create a state with project data
  const [projects] = useState(ProjectData);
  console.log(projects)

  return (
    <>
      <NavBar />
      <ProjectList projects={projects} />
    </>
  );
}

export default ProjectPage;
