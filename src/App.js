import React from 'react';
import './App.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Price from './pages/Price';
import Product from './pages/Product';

export default function App() {
  // const { pathname } = window.location;
  // const [isAddProduct, setIsAddProduct] = useState(false);

  // useEffect(() => {
  //   if (pathname === '/product') {
  //     setIsAddProduct(true);
  //   }
  // }, [pathname]);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">App Restoran</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/price">Harga</Nav.Link>
          </Nav>
          {/* <Navbar.Toggle />
          {
            isAddProduct && <Navbar.Brand className="pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              <span style={{ marginLeft: '10px' }}>Add Product</span>
            </Navbar.Brand>
          } */}

        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  )
}

