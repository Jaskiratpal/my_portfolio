import React, { Component } from 'react';

export default class MyInfo extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid mainJumbo">
          <div className="container">
            <h1 className="display-4">Jaskiratpal Singh</h1>
            <p className="lead">A Computer Science graduate who loves the art of Software Engineering and aspires to learn.</p>
            <a className="btn btn-primary btn-lg buttonLinks" href="/projects" role="button">Projects</a>
            <a className="btn btn-primary btn-lg buttonLinks" href="/contact" role="button">Contact</a>

          </div>
        </div>
        <div className="container">
          <h3>About Me</h3>
          <hr className="my-4"></hr>
          <p>Hello! I'm Jas, a Computer Science graduate situated near San Francisco, CA. I love learning new technologies and my primary interest is full-stack development. I developed this website using the MERN stack and you may view my projects by using the projects link.
          </p>
          <p>If you would like to reach out to me then please click the "contact" link and I'll be in touch with you ASAP.
          </p>
          <br></br>
          <h3>Education</h3>
          <hr className="my-4"></hr>
          <div class="row mainEducation">
            <div className="col-sm-10">
              <h5>California State University of Fresno</h5>
              <p>B.S in Computer Science </p>
            </div>
            <div className="col-sm-2 bulldogsLogo">
            </div>
          </div>
          <br></br>
          <h3>Projects</h3>
          <hr className="my-4"></hr>
          <div class="card-deck">
            <div class="card">
            <a href="https://github.com/Jaskiratpal/myathelite"><img class="card-img-top" src="images/myathelite.png" alt="Card image cap" /></a>
              <div class="card-body">
                <a href="https://github.com/Jaskiratpal/myathelite" ><h5 class="card-title">MyAthelite</h5></a>
                <h5>Full-Stack</h5>
                <p class="card-text">A web application built for athletes. Allows users to upload stats tailored for sports of choice and puts them in a database to be viewed by others. Features status messages and communication.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">HTML, CSS, Express.js, MongoDB, AJAX, JQuery, Express Handlebars, Materialize CSS</small>
              </div>
            </div>
            <div class="card">
            <a href="https://github.com/Jaskiratpal/picross"><img class="card-img-top" src="images/picross.png" alt="Card image cap" /></a>
              <div class="card-body">
                <a href="https://github.com/Jaskiratpal/picross"><h5 class="card-title">Picross</h5></a>
                <h5>Back-End & Game Logic</h5>
                <p class="card-text">A puzzle game also know as nonogram where the goal is to discover all the tiles with the least amount of mistakes. Features multiple game modes, time trackers and a hi-score board.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">JavaScript, HTML, CSS, PHP, AJAX, JQuery, MySQL</small>
              </div>
            </div>
            <div class="card">
            <a href="https://github.com/Jaskiratpal/BFSMaze"><img class="card-img-top" src="images/card-img.png" alt="Card image cap" /></a>
              <div class="card-body">
                <a href="https://github.com/Jaskiratpal/BFSMaze"><h5 class="card-title">Maze Game</h5></a>
                <h5>Full-Stack</h5>
                <p class="card-text">A maze game where the goal is to acquire the magical treasure chest before being consumed by enemy bats. Enemy AI pathing done using Breadth-first search.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">C++, OpenGL</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}