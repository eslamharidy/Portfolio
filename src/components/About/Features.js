import React, { Component } from 'react'
import './features.css'
export default class Features extends Component {
    render() {
        return (
            <div
                className="appgoalsEle "
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-easing="ease"
            >       <div
            >
                    My Desirable App Features
      </div>
                <div className="load">
                    <i className="fas fa-mobile-alt">
                        <div className="textBoxEle">
                            <div>Fast</div>
                            <p>Website load speed and performance tested via GTmetrix</p>
                        </div></i>
                    <i className="fas fa-mobile-alt">
                        <div className="textBoxEle">
                            <div>CRUD</div>
                            <p>Most of my applications will follow REST architecture</p>
                        </div>
                    </i>


                    <i className="fas fa-mobile-alt"><div className="textBoxEle">
                        <div>Responsive</div>
                        <p>Designs should work on all devices, desktop and mobile</p>
                    </div></i>
                    <i className="fas fa-mobile-alt">
                        <div className="textBoxEle">
                            <div>Interactive</div>
                            <p>Animations = A User-Friendly application</p>
                        </div>
                    </i>
                </div>
            </div>
        )
    }
}
