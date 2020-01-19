import React, { Component } from 'react'
import './mystack.css';
import Bootstrap from './images/Bootstrap.png';
import Css3 from './images/Css3.png';
import docker from './images/docker.png';
import expressjs from './images/expressjs.png';
import git from './images/git.png';
import github from './images/github.png';
import GraphQl from './images/GraphQl.png';
import HTML5 from './images/HTML5..png';
import jquery from './images/jquery.png';
import JS from './images/JS.png';
import NodeJS from './images/NodeJS.png';
import npm from './images/npm.png';
import postgresql from './images/postgresql.png';
import python from './images/python.png';
import Reactjs from './images/Reactjs.png';
import mui from './images/mui.png';
import redux from './images/redux.png';
import Typescript from './images/Typescript.png';
import sequelize from './images/sequelize.png';

    

export default class Mystack extends Component {
    render() {
        return (
            <div id="mystack" className="skillsEle">
                  <h2
        data-aos="flip-down"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay="150">
        Tech Skills
      </h2>
                <h2
        data-aos="flip-down"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay="150">
        Hover over the particular skill for details
      </h2>
      <div
        className="titleEle"
        data-aos="flip-down"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay="150">
        Frontend
      </div>
      <div
        className="ui stackable two column grid"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay="500"
        id="skillsGrid">
        <div className="row">
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="HTML5" src={HTML5} />
                  <span className="tooltiptext">HTML 5</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="CSS3" src={Css3} />
                  <span className="tooltiptext">CSS 3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="Javascript" src={JS} />
                  <span className="tooltiptext">Javascript</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="React" src={Reactjs} />
                  <span className="tooltiptext">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="jQuery" src={jquery} />
                  <span className="tooltiptext">jQuery</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="Material UI" src={mui} />
                  <span className="tooltiptext">Material UI</span>
                </div>
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="Redux" src={redux} />
                  <span className="tooltiptext">Redux</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="Bootstrap" src={Bootstrap} />
                  <span className="tooltiptext">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="titleEle"
        data-aos="flip-down"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay="150">
        Backend
      </div>
      <div
        className="ui stackable two column grid"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay="500"
        id="skillsGrid">
        <div className="row">
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="NodeJS" src={NodeJS} />
                  <span className="tooltiptext">NodeJS</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="expressjs" src={expressjs} />
                  <span className="tooltiptext">express.js</span>
                </div>
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="Javascript" src={JS} />
                  <span className="tooltiptext">Javascript</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="GraphQl" src={GraphQl} />
                  <span className="tooltiptext">GraphQl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="Typescript" src={Typescript} />
                  <span className="tooltiptext">Typescript</span> */}
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  <img alt="python " src={python} />
                  <span className="tooltiptext">Python</span>
                </div>
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                <img alt="Typescript" src={Typescript} />
                  <span className="tooltiptext">Typescript</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="Bootstrap" src={Bootstrap} />
                  <span className="tooltiptext">Bootstrap</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="ui stackable two column grid">
        <div className="three wide column">
          <div
            className="ui grid container bottomGrids"
            data-aos="fade-up-right"
            data-aos-duration="400"
            data-aos-easing="ease">
            <div className="ten wide column">
              <div className="toolCont">
                <img alt="npm" src={npm} />
                <span className="tooltiptext">npm</span>
              </div>
            </div>
            <div className="ten wide column">
              <div className="toolCont">
                <img alt="Docker" src={docker} />
                <span className="tooltiptext">Docker</span>
              </div>
            </div>

          </div>
        </div>

        <div className="five wide column">
          <div
            className="titleEle"
            data-aos="flip-down"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-delay="350">
            Database
          </div>
          <div
            className="ui grid container bottomGrids "
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="ease">
            <div className="ten wide column">
              <div className="toolCont">
                <img alt="PostgreSQL" src={postgresql} />
                <span className="tooltiptext">postgreSQL</span>
              </div>
            
            </div>
            <div className="ten wide column">
            <div className="toolCont">
                <img alt="sequelize" src={sequelize} />
                <span className="tooltiptext">Sequelize</span>
              </div>
            
            </div>
          </div>
        </div>
        <div className="five wide column">
          <div
            className="titleEle "
            data-aos="flip-down"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-delay="350">
            Build
          </div>
          <div
            className="ui grid container bottomGrids"
            data-aos="fade-up-left"
            data-aos-duration="400"
            data-aos-easing="ease">
            <div className="ten wide column">
              <div className="toolCont">
                <img alt="Github" src={github} />
                <span className="tooltiptext">Github</span>
              </div>
            </div>
            <div className="ten wide column">
              <div className="toolCont">
                <img alt="git" src={git} />
                <span className="tooltiptext">git</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}
