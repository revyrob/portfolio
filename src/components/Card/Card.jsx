import "./Card.scss";
import { v4 as uuidv4 } from "uuid";

function Card({ title, description, image, toolSkill }) {
  return (
    <div className="box-item">
      <div className="flip-box">
        <div
          className="flip-box-front text-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            
          }}
        >
          <div className="inner color-white">
            <img
              src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
              alt=""
              className="flip-box-img"
            />   
          </div>
        </div>
        <div className="flip-box-back text-center">
          <div className="inner color-white">
            <h3 className="flip-box-header">{title}</h3>
            <p>{description}</p>
            <h3 className="flip-box-header">Tools</h3>
            {toolSkill && toolSkill.map((tool)=> {
              <ul key={tool.tool}
            })}
            <p>{toolSkill}</p>
            <button className="flip-box-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
