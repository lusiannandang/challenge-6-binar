import React from "react";
import styles from "./Navbar.module.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function nav() {
  return (
    <>
      <Navbar sticky="top" className={styles.navbar}>
        <Container>
          <Navbar.Brand href="">
            <Link to="/" className={styles.icon}>
              <img src="/brand.png" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link className={styles.navItem} href="#">
              Home
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#">
              Our Service
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#">
              Why Us
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#">
              Testimonial
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#">
              FAQ
            </Nav.Link>
            <Button style={{ backgroundColor: "#5cb85f", border: "none" }}>Register</Button>{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default nav;
