import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const pageStyle = {
  backgroundImage: `url(https://wallpaperaccess.com/full/1567666.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
};

const headerStyle = {
  fontSize: "32px",
  fontWeight: "bold",
};

const paragraphStyle = {
  fontSize: "20px",
};


const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('user'));

  return (
    <div style={pageStyle}>
      <div className="alert">
        <strong style={headerStyle}>Home Page</strong>
      </div>
      <h2>Welcome to Our App</h2>
      <p style={paragraphStyle}>
        You are not logged in. Click the button below to log in and access your dashboard.
      </p>

      <Row>
        <Col>
          {
            isLoggedIn ? <Button disabled>Login</Button> :
              <Link to="/login"><Button color="primary">Login</Button></Link>
          }
        </Col>
        <Col>
          {isLoggedIn ?
            <Link to="/dashboard"><Button color="primary">Dashboard</Button></Link> :
            <Button disabled>Dashboard</Button>
          }
        </Col>
      </Row>
    </div>
  );
}

export default Home;
