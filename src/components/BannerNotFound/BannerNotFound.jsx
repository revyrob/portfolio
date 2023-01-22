import { ReactP5Wrapper } from "react-p5-wrapper";
import sketchNot from "../../sketchNot.js";

function BannerNotFound() {
   
    
    return(
        <section className="bannerNot">
            <div className="bannerNot__sketch">
                <ReactP5Wrapper sketch={sketchNot} />
            </div>
           
        </section>
        );
    };
    
    export default BannerNotFound;
    