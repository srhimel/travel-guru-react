import React from 'react';
import { Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Logo.png'

const Header = () => {
    return (
        <Navbar bg="transparent" expand="lg" >
            <Container>
                <Link className="navbar-brand" to="/"><img src={logo} alt="" width="140" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <InputGroup className="ms-5" style={{ maxWidth: '350px' }}>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Nav className="ms-auto">
                        <NavLink className="nav-link px-4" exact to="/">Home</NavLink>
                        <NavLink className="nav-link px-4" to="/booking">Booking</NavLink>
                        <NavLink className="nav-link px-4" to="/search">Search</NavLink>
                        <NavLink className="nav-link px-4" to="/">Blog</NavLink>
                        <NavLink className="nav-link btn btn-warning px-4 fw-medium ms-4" to="/login">Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;