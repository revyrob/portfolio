import './NavBar.scss';
import { Link } from "react-router-dom";
import home from '../../assets/icons/home-icon.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
    <Navbar className="nav" bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">KR</Navbar.Brand>
   
    <Nav
    className="me-auto my-2 my-lg-0"
    style={{ zindex: '10' }}
    navbarScroll
    >
    <Nav.Link href="#action1">Home</Nav.Link>
    <Nav.Link href="#action2">About</Nav.Link>
    <NavDropdown title="Projects" id="navbarScrollingDropdown">
    <NavDropdown.Item href="#action3">Deployed</NavDropdown.Item>
    <NavDropdown.Item href="#action4">
    Hackathon Projects
    </NavDropdown.Item>
    <NavDropdown.Item href="#action5">
    General Projects
    </NavDropdown.Item>
    </NavDropdown>
    
    </Nav>
    
    </Container>
    </Navbar>
    
    </>
    );
  }
  export default NavBar;