import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../../sketch";
import './Banner.scss';

function Banner() {
  
    
    return(
        <section className="banner">
            <div className="banner__sketch">
                <ReactP5Wrapper sketch={sketch} />
            </div>
           
        </section>
        );
    };
    
    export default Banner;
    