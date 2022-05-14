import styles from "./Login.module.css";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginEmail, LoginGoogle } from "../../config/redux/action/authAction";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { dataLogin } = useSelector((store) => store.auth);

  const handleLogin = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) navigate("/home");
  };

  const handleLoginEmail = () => {
    dispatch(LoginEmail(email, password));
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  useEffect(() => {
    if (dataLogin?.email === "admin@admin.com") navigate("/dashboard");
    if (dataLogin !== null && dataLogin?.email !== "admin@admin.com") navigate("/home");
  }, []);
  return (
    <>
      <Container className={styles.body}>
        <img src="/logo2.png" alt="" />
        <h1 className={styles.text}>Welcome to BCR!</h1>
        <p className={styles.p}>Email</p>
        <input className={styles.input} type="email" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <p className={styles.p}>Password</p>
        <input className={styles.input} type="password" placeholder="6+Karakter" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <Button onClick={() => handleLoginEmail()} className={styles.button} variant="primary">
          Sign In
        </Button>
        <Button onClick={() => handleLogin()} className={styles.button} variant="primary">
          Sign In With Google
        </Button>
      </Container>
    </>
  );
};

export default LoginForm;
