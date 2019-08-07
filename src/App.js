import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import NavBar from './components/navbar';
import Home from './components/home';
import Industry from './components/industry';
import Market from './components/market';
import Trends from './components/trends';
import Problems from './components/problems';
import Solutions from './components/solutions';
import Survey from './components/survey';
import Survey2 from './components/survey2';
import Comparative from './components/comparative';
import Canvas from './components/canvas';
import Value from './components/value';
import Persona from './components/persona';
import Forecast from './components/forecast';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/industry" component={Industry} />
        <Route exact path="/market" component={Market} />
        <Route exact path="/trends" component={Trends} />
        <Route exact path="/problems" component={Problems} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/survey-2" component={Survey2} />
        <Route exact path="/comparative" component={Comparative} />
        <Route exact path="/canvas" component={Canvas} />
        <Route exact path="/value" component={Value} />
        <Route exact path="/persona" component={Persona} />
        <Route exact path="/forecast" component={Forecast} />
      </Router>
    </div>
  );
}

export default App;
