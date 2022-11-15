import Card from "../Card/Card";
import './ProjectList.scss';

function ProjectList({projects}) {
    //map through projects for each card
    return (
        <section className="projectList">
            {projects && projects.map((project)=> (
            <Card
                key={project.id}
                id={project.id}
                title={project.name}
                description={project.description}
                image={project.image}
                toolSkill={project.toolSkill}
                code={project.code}
                />
            ))}
     
        </section>
    );
}
export default ProjectList;