import Login from "../Component/Login/Login";
// eslint-disable-next-line
import { Flexbox, Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container className="d-flex" style={{ marginLeft: "-12px" }}>
        <img style={{ width: "80%" }} src="/car_login.png" alt="Background" />
        <Login />
      </Container>
    </>
  );
};

export default App;
