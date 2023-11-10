import React from "react";
import "./about.css";
import Me from "../../assets/about/me2.jpeg";
import { BsAward } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className=" container">
        <div className=" container about-container">
          <div className="about-me">
            <div className="about-me-image">
              <img src={Me} alt="My pic" />
            </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <BsAward className="about-icon" />
                <h5>Experience</h5>
                <small>+5 Years</small>
              </article>

              <article className="about-card">
                <MdCastForEducation className="about-icon" />
                <h5>Education</h5>
                <small>Bachlor of Hardware Engineering</small>
              </article>

              <article className="about-card">
                <MdOutlineLibraryAddCheck className="about-icon" />
                <h5>Projects</h5>
                <small>+5 Completed </small>
              </article>
            </div>
            <p>
              I am an energetic, self-motivated front-end developer who has a
              high ability to build productive relationships and is really good
              at team working. I am a junior, but my strong motivation for
              learning helps me consistently improve my skills and exceed
              expectations. At my previous companies, I had a reputation for
              being helpful and able to work with everyone. I enjoy figuring out
              what motivates people, finding common ground, and getting things
              done. I am confident that I can use my skills and experience to
              make a positive contribution to your team. Thank you for
              considering my application. I look forward to the opportunity to
              discuss how I can contribute to the success of your company.
              Golnoosh
            </p>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
