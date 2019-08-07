import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './navbar';
import image1 from '../img/1.png';

class Home extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <img className="statistics" src={image1} alt=""/>
      </div>
    )
  }
}

export default Home;
