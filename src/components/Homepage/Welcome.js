import React, { Component } from 'react';
import SplitText from 'react-pose-text';
import './style.css';




const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 50
    }
};


export default class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Welcome!  I'm 
      </SplitText> <span className="myname"><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Eslam Haridy</SplitText></span>
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>.
      </SplitText><br>
                </br>
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Full-Stack Developer
      </SplitText>
      <div className=" box">
      <a href="#about"><button className="textbox-label " id='aboutme'>About me </button></a>
      <a href="#mystack"><button className="textbox-label" id='stack'>My Stack </button></a>
      <a href="#myprojects"><button className="textbox-label" id='projects'>My Projects </button></a>
     </div>
</div>
            
        )
    }
}
