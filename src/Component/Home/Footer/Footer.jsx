import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Twitch, Envelope, Instagram } from "react-bootstrap-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <Container className={styles.body}>
          <Row>
            <Col sm>
              <p className={styles.section1}>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p className={styles.section1}> binarcarrental@gmail.com</p>
              <p className={styles.section1}>081-233-334-808</p>
            </Col>
            <Col sm>
              <Row>
                <a className={styles.section2} href="/OurService">
                  Our services
                </a>
                <a className={styles.section2} href="/Why">
                  Why Us
                </a>
                <a className={styles.section2} href="/Testimonial">
                  Testimonial
                </a>
                <a className={styles.section2} href="/FAQ">
                  FAQ
                </a>
              </Row>
            </Col>
            <Col sm>
              <p>Connect with us</p>
              <a href="facebook.com">
                <Facebook color="darkblue" size={32} />
              </a>
              <a href="facebook.com">
                <Instagram className={styles.section3} color="darkblue" size={32} />
              </a>
              <a href="facebook.com">
                <Twitter className={styles.section3} color="darkblue" size={32} />
              </a>
              <a href="facebook.com">
                <Envelope className={styles.section3} color="darkblue" size={32} />
              </a>
              <a href="facebook.com">
                <Twitch className={styles.section3} color="darkblue" size={32} />
              </a>
            </Col>
            <Col sm>
              <p>Copyright Binar 2022</p>
              <img src="/brand.png" alt="logo" />
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
