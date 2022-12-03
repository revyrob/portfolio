import { useState } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectData from "../data/projects.json";
import TopNav from "../components/TopNav/TopNav";
import HackData from "../data/hackProjects.json";

function ProjectPage() {
  //create a state with project data
  const [projects] = useState(ProjectData);
  const [hackProjects] = useState(HackData);

  return (
    <>
     <TopNav />
      <ProjectList projects={projects} />
      <ProjectList projects={hackProjects} />

    </>
  );
}

export default ProjectPage;
