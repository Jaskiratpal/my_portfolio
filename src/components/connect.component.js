import React, { Component } from 'react';

export default class Connect extends Component {
  render() {
    return (
      <div className="container-fluid carouselContainer">
        <div className="row">
          <div className="col-lg-12 contactLabelCol">
            <hr className="my-4"></hr>
            Contact Me
            <hr className="my-4"></hr>
          </div>
        </div> 
        <div className="contactInfo">
          <h1>E-mail</h1>
          <h4>jaskiratpal.singh@outlook.com</h4><br></br>
          <h1>LinkedIn</h1>
          <a href="https://www.linkedin.com/in/jaskiratpal-singh-6a1812151/"><h4>Jaskiratpal Singh</h4></a><br></br>
          <h1>GitHub</h1>
          <a href="https://github.com/Jaskiratpal"><h4>Jaskiratpal</h4></a><br></br>
          <h1>Resume</h1>
          <a href="https://drive.google.com/file/d/1maAGaTbIeyq6fSM1rVulox05yAI-21pR/view"><h4>Jaskiratpal_Singh_Resume.pdf</h4></a>
        </div>

      </div>
    )
  }
}