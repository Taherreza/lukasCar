import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Register = () => {

    const { user, registerUser, isLoading } = useAuth();
    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate();

    const hundleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const hundleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not matchd')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <h2>Please Register</h2>

            <Container>
                <Row>
                    <Col> </Col>
                    <Col xs={6}>
                        {!isLoading && <Form onSubmit={hundleLoginSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">

                                <Form.Control

                                    placeholder="Your Name"
                                    name="name"
                                    onBlur={hundleOnBlur}

                                />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onBlur={hundleOnBlur}

                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onBlur={hundleOnBlur}
                                />
                                <Form.Control
                                    type="password"
                                    placeholder="Re-Type-Password"
                                    name="password2"
                                    onBlur={hundleOnBlur}
                                />


                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Register
                            </Button><br />
                            <Link to="/Login">
                                <Button variant="link">Already register ? Please login</Button>
                            </Link>
                        </Form>}
                        {isLoading && <Spinner animation="grow" variant="primary" />}
                        {
                            user?.email && [
                                'success',
                            ].map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                    Copmplete {variant} have fun
                                </Alert>
                            ))
                        }

                    </Col>
                    <Col> </Col>
                </Row>

            </Container>
            <Footer></Footer>


        </div>
    );
};

export default Register;