import React from "react";
import "./header.css";
import Btns from "./Btns";
import Me from "../../assets/header/me1.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header-container" id="home">
        <h5>Hello, I'm</h5>
        <h1>Nooshi Masoudi</h1>
        <h4 className="text-light">
          Front-End Developer, Bachlor of Hardware Technology Engineering
        </h4>

        <Btns />

        <div className="me">
          <img src={Me} className="img-me" alt="Me" />
        </div>

        <HeaderSocials />
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
