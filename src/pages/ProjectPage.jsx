import { useState } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectData from "../data/projects.json";
import TopNav from "../components/TopNav/TopNav";

function ProjectPage() {
  //create a state with project data
  const [projects] = useState(ProjectData);

  return (
    <>
     <TopNav />
      <ProjectList projects={projects} />

    </>
  );
}

export default ProjectPage;
