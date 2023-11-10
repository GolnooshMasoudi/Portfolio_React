import React from "react";
import CV from "../../assets/header/GolnooshMasoudi_CV.pdf";
import CL from "../../assets/header/GolnooshMasoudi_CoverLetter.pdf";

const Btns = () => {
  return (
    <div className="btns">
      <a href={CV} download className="btn">
        DownLoad CV
      </a>
      <a href={CL} download className="btn">
        DownLoad Cover Letter
      </a>
    </div>
  );
};

export default Btns;
