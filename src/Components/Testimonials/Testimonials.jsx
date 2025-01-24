import React, { useRef } from "react";
import "./Testimonials.css";
import nextbtn from "../../assets/next-icon.png";
import backbtn from "../../assets/back-icon.png";
import userpic1 from "../../assets/user-1.png";
import userpic2 from "../../assets/user-2.png";
import userpic3 from "../../assets/user-3.png";
import userpic4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slide = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
      slide.current.style.transform = `translateX(${tx}%)`;
    }
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
      slide.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div className="testimonials" id="testimonials">
      <img src={nextbtn} alt="" className="next-btn" onClick={slideForward} />
      <img src={backbtn} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slide}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userpic1} alt="" className="userPic" />
                <div className="userinfo">
                  <h3>Ram Pathak</h3>
                  <span>Edusity, Nepal</span>
                </div>
              </div>
              <p>
                Choosing to pusue my degree at Edusity was one the best
                decisions I've ever made. The supportive community
                state-of-the-art facilities, and committment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userpic2} alt="" className="userPic" />
                <div className="userinfo">
                  <h3>Shiva Pathak</h3>
                  <span>Edusity, Nepal</span>
                </div>
              </div>
              <p>
                Choosing to pusue my degree at Edusity was one the best
                decisions I've ever made. The supportive community
                state-of-the-art facilities, and committment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userpic3} alt="" className="userPic" />
                <div className="userinfo">
                  <h3>Krishna Pathak</h3>
                  <span>Edusity, Nepal</span>
                </div>
              </div>
              <p>
                Choosing to pusue my degree at Edusity was one the best
                decisions I've ever made. The supportive community
                state-of-the-art facilities, and committment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userpic4} alt="" className="userPic" />
                <div className="userinfo">
                  <h3>Ganesh Pathak</h3>
                  <span>Edusity, Nepal</span>
                </div>
              </div>
              <p>
                Choosing to pusue my degree at Edusity was one the best
                decisions I've ever made. The supportive community
                state-of-the-art facilities, and committment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
