import React from 'react';
import './projects.css';


export default class Projects extends React.Component {
  componentDidMount = () => {
    window.addEventListener('load', this.run);
    window.addEventListener('resize', this.run);
    window.addEventListener('scroll', this.run);
  };

  run = () => {
    const items = document.querySelectorAll('#projectsEle li');
    items.forEach(item => {
      if (this.isInView(item)) {
        item.classList.add('show');
      }
    });
  };

  isInView = item => {
    const rect = item.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  render() {
    return (
      <div id="projectsEle">
        <h2
          data-aos="flip-down"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="150">
          Projects
        </h2>

        <ul
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="250">
 
          
          <li>
            <div className="boxEle">
              <h3>IMP trainer</h3>
              <p>
                A Full-stack fitness application that track and provide workout with diet plan.
              </p>
              <div>
                <img style={{
                  height: "150px"
                }}
                  alt="Fitness app"
                  className="ui image"
                  src="https://media.giphy.com/media/ehPBH3Eaxu2Unalpad/giphy.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS | Material UI</span>
                <span>postgreSQL</span>
                <span>Express</span>
                <span>Node</span>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://imptrainer.com/">
                <button className="projButton">Live</button>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/eslamharidy/Fitness-App">
                {/* <button className="projButton">Source</button> */}
              </a>
            </div>
          </li>

          {/* <li>
            <div className="boxEle">
              <h3>Dice game</h3>
              <p className="backendImp">
                A multiplayer online game built with WebSocket.
              </p>
              {/* <div
                style={{
                  color: 'rgba(233, 75, 75, 1)'
                }}>
                <em>Backend in development</em>
              </div> 
              <div>
                <img
                  style={{
                    height: "150px"
                  }}
                  alt="dice-game"
                  className="ui image"
                  src="https://media.giphy.com/media/lnJV0ujYpmK0Q2hFDT/200w_d.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS | Bootstrap</span>
                <span>REACT</span>
                <span>REDUX</span>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://the-dice-game.herokuapp.com/login">
                <button className="projButton">Demo</button>
              </a> 
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/eslamharidy/dice-game-client">
                <button className="projButton">Source</button>
              </a>
            </div>
          </li>  */}
          
          <li>
            <div className="boxEle">
              <h3>Web shop</h3>
              <p>
                A webshop built with React 
              </p>
              <div>
                <img
                style={{
                    height: "150px"
                  }}
                  alt="webshop"
                  className="ui image"
                  src="https://media.giphy.com/media/JQe80TXngPkA8PpsIL/200w_d.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS</span>
                <span>REACT</span>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://sneakers-district.netlify.com/">
                <button className="projButton">Demo</button>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/mtabanja/webshop">
                <button className="projButton">Source</button>
              </a>
            </div>
          </li>

        </ul>
        <div
          className="moreSoon"
          data-aos="fade"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="150"
          data-aos-offset="150">
          <div />
          <div />
          <div />
          <h1>More projects on my  <a id="more" href="https://github.com/eslamharidy">Github! </a></h1>
        </div>
        <div className="footerContainer">
          © 2020 Copyright: <a href="https://eslam-haridy.netlify.com/">Eslam Haridy. </a>All Rights Reserved.
      </div>

      </div>
    );
  }
}
