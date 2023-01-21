import { ReactP5Wrapper } from "react-p5-wrapper";
import Typed from 'typed.js';
import sketch from "../../sketch";
import { useEffect, useRef } from "react";
import './Banner.scss';

function Banner() {
    // Create reference to store the DOM element containing the animation
	const el = useRef(null);
    // Create reference to store the Typed instance itself
      const typed = useRef(null);
  
    useEffect(() => {
      const options = {
          strings: [
            "Hello World",
            "I sparkle during Hackathons",
            "I am fervid about coding",
            "I am a FullStack Developer",
            "I debug code like a jed",
            "I debug code like a mast",
            "I debug code like a junior developer!"
        ],
        typeSpeed: 150,
        backSpeed: 100,
      };
      
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])
    
    return(
        <section className="banner">
            <div className="banner__sketch">
                <ReactP5Wrapper sketch={sketch} />
            </div>
            <div className="banner__about">
            <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
        </section>
        );
    };
    
    export default Banner;
    