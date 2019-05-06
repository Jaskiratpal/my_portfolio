import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

var FontAwesome = require('react-fontawesome');

export default class ProjectList extends Component {
  render() {
    return (
      <div className="container-fluid carouselContainer">
        <div className="row">
          <div className="col-lg-12 projectsLabelCol">
          <hr className="my-4"></hr>
            Projects
            <hr className="my-4"></hr>
            
          </div>
          
          <div className="col-lg-1 projectsCol" />
          <div className="col-lg-4 projectsCol">
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ma-main.PNG"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>My Athelite</h2>
                  <p>Connect yourself to other athletes. Build your portfolio, updates your stats, communicate with other athletes.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ma-profile.PNG"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <p>View player profiles to send messages or check out their stats.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ma-stats.PNG"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <p>Discover other athletes and how they compare against you.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br></br>
            <h3>MyAthelite <a href="https://github.com/Jaskiratpal/myathelite"><FontAwesome className="projectsFa" name="github" size="m" /></a></h3> <a href="http://www.myathelite.com/"> <h5>www.myathelite.com </h5></a>
            <h5>Full-Stack</h5>
            <p>A web application that allows athletes to upload and showcase their stats. Google account required to login and creat a profile. Allows stats for multiple sports and allows user to include their own sports. Dynamically added user sports become available for all users to acess.
            </p>
            <p>Athletes can visit each others profiles, post status messages and view stats.
            </p>
            <hr className="my-4"></hr>
            <p> Express - MongoDB - Heroku - Handlebars - Materialize - HTML - CSS
            </p>

          </div>
          <div className="col-lg-2 projectsCol" />

          <div className="col-lg-4 projectsCol">
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/pr-main.PNG"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Picross</h2>
                  <p>Find the solution to the grid with minimal mistakes and in the shortest time.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/pr-game.PNG"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <p>Follow the hints to find the correct boxes. Take your time!!</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br></br>
            <h3>Picross <a href="https://github.com/Jaskiratpal/picross"><FontAwesome className="projectsFa" name="github" size="m" /></a></h3>
            <h5>Game Logic & Back-End</h5>
            <p>A puzzle game with the primary goal of finding the correct boxes by following a discrete tomography.
            </p>
            <p>User can get high-scores by making the least amount of mistakes in the fastest time possible. Top 10 performers are entered into the high-scores ladder to be viewed by everyone.
            </p>
            <p>Game Modes: Random, Arcade(levels) and Attack(timed).
            </p>
            <hr className="my-4"></hr>
            <p> JavaScript - PHP - MySQL - HTML - CSS
            </p>
          </div>

          <div className="col-lg-1 projectsCol" />

        </div>
      </div>

    )
  }
}