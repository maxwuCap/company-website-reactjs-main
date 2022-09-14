import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Header() {
  return (
    <header>
      <video src="/daycare.mp4" loop autoPlay muted></video>
      
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
                Sign Up
        </button>
        <button className="btn" style={{ cursor: "pointer" }}>
              Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
