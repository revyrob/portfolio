import './About.scss';
import kayle from '../../assets/images/kayle.png';
import github from '../../assets/icons/github.svg';
import linkedIn from '../../assets/icons/icon-linkedin.png';
import instagram from '../../assets/icons/icon-instagram.png';
import mail from '../../assets/icons/mail-icon.svg';
import { useRef } from "react";
import { useInView } from "framer-motion";
import Info from '../Info/Info';

function About() {
    //useRef and useInView for the photo of myself moving into the screen when 'inview'
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
        <section className="about">
        <Info />
       
        
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
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}>
            <a target="_blank" rel="noopener noreferrer" a href="mailto:kayle.robson@gmail.com">
        <div className='about__socialListItem'>
        <img className='about__social--icon' src={mail} alt='mail icon' /><p className='about__social--p'>Email me</p>
        </div></a>
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