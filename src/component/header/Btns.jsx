import React from "react";
import CV from "../../assets/header/Nooshi_Masoudi_CV.pdf";
import CL from "../../assets/header/Nooshi_Masoudi_Cover_Letter.pdf";

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
