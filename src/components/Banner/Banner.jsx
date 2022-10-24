import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../../sketch";
import './Banner.scss';

function Banner() {
    return(
        <div className="banner">
            <div className="banner__sketch">
                <ReactP5Wrapper sketch={sketch} />
            </div>
            {/* <div className="banner__about">
                <h1>About me</h1>
            </div> */}
        </div>
        );
    };
    
    export default Banner;
    