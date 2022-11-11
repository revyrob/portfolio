
import { useState } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectData from '../data/projects.json';

function ProjectPage() {
//create a state with project data
const [projects] = useState(ProjectData);

    return(
  
    <ProjectList projects={projects}/>
    );
}

export default ProjectPage;