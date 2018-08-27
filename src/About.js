import React, {Component} from 'react';
import typewriter from './typewriterFix.jpg';
import './About.css';

class About extends Component {
  render() {
    return(
      <div className='about-tiles'>

        <div className='about-jacob about-tile'>
          <div className='about-img-div'>
            <img src={typewriter} alt='temporary img'/>
          </div>
          <ul>
            <li><h2>Jacob Mirrage</h2></li>
            <li><h3>Senior Head of Accounts</h3></li>
            <li>Helps blind children</li>
          </ul>
        </div>

        <div className='about-page-border-1' />
        
        <div className='about-moran about-tile'>
          <ul>
            <li><h2>Moran Forial</h2></li>
            <li><h3>VP Human Resources</h3></li>
            <li>Helps cure the blind children that Jacob keeps fucking up</li>
          </ul>
          <div className='about-img-div'>
            <img src={typewriter} alt='temporary img'/>
          </div>
        </div>

        <div className='about-page-border-2'/>
        
        <div className='about-ferkin about-tile'>
          <div className='about-img-div'>
            <img src={typewriter} alt='temporary img'/>
          </div>
          <ul>
            <li><h2>Ferkin Yermim</h2></li>
            <li><h3>CTO</h3></li>
            <li>literally doesn't care about anything</li>
          </ul>
        </div>
        
      </div>

    );
  }
}

export default About;
