import './About.scss';
import kayle from '../../assets/images/kayle.png';
import github from '../../assets/icons/github.svg';
import linkedIn from '../../assets/icons/icon-linkedin.png';
import instagram from '../../assets/icons/icon-instagram.png';
import { useRef } from "react";
import { useInView } from "framer-motion";

function About() {
    //useRef and useInView for the photo of myself moving into the screen when 'inview'
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
        <section className="about">
        <div className='about__info'>
        <h1 className='about__title'>I'm <span className="about__title--change">Kayle Robson</span>.  I am fervid about coding and hackathons!</h1>
        
        <p className='about__p'>I am a dynamic developer and started self-learning web development 3 years ago. 
        In the last year and a half I completed a Web Development Bootcamp with Brainstation, finished my first year of a Computing Science degree at Thompson River University, 
         and was hired as a Teaching Assistant for the Web Development Bootcamp at Brainstation.  
        </p>
        <p className='about__p'>I am fervid about Hackathons and I have participated in two worldwide and three within my 
        Brainstation Bootcamp.  The industry hackathon with Telus Digital (which we won!!)  was paired with the UI/UX Designers 
        at Brainstation.  We used Agile methodologies, created reusable code for the components, and the frontend was 
        built to connect to a backend.  During my time as a teaching assistant for the Web Development program with Brainstation, 
        I mentored and helped teach 36 students, marked assignments, provided one-on-one mentorship, and participated in weekly 
        stand-ups with the Education Team.
        </p>   
        <p className='about__p'>Before entering tech I worked within the hospitality industry for 4 years in France.  
        Within hospitality I excelled in my ability to be efficient, organized, and meet time
        sensitive deadlines.  Before working in France I was a bookkeeper, handling accounts receivables, payables, payroll, 
        and year-end.  I self-learned this role while we ran our own business and then I later worked for a couple companies within
        the same role.  While learning I had mentor bookkeepers and worked closely with the required accountants to meet their expectations
        for year-end. </p>
        </div>
        
        <div className='about__more'>
        
        <div className="about__img" ref={ref}>
        <img className='about__img--self'  style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} src={kayle} alt='kayle robson portrait'/>
        </div>
        
        <div className='about__social' ref={ref}>
        <div style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s"
        }}>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/revyrob">
        <div className='about__socialListItem'>
        <img className='about__social--icon' src={github} alt='github icon' /><p className='about__social--p'>Follow on Github</p>
        </div></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kayle-robson/">
        <div className='about__socialListItem'>
        <img className='about__social--icon' src={linkedIn} alt='linkedIn icon' /><p className='about__social--p'>Follow on LinkedIn</p>
        </div></a>     
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/klee.robby/">
        <div className='about__socialListItem'>
        <img className='about__social--icon' src={instagram} alt='instagram icon' /><p className='about__social--p'>Follow on Instagram</p>
        </div>   
        </a>          
        </div>
        </div>
        </div>
        </section>
        </>
        );
    }
    
    export default About;