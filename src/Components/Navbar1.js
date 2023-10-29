// Navbar1.js
import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';


function Navbar1() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("this.state.SelectedList")
    localStorage.setItem("isLoggedIn","false")
    navigate('/');
    window.location.reload(false); 
  };

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Project Name</NavbarBrand>
      <Nav className="ml-auto" navbar>
        {isLoggedIn ? (
          <NavItem>
            <NavbarText>Welcome, {currentUser}</NavbarText>
            <Button color="link" onClick={handleLogout}>
              Logout
            </Button>
          </NavItem>
        ) : (
          <NavItem>
            <NavLink>User not logged in</NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
}

export default Navbar1;
