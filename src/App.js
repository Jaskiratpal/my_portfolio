import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <div className="container">
        <h2>My Portfolio</h2>
      </div>
      <Route path="/" exact component={MyInfo} />
      <Route path="/projects" component={ProjectList} />
      <Route path="/connect" component={ConnectPage} />
    </Router>

  );
}

export default App;
