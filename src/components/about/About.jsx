import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

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
                <FiUsers/>
                <h5>Clients</h5>
                <small>300 Worldwide </small>
            </article>

            <article className='about__card'>
                <VscFolderLibrary/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
            </article>
          </div>
          
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsa asperiores eaque consequuntur ipsam eum, officiis aliquid excepturi iste magni explicabo maxime modi esse consequatur vero optio eligendi ex vitae!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About