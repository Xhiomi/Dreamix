import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './navbar';
// import imagen from '../posts/assets/imagen.jpg';
import image1 from '../img/10.png';

class Canvas extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <img className="statistics" src={image1} alt=""/>
      </div>
    )
  }
}

export default Canvas;
