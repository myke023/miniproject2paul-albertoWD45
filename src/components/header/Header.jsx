import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const links = [
  { to: '/', text: 'HOME' },
  { to: '/about', text: 'ABOUT' },
  { to: '/pokemon', text: 'POKEMON' },
  { to: '/items', text: 'ITEMS' },
];

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleLinkClick = () => {
    setShowNav(false);
  };

  return (
    <Navbar expand="md" fixed="top" onToggle={() => setShowNav(!showNav)} expanded={showNav}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          PokéWorld
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            {links.map((link) => (
              <Nav.Link as={Link} to={link.to} onClick={handleLinkClick} key={link.text}>
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
