import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

import './Navbar.scss';

const NavBar = () => {

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand to="/">
                    <Link to="/">
                        <Image src="./images/logo.jpg" width="45px" height="45px" alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-auto">
                        <Nav.Link as={NavLink} to="/catalog/Interior">Interior</Nav.Link>
                        <Nav.Link as={NavLink} to="/catalog/Outside">Outside</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;