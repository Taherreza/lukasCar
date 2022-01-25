import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';


const Login = () => {
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const hundleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    //google pop up
    const hundleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <div>
            <Header></Header>
            <h2>Please Login</h2>

            <Container>
                <Row>
                    <Col> </Col>
                    <Col xs={6}>
                        {!isLoading && <Form onSubmit={hundleLoginSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={handleOnChange}

                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleOnChange}
                                />


                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button><br />
                            <Link to="/register">
                                <Button variant="link">New User Please Register</Button>
                            </Link>
                        </Form>}
                        <p>---------or----------</p>
                        <Button onClick={hundleGoogleSignIn} variant="primary">Sign In Google</Button>

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
                        {
                            authError && [

                                'danger',

                            ].map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                    Oh no {variant} mistake!
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

export default Login;