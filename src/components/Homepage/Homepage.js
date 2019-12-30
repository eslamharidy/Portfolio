import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './style.css';
// import Contact from '../navbar/Contact';

export default class Homepage extends Component {
    render() {
        return<Particles className='Particles'
              params={{
                "particles": {
                  "number": {
                    "value": 118,
                    "density": {
                      "enable": true,
                      "value_area": 552.4033491425909
                    }
                  },
                  "color": {
                    "value": "#f7f7f7"
                  },
                  "shape": {
                    "type": "star",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.19240944730386272,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 50,
                    "color": "#c8c8c8",
                    "opacity": 0.4649894976510016,
                    "width": 0.9620472365193136
                  },
                  "move": {
                    "enable": true,
                    "speed": 8.017060304327615,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": true,
                      "rotateX": 2886.1417095579413,
                      "rotateY": 2805.971106514665
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "bubble"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 401.97822008916586,
                      "size": 8.120772123013452,
                      "duration": 0.3248308849205381,
                      "opacity": 0.5928163649799819,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}></Particles>
    }
}
