import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <img className="neko-logo" src="https://cdn.imgbin.com/0/13/18/imgbin-nerve-injury-neuron-nervous-system-auriculotemporal-nerve-aQKds2xrQeUXi3PUwPeEQD13p.jpg" alt=""/>
        <Link className="navbar-brand" to="/">Dreamix</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/industry">Industry</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/market">Market</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trends">Trends<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/problems">Problems</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/solutions">Solutions</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/survey">Survey</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/comparative">Comparative grid</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/canvas">Canvas</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/value">Value proposition</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/persona">Persona</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/forecast">Forecast</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
