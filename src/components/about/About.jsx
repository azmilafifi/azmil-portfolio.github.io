import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'
import { FaAward } from 'react-icons/fa'
import { AiFillProject } from 'react-icons/ai'
import {FaConnectdevelop} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
            <div className="about__me-image">
            <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward/>
                <h5>Experience</h5>
                <small>2+ years</small>
            </article>

            <article className='about__card'>
                <AiFillProject/>
                <h5>Project Management</h5>
                <small>1-2 years</small>
            </article>

            <article className='about__card'>
                <FaConnectdevelop/>
                <h5>Web Development</h5>
                <small>1-2 years</small>
                
            </article>
          </div>
          
          <p>An aerospace engineering graduate with 1-2 years experience
working in IT company. A proactive, multi-tasker and great team
player seeking to hone engineering/prorgamming skills and
knowledge in professional setting. A self taught programmer
determined to learn new things and skills. Currently exploring the
world of web development preferably frontend related. I am also
interested in other fields other than engineering to enhance my
skillset.
</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About