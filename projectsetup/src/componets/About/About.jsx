import React from "react";
import "./About.css";
import about_img from "../../assets/images1.jpg";
import about_play from "../../assets/right-arrow.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={about_play}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomarrow's Learns Today</h2>
        <p>
          The hunter movies is very peace fullly and minded in our indian's. The
          hunter movies to make its's very long time and after long time means
          3years compleate of one movies. After compleate movies or check the
          nburner and send the tokij tokkij.but before send the tokij as first
          as check the movies is working good or not after that send th full
          india.
        </p>
        <p>
          The hunter movies is very peace fullly and minded in our indian's. The
          hunter movies to make its's very long time and after long time means
          3years compleate of one movies. After compleate movies or check the
          nburner and send the tokij tokkij.but before send the tokij as first
          as check the movies is working good or not after that send th full
          india.
        </p>
        <p>
          The hunter movies is very peace fullly and minded in our indian's. The
          hunter movies to make its's very long time and after long time means
          3years compleate of one movies. After compleate movies or check the
          nburner and send the tokij tokkij.but before send the tokij as first
          as check the movies is working good or not after that send th full
          india.
        </p>
      </div>
    </div>
  );
};

export default About;
