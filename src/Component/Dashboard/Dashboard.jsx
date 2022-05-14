import { Container, Navbar, Form, Button, Flexbox, FormControl } from "react-bootstrap";
import styles from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const { dataLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataLogin?.email !== "admin@admin.com") navigate("/login");
  }, []);
  return (
    <>
      <Container className="d-flex m-lg-0 p-lg-0">
        <div className="d-flex">
          <div className={styles.sidebar}>
            <img className={styles.logo1} src="/logo1.png" alt="" />
            <div>
              <img className={styles.logo1} src="/home-icon.svg" alt="" />
              <p className={styles.textSide} style={{ marginLeft: "5px" }}>
                Dashboard
              </p>
            </div>
            <div>
              <img className={styles.logo1} src="/fi_truck.svg" alt="" />
              <p className={styles.textSide} style={{ marginLeft: "18px" }}>
                Cars
              </p>
            </div>
          </div>
          <div className={styles.leftMenu}>
            <div>
              <img className={styles.logo2} src="/logo2.png" alt="" />
            </div>
            <div>
              <h1 className={styles.menuH1}>DASHBOARD</h1>
              <div className={styles.menuP}>
                <p>Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dashboard}>
          <div>
            <Container className={styles.navbar}>
              <div className={styles.menuLogo}>
                <img src="/fi_menu.svg" alt="menu" />
              </div>
              <div className={styles.navSearch}>
                <input type="text" placeholder="Search" />
                <button>Search</button>
              </div>
              <div className={styles.account}>
                <img src="/account-icon.svg" alt="acc-icon" />
                <p>Unis Badri</p>
                <img src="/fi_chevron-down.svg" alt="down" />
              </div>
            </Container>
          </div>
          <div className={styles.containerDash}>
            <div className={styles.breadcrumb}>
              <h6>Dashboard</h6>
              <img src="/chevron-right.svg" alt="right" style={{ marginTop: "-10px" }} />
              <h6 style={{ fontWeight: "300" }}>Dashboard</h6>
            </div>
            <div>
              <h4 style={{ fontWeight: "700" }}>Dashboard</h4>
              <h4>Welcome Admin</h4>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
