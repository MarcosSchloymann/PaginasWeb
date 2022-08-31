import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, Router} from 'react-router-dom';
import './../../styles/components/layout/Nav.css';

const NavBar=(props)=> {

  return (
    
    <Navbar bg="light" expand="lg" fixed="top" className="justify-content-end">
      <Container >
        <img src='./img/Otto-isologo-1a.png' width='auto' height='80px' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='colapso'>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' style={{fontSize: 20,paddingLeft: 60,}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/nosotros" style={{fontSize: 20,paddingLeft: 60,}}>Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/productos" style={{fontSize: 20,paddingLeft: 60,}}>Productos</Nav.Link>
            <Nav.Link as={Link} to="/seguimiento" style={{fontSize: 20,paddingLeft: 60,}}>Seguimiento</Nav.Link>
            <Nav.Link as={Link} to="/contacto" style={{fontSize: 20,paddingLeft: 60,}}>Contacto</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;