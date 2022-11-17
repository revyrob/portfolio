import Card from "../Card/Card";
import './ProjectList.scss';

function ProjectList({projects}) {
    //map through projects for each card
    return (
        <section className="projectList">
            <h1 className="projectList__title">
                Projects
            </h1>
            <div className="projectList__projects">
            
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
            </div>
            <h1 className="projectList__title">
                Hackathons Completed
            </h1>
            <div className="projectList__projects">
            
            </div>
        </section>
    );
}
export default ProjectList;