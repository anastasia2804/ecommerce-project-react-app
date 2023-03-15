import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function NavbarComponent() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid="xxl">
        <Navbar.Brand className="text-decoration-none" href="/">
          <span className="fw-bold text-secondary">
            Pura Vida
          </span>
          <span className="fw-bold text-secondary d-none d-md-inline"> - Bohemian Decor & Accessories</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end align-center" id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/product-list">Products</Nav.Link>
          {isLoggedIn && (
              <>
              
              <Nav.Link as={Link} to="/my-cart">My cart</Nav.Link>
              <Nav.Link as={Link} to="/profile">Orders & Profile</Nav.Link>
              <Button variant="light" onClick={logOutUser}>
                  Log Out
                </Button>
              </>
          )}

          {!isLoggedIn && ( 
            <>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            </>
          )}
        
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavbarComponent;
