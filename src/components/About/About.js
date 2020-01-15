import React, { Component } from 'react';
import './about.css';



export default class About extends Component {
  render() {
    return <div className="page" id="about">
      <div className="one">

        <div>
          <img alt="my face" className="face"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
          <p
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >I am Full stack developer with bachelor degree in business administration, always looking to learning new skills and taking new challenges.<br /><br />
            Currently building Full stack Apps with <strong className="bold" id="js">JavaScript</strong>, React, and Redux on frontend.  Using Express.js ,Node.js, docker and PostgreSQL on backend. <br /><br />
            Tomorrow new technologies will come, and i will always keep learning them!<br /><br />
            Have you got a new idea? Lets build a webapp for it, <a id="contact" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=eslamissy@hotmail.com">
              Contact me! </a>
          </p></div>

      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="iframeWrapper">
        <h2 id="resumeCapt">Resume</h2>
        <iframe
          className="iframer"
          title="resume"
          type="application/pdf"
          src="https://docs.google.com/file/d/1xjL93mxXKYdECWuo2KUfT9CyX4z-qSoA/preview?usp=drivesdk"
        />
        <div className="previewResCont">
          Or preview it {" "}
          <a
            href="https://docs.google.com/file/d/1xjL93mxXKYdECWuo2KUfT9CyX4z-qSoA/preview">
            here
              </a>
        </div>

      </div>



    </div>
  }
}
