import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import MyInfo from "./components/my-info.component";
import Connect from "./components/connect.component";
import ProjectList from "./components/project-list.component";

//import logo from "./logo.png";
class App extends Component {
  render() {
    return (
      <Router>
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
                <Link to="/connect" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={MyInfo} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/connect" component={Connect} />
        </div>
      </Router>

    );
  }

}

export default App;
