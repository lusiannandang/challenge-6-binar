import styles from "./Register.module.css";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { RegisterEmail, RegisterGoogle } from "../../config/redux/action/authAction";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dataLogin } = useSelector((store) => store.auth);

  const handleRegister = async () => {
    // eslint-disable-next-line
    const data = await dispatch(RegisterGoogle());
    alert("Anda berhasil Register!");
  };

  const handleRegisterEmail = () => {
    dispatch(RegisterEmail(email, password));
    alert("Anda berhasil Register!");
  };

  useEffect(() => {
    if (dataLogin?.email === "admin@admin.com") navigate("/dashboard");
    if (dataLogin !== null && dataLogin?.email !== "admin@admin.com") navigate("/home");
  }, []);
  return (
    <>
      <Container className={styles.body}>
        <img src="/logo2.png" alt="" />
        <h1 className={styles.text}>Create new Account</h1>
        <p className={styles.p}>Email</p>
        <input className={styles.input} type="email" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <p className={styles.p}>Password</p>
        <input className={styles.input} type="password" placeholder="6+Karakter" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <Button onClick={() => handleRegisterEmail()} className={styles.button} variant="primary">
          Sign In
        </Button>
        <Button onClick={() => handleRegister()} className={styles.button} variant="primary">
          Sign In With Google
        </Button>
        <h2 className={styles.h2}>
          Already have an account? <Link to="/login">Login</Link>
        </h2>
      </Container>
    </>
  );
};

export default LoginForm;
