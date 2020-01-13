import React, { Component } from 'react';
import './about.css';



export default class About extends Component {
  render() {
    return <div className="page">
      <div className="one">
      <img alt="my face" className="face" />


        <p>Passionate and ambitious developer, never satisfied with learning new skills and taking new challenges.<br/>
         With my background in business administration combined with working experience within multicultural teams is a true asset.<br/>
I enjoy working within teams to share my knowledge and learn from all team members. <br/>
I am Looking for Job as a Full-stack or Front/ back-end developer. </p>
</div>
   
      <div id="about" className="iframeWrapper">
        <h2 id="resumeCapt">Resume</h2>
        <iframe
          className="iframer"
          title="resume"

          src="https://drive.google.com/file/d/1xjL93mxXKYdECWuo2KUfT9CyX4z-qSoA/view?usp=sharing"
        />
        <div className="previewResCont">
          Or preview it {" "}
          <a
            href="https://drive.google.com/file/d/1xjL93mxXKYdECWuo2KUfT9CyX4z-qSoA/view?usp=sharing">
            here
              </a>
        </div>

      </div>

    </div>
  }
}
