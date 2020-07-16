import React from "react";

const Approach = () => {
  return (
    <div className="approach">
      <div className="container">
        <div className="row">
          <h3 className="h3">Contact Me</h3>
        </div>
        <div className="next-row">
          <h4>
            I’m currently available for freelance work.If you have a project
            that you want to get started, think you need my help with something
            or just want to say hey, then get in touch.
          </h4>
        </div>
        <div className="button-class">
          <a href="mailto: anchalthool30@gmail.com">
            <button className="button">MESSAGE ME</button>
          </a>
        </div>
        <h3 className="h33">or</h3>
        <h3 className="h33">find me here</h3>
        <div className="icons">
          <a href="https://www.instagram.com/coolkidank/">
            <i className="fab fa-instagram icone"></i>
          </a>
          <a href="https://www.facebook.com/anchal.thool.1/">
            <i className="fab fa-facebook-square icone"></i>
          </a>
          <a href="https://github.com/anchalthool">
            <i className="fab fa-github icone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Approach;
