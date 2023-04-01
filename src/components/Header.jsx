import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
   <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
         <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="navbar-nav" />
         <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
               <Nav.Link as={Link} to="/about" >About</Nav.Link>  
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header