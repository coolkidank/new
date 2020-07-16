import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import Approach from "../pages/approach";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>A learning web developer</span>
            </div>
            <div className="line">
              <span>and ready to help you</span>
            </div>
          </h2>
          <div className="btn-row">
            <a>
              <NavLink to="/approach">
                Get In Touch <RightArrow />
              </NavLink>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
