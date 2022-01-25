import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='menu'>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                        <Nav className="me-auto menubar">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="me-auto loginRegister">
                            {
                                user?.email ?
                                    <>
                                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                        <Button onClick={logOut} variant="primary">Logout</Button>
                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                            <Nav.Link as={Link} to="/register">Register</Nav.Link>


                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;