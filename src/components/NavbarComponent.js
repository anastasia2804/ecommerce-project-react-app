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
          <Nav.Link href="/">Home</Nav.Link>
          {isLoggedIn && (
              <>
              <Nav.Link href="/product-list">Products</Nav.Link>
              <Nav.Link href="/my-cart">My cart</Nav.Link>
              <Nav.Link href="/profile">Orders & Profile</Nav.Link>
              <Button variant="light" onClick={logOutUser}>
                  Log Out
                </Button>
              </>
          )}

          {!isLoggedIn && ( 
            <>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            </>

          )}
        
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

//   return (
//     <nav className="navbar navbar-expand-md navbar-light">
//       <div className="container-xxl">
//         <Link className="navbar-brand text-decoration-none" to="/">
//           <span className="fw-bold text-secondary">
//             Pura Vida - Boho Decor & Accessories
//           </span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#main-nav"
//           aria-controls="main-nav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse justify-content-end align-center"
//           id="main-nav"
//         >
//           <ul className="navbar-nav">
//             <li>
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             {isLoggedIn && (
//               <>
//                 <li className="nav-item">
//                   {" "}
//                   <Link className="nav-link" to="/product-list">
//                     Products
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   {" "}
//                   <Link className="nav-link" to="/my-cart">
//                     My Cart
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   {" "}
//                   <Link className="nav-link" to="/profile">
//                     Orders & Profile
//                   </Link>
//                 </li>

//                 <button className="btn btn-light" onClick={logOutUser}>
//                   Log Out
//                 </button>
//               </>
//             )}

//             {!isLoggedIn && (
//               <>
//                 <Link className="nav-item nav-link" to="/signup">
//                   Sign Up
//                 </Link>
//                 <Link className="nav-item nav-link" to="/login">
//                   Log In
//                 </Link>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

export default NavbarComponent;
