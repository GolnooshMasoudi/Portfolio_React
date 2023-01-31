import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaDribbbleSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/nooshi-masoudi-b654a865/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/GolnooshMasoudi"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://dribbble.com/GolnooshM/about"
        target="_blank"
        rel="noreferrer"
      >
        <FaDribbbleSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
