import React from "react";
import "./Programs.css";
import program_1 from "../../assets/aqu1.jpg";
import program_2 from "../../assets/aqu1.jpg";
import program_3 from "../../assets/aqu1.jpg";
import program_icon1 from "../../assets/image1s.png";
import program_icon2 from "../../assets/image1s.png";
import program_icon3 from "../../assets/image1s.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon1} alt="" />
          <p>The Hunter Movies</p>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon2} alt="" />
          <p>I'm hunger men</p>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon3} alt="" />
          <p>Gabbar is back</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
