import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';
import {Helmet} from "react-helmet";

import MyInfo from "./components/my-info.component";
import Connect from "./components/connect.component";
import ProjectList from "./components/project-list.component";

var FontAwesome = require('react-fontawesome');
//import logo from "./logo.png";
class App extends Component {
  render() {
    return (
      <Router>
        <Helmet>
          <title>Jas Singh</title>
          <link rel="icon" href="./images/avatar-icon.png"></link>
        </Helmet>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">J.S</a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item navHome active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item navProjects">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item navContact">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <div>
              <a href="https://www.linkedin.com/in/jaskiratpal-singh-6a1812151/"><FontAwesome className="faIcons" name="linkedin" size="lg" /></a>
              <a href="https://github.com/Jaskiratpal"><FontAwesome className="faIcons" name="github" size="lg" /></a>
              <a href="https://drive.google.com/open?id=1maAGaTbIeyq6fSM1rVulox05yAI-21pR"><FontAwesome className="faIcons" name="sticky-note" size="lg" /></a>
            </div>

          </div>
        </nav>
        <div className="">
          <Route path="/" exact component={MyInfo} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/contact" component={Connect} />
        </div>
        <br></br>
        <footer className="page-footer font-small" >

          <div className="footer-copyright text-center py-3">© 2018 Copyright
    <a href="https://mdbootstrap.com/education/bootstrap/"></a>
          </div>

        </footer>
      </Router>

    );
  }

}

export default App;
