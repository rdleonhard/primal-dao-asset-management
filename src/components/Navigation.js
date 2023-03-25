import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Navbar.Brand href="/">Primal DAO Asset Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
                <Button href="/app" className="ms-auto">Launch App</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
