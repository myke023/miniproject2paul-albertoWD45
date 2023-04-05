import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
   <Navbar expand="md" fixed="top">
      <Container>
         <Navbar.Brand as={Link} to="/" className="fw-bold">Pōrubāto</Navbar.Brand>
         <Navbar.Toggle aria-controls="navbar-nav" />
         <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
               <Nav.Link as={Link} to="/" >HOME</Nav.Link>
               <Nav.Link as={Link} to="/pokemon" >POKEMON</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header