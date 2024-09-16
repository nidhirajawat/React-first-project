import React from "react";
import "./Hero.css";
import scroll from "../../assets/scroll1.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>we ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculm is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamix
          field of education.
        </p>
        <button className="btn">
          Exploer more <img src={scroll} alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
