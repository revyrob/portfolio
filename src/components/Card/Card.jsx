import "./Card.scss";
import { v4 as uuidv4 } from "uuid";

function Card({ title, description, image, toolSkill, code, view }) {
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
          <div className="inner-back color-white">
            
              <h3 className="flip-box-header">{title}</h3>
              <p>{description}</p>
              <h2 className="flip-box-header--sub">Tools</h2>
              <ul className="flip-box-list">
                {toolSkill &&
                  toolSkill.map((tool) => <li key={uuidv4()}>{tool}</li>)}
              </ul>
              <a className="flip-box-button1" href={code} target="blank">
            Code
          </a>
          <a className={`${view === undefined} ? 'none': 'flip-box-button2'`} href={view} target="blank">
            View
          </a>
          </div>
        
        </div>
      </div>
    </div>
   
  );
}

export default Card;
