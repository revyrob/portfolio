import React from 'react'
import './Info.scss';

function Info() {
  return (
    <div className='info'>
        <h1 className='info__title'>I'm <span className="info__title--change">Kayle Robson</span>.  I am fervid about coding and creating!</h1>
        
    <div> <p className='info__p'>I am a dynamic software developer and started self-learning web development 3 years ago. 
    In the last year and a half, I completed a Web Development Bootcamp with Brainstation, finished my first year of a Computing Science degree at Thompson River University, 
    and was hired as a Teaching Assistant for the Web Development Bootcamp at Brainstation.  I am now looking for an opportunity with a welcoming 
    team where I can continue to learn and build my skills as a Software Developer.
    </p>

    <p className='info__p'>Within personnel projects, group projects, and hackathons I have used different databases such as 
    MongoDB and MYSQL, frontend frameworks such as React and NextJS, and backend frameworks such as Express and Node.  I have taken classes 
    in C, C#, Python, Java, and Javascript. I continue to be excited to learn new languages and frameworks and see how I can
    pull them into personnel projects so I can start to master them.</p>
    
    <p className='info__p'>
    I have a previous diploma in Water Quality Technology Engineering and I worked as 
    a Environmental Technologist for a few years.  I than opened a bar with my husband and self-learned how to do the bookkeeping,
    payroll, and general administration.  Later we moved to France and I worked in the hospitality industry for 4 years.  I leanred French
    and I excelled in my ability to be efficient, organized, and communicate to staff and clients in a new language. 
    </p>   

    <p className='info__p '>I love programming because I can make my ideas tangible, continue to learn, take a large problems and cut them 
    into bite size pieces, and work with intelligent and creative people.</p>
    </div>
    </div>
  )
}

export default Info