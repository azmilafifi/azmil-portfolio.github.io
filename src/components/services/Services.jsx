import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Develop website using React</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Clean design website</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Responsive design</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>HTML, CSS, Javascript</p>
            </li>
          </ul>
        </article>

        {/* End of web development */}

        <article className='service'>
          <div className='service__head'>
            <h3>IT Project Management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Agile practitioner</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Mathematical and budgeting skills</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Market research and design</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Identify and mitigate potential risks</p>
            </li>
          </ul>
        </article>

        {/* End of project management */}

        <article className='service'>
          <div className='service__head'>
            <h3>Other</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Mobile App development using react native</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Certified deep learning engineer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Mechanical Engineering related</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>AI related projects</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services