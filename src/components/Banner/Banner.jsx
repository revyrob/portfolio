import { ReactP5Wrapper } from "react-p5-wrapper";
import Typed from 'react-typed';
import sketch from "../../sketch";
import './Banner.scss';

function Banner() {
    return(
        <section className="banner">
            <div className="banner__sketch">
                <ReactP5Wrapper sketch={sketch} />
            </div>
            <div className="banner__about">
                <Typed
                strings={[
                    "Hello World",
                    "I sparkle during Hackathons",
                    "I am fervid about coding",
                    "I am a FullStack Developer",
                    "I debug code like a jed",
                    "I debug code like a mast",
                    "I debug code like a junior developer!",
                ]}
                
                typeSpeed={150}
                backSpeed={100}
                loop
                />
            </div>
        </section>
        );
    };
    
    export default Banner;
    