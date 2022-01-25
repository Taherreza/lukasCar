import React from 'react';
import Header from '../Shared/Header/Header';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <h2>Please Contact Us</h2>

            <Container>
                <Row>
                    <Col> </Col>
                    <Col xs={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"

                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col> </Col>
                </Row>

            </Container>
            <Footer></Footer>


        </div>
    );
};

export default Contact;