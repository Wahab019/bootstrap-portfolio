import "bootstrap/js/dist/collapse.js";
import "bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import Link from
const Header = () => {
  return (
    <>
      {/* navbar */}
      <Navbar
        expand="lg"
        className="navbar navbar-expand-lg navbar-light bg-white py-3"
      >
        <Container className="px-5">
          <Navbar.Brand href="/">
            <span className="fw-bolder text-primary">Start Bootstrap</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
