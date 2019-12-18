import React, { Component } from 'react';
import './Contact.css';
import Navbar from 'react-bootstrap/Navbar';


export default class Contact extends Component {
    
    render() {
        return <>
        <Navbar bg="light">
          <Navbar.Brand href="https://github.com/eslamharidy">Github</Navbar.Brand>
          <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
         </Navbar>
        <br />
        <Navbar bg="dark">
          <Navbar.Brand href="https://www.linkedin.com/in/eslam-haridy-0b14316a/">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>LinkedIn
        </Navbar>
        <br />
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=eslamissy@hotmail.com">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Email
          </Navbar.Brand>
        </Navbar>
      </>
                
    }
}