import './About.scss';
import kayle from '../../assets/images/kayle.png';
import github from '../../assets/icons/github.svg';
import linkedIn from '../../assets/icons/icon-linkedin.png';
import instagram from '../../assets/icons/icon-instagram.png';


function About() {
    return (
        <>
        <section className="about">
        <div className='about__info'>
        <h1 className='about__title'>I'm <span className="about__title--change">Kayle Robson</span>.  I am fervid about coding and hackathons!</h1>
        
        <p className='about__p'>I am a team player and I love working with people and making the best possible 
        outcome for a project.  I have participated in 2 worldwide hackathons and three within 
        the Brainstation Web Development bootcamp.   The 2 international hackathons required creating a viable idea within specific time 
        constraints; my teams completed this successfully, overcoming barriers related to language and time zone differences.   
        The graphic designer I worked with in the Belarus hackathon joined my team in the India Hackathon and also I used her 
        graphics in my final bootcamp project.  </p>
        <p className='about__p'>The three hackathons at Brainstation all came with their own challenges.  The API 
        hackathons brought the excitement of learning about APIs, using Git, Agile methodology, and designing a full stack web 
        application within 5 hours!  The industry hackathon with Telus Digital, which we won, was a paired hackathon with the UI/UX Designers.   
        We created reusable code for the components and the application was built with the idea of connecting it to a backend.</p>   
        <p className='about__p'>I am currently working at Brainstation as a Teaching Assistant for the current Web Development cohort, October to December 2022.  I mentor 
        and help teach 36 students and provide feedback to students to ensure they comprehend the material, can apply it to real world 
        coding problems, and follow best practices in the Web Development industry.  I plan and deliver supplementary content to enrich 
        the learning experience of students.</p>
        </div>
        <div className='about__more'>
        <img className='about__imgSelf' src={kayle} alt='kayle robson portrait'/>
        <div className='about__social'>
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
        
        </section>
        </>
        );
    }
    
    export default About;