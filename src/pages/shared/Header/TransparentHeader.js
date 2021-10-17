import React from 'react';
import { Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import whiteLogo from '../../../Logo.svg'
import './Header.css'
const TransparentHeader = () => {
    return (
        <Navbar className="transparent-mobile" bg="transparent" expand="lg" variant="dark" style={{ marginBottom: '-150px' }}>
            <Container>
                <Link className="navbar-brand" to="/"><img src={whiteLogo} alt="" width="120" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <InputGroup className="ms-5 header-search" style={{ maxWidth: '350px' }}>
                        <InputGroup.Text id="basic-addon1"> <BsSearch /> </InputGroup.Text>
                        <FormControl
                            placeholder="Search your Destination..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Nav className="ms-auto">
                        <NavLink className="nav-link px-4" exact to="/">Home</NavLink>
                        <NavLink className="nav-link px-4" to="/book/2">Booking</NavLink>
                        <NavLink className="nav-link px-4" to="/search">Search</NavLink>
                        <NavLink className="nav-link px-4" exact to="/blog">Blog</NavLink>
                        <NavLink className="nav-link btn btn-warning px-4 fw-bold text-dark ms-4" to="/login">Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TransparentHeader;