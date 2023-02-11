import './About.scss';
import kayle from '../../assets/images/kayle.png';
import github from '../../assets/icons/github.svg';
import linkedIn from '../../assets/icons/icon-linkedin.png';
import instagram from '../../assets/icons/icon-instagram.png';
import mail from '../../assets/icons/mail-icon.svg';
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
        <h1 className='about__title'>I'm <span className="about__title--change">Kayle Robson</span>.  I am fervid about coding and creating!</h1>
        
        <p className='about__p'>I am a dynamic software developer and started self-learning web development 3 years ago. 
        In the last year and a half, I completed a Web Development Bootcamp with Brainstation, finished my first year of a Computing Science degree at Thompson River University, 
        and was hired as a Teaching Assistant for the Web Development Bootcamp at Brainstation.  I am now looking for an opportunity with a welcoming 
        team where I can continue to learn and build my skills as a Software Developer.
        </p>

        <p className='about__p'>Within personnel projects, group projects, and hackathons I have used different databases such as 
        MongoDB and MYSQL, frontend frameworks such as React and NextJS, and backend frameworks such as Express and Node.  I have taken classes 
        in C, C#, Python, Java, and Javascript. I continue to be excited to learn new languages and frameworks and see how I can
        pull them into personnel projects so I can start to master them.</p>
        
        <p className='about__p'>
        I have a previous diploma in Water Quality Technology Engineering and I worked as 
        a Environmental Technologist for a few years.  I than opened a bar with my husband and self-learned how to do the bookkeeping,
        payroll, and general administration.  Later we moved to France and I worked in the hospitality industry for 4 years, it helped me 
        learn French and I excelled in my ability to be efficient, organized, and communicate to staff and clients in a language I was learning. 
        </p>   

        <p className='about__p '>I love programming because I can make my ideas tangible, continue to learn, put into practice the ability
        to take a large problem and cut it into bite size pieces, and work with intelligent, creative people.</p>
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