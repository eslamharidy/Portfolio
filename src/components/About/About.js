import React, { Component } from 'react';
import './about.css';
import AnimatedBg from "react-animated-bg";
import body from './body.png';

export default class About extends Component {
    render() {
        return (
            <div className='page'>
                  <AnimatedBg
                    colors={["#FA0404", "#FAE804", "#16FA04", "#041EFA"]}
                    duration={4.5}
                    delay={1}
                    timingFunction="ease-out"
                    className="animated-section"
                > <img src={body}></img>
                </AnimatedBg>

                   <div
          className="six wide column "
          data-aos="fade-up-left"
          data-aos-duration="600"
          data-aos-easing="ease"
          data-aos-delay="400">
          
          <div className="iframeWrapper">
          
            <iframe
              className="iframer"
              title="resume"
              
              src="https://drive.google.com/file/d/1dOYNGpZgeF0TxqWj6yFQiRY1ikcsPJst/view?usp=sharing"
            />
          <h2 id="resumeCapt">Resume</h2>
          </div>
        </div>

        <div className="previewResCont">
            Or preview it {" "}
            <a
              href="https://drive.google.com/file/d/1dOYNGpZgeF0TxqWj6yFQiRY1ikcsPJst/view?usp=sharing">
               here
            </a>
          </div>
            </div>
        )
    }
}
