import React from 'react'
import "./education.css"
import { BiCheck } from "react-icons/bi"

const Education = () => {
  return (
    <section id="education">
      <h5>What Majors I Studied</h5>
      <h2> Education</h2>
      <div className="container education-container">
        {/* ---------------------------------------------------- */}

        <article className='education'>
          <div className="education-head">
            <h3>
              Diploma of Education
            </h3>
          </div>
          <ul className="education-list">
            <li>
              <BiCheck className='education-icon' />
              <p>Frontend Developer</p>
            </li>
            <li>
              <BiCheck className='education-icon' />
              <p>At Hyper Island College</p>
            </li>
            <li>
              <BiCheck className='education-icon' />
              <p>Aug 2021 - Mar 2023</p>
            </li>

          </ul>
        </article>
        {/* ---------------------------------------------------- */}
        <article className='education'>
          <div className="education-head">
            <h3>
              Bachlor of Engineering
            </h3>
          </div>
          <ul className="education-list">
            <li>
              <BiCheck className='education-icon' />
              <p>Hardware Technology Engineering</p>
            </li>
            <li>
              <BiCheck className='education-icon' />
              <p>At Qazvin Azad University (QAU)</p>
            </li>
            <li>
              <BiCheck className='education-icon' />
              <p>Jan 2007 - Nov 2013</p>
            </li>

          </ul>
        </article>

      </div>
    </section>

  )
}

export default Education