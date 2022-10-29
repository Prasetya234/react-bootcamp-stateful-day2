import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Registration from "./page/Registration";
import Home from "./page/Home";
import Product from "./page/Product";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar bg="secondary" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">Restor Alteri</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/product">Menu</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product" element={<Product />} />
          </Routes>
        </Router>
      </>
    );
  }
}
