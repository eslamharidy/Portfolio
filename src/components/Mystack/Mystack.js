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
import vue from './images/Vue.png';

    

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
        data-aos-delay="150"
        className="hover">
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
      <ul className="mobile">
         <li
         data-aos="flip-down"
         data-aos-duration="500"
         data-aos-easing="ease"
         data-aos-delay="150">
             <img alt="HTML5" src={HTML5} />
             <img alt="CSS3" src={Css3} />
             <img id= 'js' alt="Javascript" src={JS} />
             </li> 
             <li
         data-aos="flip-down"
         data-aos-duration="500"
         data-aos-easing="ease"
         data-aos-delay="150">
             <img alt="React" src={Reactjs} />
             <img alt="jQuery" src={jquery} />
             <img alt="Material UI" src={mui} />
             </li> 
             <li
         data-aos="flip-down"
         data-aos-duration="500"
         data-aos-easing="ease"
         data-aos-delay="150">
             <img alt="Redux" src={redux} />
             <img alt="Vue.js" src={vue} />
            
             </li> 
      </ul>

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
                  <img alt="Vue.js" src={vue} />
                  <span className="tooltiptext">Vue.js</span>
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
      <ul className="mobile">
         <li
         data-aos="flip-down"
         data-aos-duration="500"
         data-aos-easing="ease"
         data-aos-delay="150">
             <img alt="NodeJS" src={NodeJS} />
             <img alt="expressjs" src={expressjs} />
             <img id= 'js' alt="Javascript" src={JS} />
             </li> 
             <li
         data-aos="flip-down"
         data-aos-duration="500"
         data-aos-easing="ease"
         data-aos-delay="150">
            <img id="gql"alt="GraphQl" src={GraphQl} />
            <img alt="python " src={python} />
            <img alt="Typescript" src={Typescript} />
             </li> 
            
      </ul>
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
          <ul className="mobile">
         <li
         data-aos="flip-down"
         data-aos-duration="500"
         data-aos-easing="ease"
         data-aos-delay="150">
            <img id="docker" alt="Docker" src={docker} />
            <img alt="PostgreSQL" src={postgresql} />
            <img alt="sequelize" src={sequelize} />
             </li> 
      </ul>
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
          <ul className="mobile">
         <li
         data-aos="flip-down"
         data-aos-duration="500"
         data-aos-easing="ease"
         data-aos-delay="150">
            <img alt="Github" src={github} />
            <img alt="npm" src={npm} />
            <img alt="git" src={git} />
             </li> 
      </ul>
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
