import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './navbar';
import image1 from '../img/1.png';
import image15 from '../img/15.gif';
import image17 from '../img/17.png';
import image18 from '../img/18.jpg';
import { Parallax, Background } from 'react-parallax';

class Home extends React.Component {
  render(){
    return(
      <div>
        <NavBar />

        <img className="gif" src={image15} alt=""/>
        <img className="dreamix" src={image17} alt=""/>
        <div className="main-div">
          <Parallax
          blur={0}
          bgImage={require('../img/14.jpg')}
          bgImageAlt="the cat"
          strength={-250}
          >
            <div className="first-image" style={{ height: '400px'  }} />
          </Parallax>
          {/*<img className="blue-ocean" src={image18} alt=""/>

          <img className="" src="https://media0.giphy.com/media/xTiTnt32oDfhmJBlJu/giphy.gif" alt=""/>
          <img className="" src="https://thumbs.gfycat.com/ExhaustedSandyCalf-size_restricted.gif" alt=""/>
          <img className="" src="https://giphy.com/embed/ja0M23DE1fipScX58W" alt=""/>
          <iframe src="https://giphy.com/embed/ja0M23DE1fipScX58W" width="480" height="270" frameBorder="0" class="" allowFullScreen></iframe><p></p>*/}
          <div className="brain-background">
          
            <img className="brain" src="http://2.bp.blogspot.com/-uJ2lgXJmxzA/VhfY9CV7CuI/AAAAAAACTjk/KdHifA0cElQ/s1600/f5ebfedd1c902cb0632b2ff83f76209f.jpg" alt=""/>
            <div className="healthcare">The next generation of healthcare</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
