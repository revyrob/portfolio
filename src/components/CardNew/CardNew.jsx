import "./CardNew.scss";
import { v4 as uuidv4 } from "uuid";

function CardNew({ title, description, image, toolSkill, code, view }) {
    return (
        <div className="box-exterior">
        <div class="box-item">
        <div class="flip-box">
        <div
        className="flip-box-front text-center"
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
        >
        <div class="inner color-white">
        {/* <h3 class="flip-box-header">Projects</h3>
    <p>Web Application Build</p> */}
    <img
    src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
    alt="side arrow"
    className="flip-box-img"
    />
    </div>
    </div>

    <div class="flip-box-back " >
    <div class="inner color-white">
    <h3 class="flip-box-header">{title}</h3>
    <p className="flip-box-p">{description}</p>
    <h2 className="flip-box-header--sub">Tools</h2>
    <ul className="flip-box-list">
    {toolSkill &&
      toolSkill.map((tool) => <li key={uuidv4()}>{tool}</li>)}
      </ul>
      <a className="flip-box-button1" href={code} target="blank">
      Code
      </a>
      
      <a  href={view} className={`${view === "" ? 'none': 'flip-box-button2'}`}target="blank">
      View
      </a>
    </div>
    </div>
    </div>
    </div>
    </div>
    );
}
export default CardNew;
