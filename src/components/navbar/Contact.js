import React, { Component } from 'react';
import './Contact.css';
import Navbar from 'react-bootstrap/Navbar';
import github from './images/github.png'
import email from './images/email.png'
import LinkedIn from './images/LinkedIn.png'
import whatsapp from './images/whatsapp.png'


export default class Contact extends Component {
    
    render() {
        return <><div className="Navbar">
        <Navbar bg="transperant" className="git">
          <Navbar.Brand href="https://github.com/eslamharidy">
          <span className="Github link">Github</span>
          <img
              src={github}
              width="30"
              height="30"
              className="d-inline-block"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
         </Navbar>
        <br />
        <Navbar bg="transperant" className="linked">
          <Navbar.Brand href="https://www.linkedin.com/in/eslam-haridy-0b14316a/">
           <span className="LinkedIn link">LinkedIn</span>
            <img id="Linkedin"
              src={LinkedIn}
              width="30"
              height="30"
              className="d-inline-block"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
        <br />
        <Navbar bg="transperant"  variant="light" className="mail">
          <Navbar.Brand href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=eslamissy@hotmail.com">
          <span className="email link">Email</span>
           <img id="email"
              alt="email"
              src={email}
              width="30"
              height="30"
              className="d-inline-block"
            />
          </Navbar.Brand>
        </Navbar>
        <br />
        <Navbar bg="transperant"  variant="light" className="wp">
          <Navbar.Brand href="https://api.whatsapp.com/send?phone=31639086126&amp;text=Hi! I am writing to you from your website">
          <span className="whatsapp link">Whatsapp </span>
           <img id="whatsapp"
              alt="whatsapp"
              src={whatsapp}
              width="30"
              height="30"
              className="d-inline-block"
            />
          </Navbar.Brand>
        </Navbar></div>
      </>
                
    }
}