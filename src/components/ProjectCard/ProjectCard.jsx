import "./ProjectCard.scss";

function ProjectCard() {
  return (
    <div className="projectCard">
      <div className="projectCard__flip-box">
        <div className="projectCard__flip-box-front">
        <div className="projectCard__inner">
        <h3 className="projectCard__flip-box-header">Projects</h3>
        <p>Web Application Build</p>
        <img
          src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
          alt=""
          className="projectCard__flip-box-img"
        />
      </div>
        </div>
        <div
      className="projectCard__flip-box-back">
      <div className="projectCard__inner">
        <h3 className="projectCard__flip-box-header">Projects</h3>
        <p>Learning the basics of HTML, CSS, QGIS and Javascript</p>
        <button className="projectCard__flip-box-button">Learn More</button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default ProjectCard;
{/* <div className="box-item">
  <div className="flip-box">
    <div
      className="flip-box-front text-center"
      style={{ backgroundImage: { kayle } }}
    >
      <div className="inner color-white">
        <h3 className="flip-box-header">Projects</h3>
        <p>Web Application Build</p>
        <img
          src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
          alt=""
          className="flip-box-img"
        />
      </div>
    </div>
    <div
      className="flip-box-back text-center"
      style={{ backgroundImage: { kayle } }}
    >
      <div className="inner color-white">
        <h3 className="flip-box-header">Projects</h3>
        <p>Learning the basics of HTML, CSS, QGIS and Javascript</p>
        <button className="flip-box-button">Learn More</button>
      </div>
    </div>
  </div>
</div>; */}
