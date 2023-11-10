import React from "react";
import "./experience.css";
import { DiJavascript1 } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5> </h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        {/* ------------------part1----------------------- */}
        <div className="experience-frontend">
          <h3>Frontend Developer</h3>
          <div className="experience-content">
            <article className="experience-details">
              <AiOutlineHtml5 className="experience-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <DiCss3Full className="experience-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <DiJavascript1 className="experience-icon" />
              <div>
                <h4>JS</h4>
                <small className="text-light">Elementary</small>
              </div>
            </article>

            <article className="experience-details">
              <FaReact className="experience-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Elementary</small>
              </div>
            </article>

            <article className="experience-details">
              <BsBootstrap className="experience-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* ------------------part2----------------------- */}
        <div className="experience-backend">
          <h3>Backend Developer</h3>
          <div className="experience-content">
            <article className="experience-details">
              <FaNodeJs className="experience-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience-details">
              <DiPhp className="experience-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience-details">
              <SiMysql className="experience-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience-details">
              <SiMongodb className="experience-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
