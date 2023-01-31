import React from "react";
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer-logo">
        Nooshi Masoudi
      </a>
      {/* <br />
      <b>
        <a
          href="https://github.com/GolnooshMasoudi"
          target="_blank"
          rel="noreferrer"
        >

        </a>
      </b>
      <br /> */}
      <ul className="permalinks">
        <li>
          {/* {" "} */}
          <a href="#home">Home</a>
          {/* {" "} */}
        </li>
        <li>
          {/* {" "} */}
          <a href="#about"> About</a>
          {/* {" "} */}
        </li>
        <li>
          {/* {" "} */}
          <a href="#experience">Experience</a>
          {/* {" "} */}
        </li>
        <li>
          {/* {" "} */}
          <a href="#education">Education</a>
          {/* {" "} */}
        </li>
        <li>
          {/* {" "} */}
          <a href="#portfolio"> Portfolio</a>
          {/* {" "} */}
        </li>
        <li>
          {/* {" "} */}
          <a href="#work-experience">Work Experience</a>
          {/* {" "} */}
        </li>
        <li>
          {/* {" "} */}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        {/* <a href='http://facebook.com'><BsFacebook/></a> */}
        <a
          href="http://instagram.com/golnooshdiaries"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://twitter.com/golnooshnooshi"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
