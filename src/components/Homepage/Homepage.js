import React from 'react'
import profile from '../visual/profile.png';
import website1 from '../visual/old-website.png';
import website2 from '../visual/new-website.png';
import website3 from '../visual/Website3.PNG'
import cqb from '../visual/cqb2.jpg';


import './Homepage.css';
import Card from '../Card/Card';
import SkillBar from '../SkillBar/SkillBar';
import resume from '../../components/visual/Resume.pdf'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Navbar from '../Navbar/Navbar';

function Homepage() {
  return (
    <div className='container'>
        <Navbar />
        <section className='intro-section' id='Home'>
            <p className='intro-text'>
                Hello there,<br/>
                I am Sangyun Kim! <br/>
                Software Engineer
            </p>
            <img src={profile} alt="" className='profile-pic' />
        </section>

        <section className='project-section' id='Project'>
            <div className='title'>PROJECTS</div>
            <div className='cards-scroller'>
                <Card 
                    title='Front-end (React.js)'
                    description='
                    Developed personal website using React JavaScript. 
                    Understanding router and router-DOM to navigate through 
                    different pages such as: home, about, contact page. 
                    Ensured website functions as intended.
                    '
                    background_image={ website3 }
                />
                <Card 
                    title='Front-end (React.js)'
                    description='
                    Developed personal website using React JavaScript. 
                    Understanding router and router-DOM to navigate through 
                    different pages such as: home, about, contact page. 
                    Ensured website functions as intended.
                    '
                    background_image={ website2 }
                />
                <Card 
                    title='Front-end (HTML|CSS|JS)'
                    description='
                    Developed personal website using HTML, CSS, and JavaScript 
                    Explored website functionality such as inserting “about” 
                    page and “contact me” page. Ensured website functions as 
                    intended
                    '
                    background_image={ website1 }
                />
                <Card 
                    title='Annual Training'
                    description='Developed personal website using React JavaScript. 
                    Understanding router and router-DOM to navigate through different 
                    pages such as: home, about, contact page. Ensured website functions as 
                    intended.'
                    background_image={ cqb }
                />
            </div>
        </section>


        <section className='about-section' id='About'>
            <div className='title'>ABOUT ME</div>
            <p className='about-text'>
            I'm a Software Engineer who enjoys developing web-pages and data structures!<br/><br/>
            I'm currently pursuing a bachelor's degree in computer science at the
            University of Massachusetts Boston!<br/>
            <br/>
            I have experience developing web-page with:
            </p>
            <ul className='skill-list'>
                <SkillBar 
                    name='HTML'
                    color_confidency={{backgroundColor:'tomato', width: '50%'}}
                />
                <SkillBar 
                    name='CSS'
                    color_confidency={{backgroundColor:'navy', width: '60%'}}
                />
                <SkillBar 
                    name='JavaScript'
                    color_confidency={{backgroundColor:'gold', width: '20%'}}
                />
                <SkillBar 
                    name='React.JS'
                    color_confidency={{backgroundColor:'mediumturquoise', width: '60%'}}
                />
            </ul>
            <p className='about-text'>
                I have experience developing data structures with:
            </p>
            <ul className='skill-list'>
                <SkillBar 
                    name='Java'
                    color_confidency={{backgroundColor:'goldenrod', width: '70%'}}
                />
                <SkillBar 
                    name='Python'
                    color_confidency={{backgroundColor:'royalblue', width: '50%'}}
                />
                <SkillBar 
                    name='C programming language'
                    color_confidency={{backgroundColor:'steelblue', width: '60%'}}
                />
            </ul>
            <p className='learn-more-text'>
                If learn more about me, check out the resume below!<br/><br/>
                If learn more about personal side of me, check out the personal tab!<br/>
            </p>
            <a href={resume} className='resume-button'>Resume (.pdf)</a>
        </section>


        <section className='personal-section' id='Personal'>
            <div className='title'>Personal</div>
        </section>

        <IconContext.Provider value={{ color: "white" }}>
            <section className='contact-section' id='Contact'>
                <div className='title'>GET IN TOUCH</div>
                <ul className='contact-list'>
                    <a className='contact-item' href='https://github.com/SPC-Toad'>
                        <AiIcons.AiOutlineGithub />
                        <div id='contact-text'>Github</div>
                    </a>
                    <a className='contact-item' href='https://www.linkedin.com/in/sangyun-kim/'>
                        <AiIcons.AiOutlineLinkedin />
                        <div id='contact-text'>LinkedIn</div>
                    </a>
                    <li className='contact-item'>
                        <AiIcons.AiOutlineMail />
                        <div id='contact-text'>SangyunKim2025@gmail.com</div>
                    </li>
                </ul>
            </section>
        </IconContext.Provider>
    </div>
  )
}

export default Homepage