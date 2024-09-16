import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/love.png";
import back_icon from "../../assets/love.png";
import user_1 from "../../assets/user-2.png";
import user_2 from "../../assets/user-3.png";
import user_3 from "../../assets/user-4.png";
import user_4 from "../../assets/user-5.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src="" alt={next_icon} className="next-btn" onClick={slideForward} />
      <img
        src=""
        alt={back_icon}
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                The hunter movies is very peace fullly and minded in our
                indian's. The hunter movies to make its's very long time and
                after long time means 3years compleate of one movies. After
                compleate movies or check the nburner and send the tokij
                tokkij.but before send the tokij as first as check the movies is
                working good or not after that send th full india.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                The hunter movies is very peace fullly and minded in our
                indian's. The hunter movies to make its's very long time and
                after long time means 3years compleate of one movies. After
                compleate movies or check the nburner and send the tokij
                tokkij.but before send the tokij as first as check the movies is
                working good or not after that send th full india.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                The hunter movies is very peace fullly and minded in our
                indian's. The hunter movies to make its's very long time and
                after long time means 3years compleate of one movies. After
                compleate movies or check the nburner and send the tokij
                tokkij.but before send the tokij as first as check the movies is
                working good or not after that send th full india.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                The hunter movies is very peace fullly and minded in our
                indian's. The hunter movies to make its's very long time and
                after long time means 3years compleate of one movies. After
                compleate movies or check the nburner and send the tokij
                tokkij.but before send the tokij as first as check the movies is
                working good or not after that send th full india.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
