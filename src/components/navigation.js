import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/about-us" exact>
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/case-studies" exact>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" exact>
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact>
                  Skills
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <a href="mailto: anchalthool30@gmail.com">
                    anchalthool30@gmail.com
                  </a>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>Nagpur</li>
                <li>Maharashtra</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+91 9359 788 404</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li> © Copyright 2020.</li>
                <li> All Rights Reserved.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
