import { Container, Row, Col } from "react-bootstrap";
import styles from "./Hero.module.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const data = useSelector((globalStore) => globalStore);

  const navigate = useNavigate();

  const checkLogin = () => {
    if (data.auth.dataLogin === null || data.auth.dataLogin?.email === "admin@admin.com") navigate("/login");
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <section className={styles.body}>
        <Container>
          <Navbar />
          <Row style={{ width: "1440px" }}>
            <Col className={styles.textContainer}>
              <h1 className={styles.textHead}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className={styles.textParagraph}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </Col>
            <Col>
              <img className={styles.img} src="/img_car.png" alt="car" width="704px" height="408px" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </section>
    </>
  );
};

export default Hero;
