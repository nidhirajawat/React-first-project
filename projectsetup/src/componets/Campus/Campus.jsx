import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/fantasy.jpg";
import gallery_2 from "../../assets/gu1.jpg";
import gallery_3 from "../../assets/fantasy.jpg";
import gallery_4 from "../../assets/gu1.jpg";
import gallery_5 from "../../assets/dark.jpg";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={gallery_5} alt="" />
      </button>
    </div>
  );
};

export default Campus;
