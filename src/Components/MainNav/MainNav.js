import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const MainNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">DATEPICKER</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="ml-auto">
                    <Link className="d-inline p-2 text-black" to="/" style={{ color: 'black' }}>
                        Home
          </Link>
                    <Link className="d-inline p-2 text-black" to="/register" style={{ color: 'black' }}>
                        Register
          </Link>
                    <Link className="d-inline p-2 text-black" to="/login" style={{ color: 'black' }}>
                        Login
          </Link>
                    {/*  <Link className="d-inline p-2 text-black" to="/event" style={{ color: 'black' }}>
                        Event
          </Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNav;
