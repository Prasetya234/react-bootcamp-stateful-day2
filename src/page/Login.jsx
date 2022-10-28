import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import logo from "../assets/image.png";

export default class Login extends Component {
  render() {
    return (
      <div className="utama">
        <div className="pembungkusImage">
          <img src={logo} alt="logo" className="image" />
        </div>
        <div className="kanan">
          <div className="kananAtas">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Bahasa Indonesia
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button>Registration</button>
          </div>
          <h3>Login to your Dashboard</h3>
          <div className="kotakLogin">
            <span>Email</span>
            <br />
            <input placeholder="Your Email"></input>
            <br />
            <span>Password</span>
            <br />
            <input placeholder="Your Password"></input>
            <br />
            <button>Log in</button>
            <p>Forgot your password?</p>
          </div>
        </div>
      </div>
    );
  }
}
