import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className=''>
            {/* footer top*/}
            <div className="footer-section">
                <Container>
                    <Row xs={2} md={3} lg={4}>
                        <Col>
                            <div className="footer-one">
                                <h2><FontAwesomeIcon className='font-awesome' icon={faHandHoldingHeart}></FontAwesomeIcon>
                                    <span>Lu</span>kas</h2>
                                <p>Lukas is the best parts shop for your car accessories. What kind of parts do you need you can get here soluta nobis</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-two">
                                <h3>Information</h3>
                                <ul>
                                    <li><a href="">Our company</a></li>
                                    <li><a href="">Contact us</a></li>
                                    <li><a href="">Our services</a></li>
                                    <li><a href="">Why We?</a></li>
                                    <li><a href="">Careers</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-two">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Return Policy</a></li>
                                    <li><a href="">Online Support</a></li>
                                    <li><a href="">Money Back</a></li>
                                    <li><a href="">About</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-four">
                                <h3>Store Information
                                </h3>
                                <p>2005 Stokes Isle Apartment. 896,</p>
                                <p>Washington 10010, USA</p>
                                <p>https://lukas.com</p>
                                <p>(+68) 120034509</p>
                            </div>
                        </Col >
                    </Row >
                </Container >
            </div>

            {/*end footer top*/}

            <div className="footer-bottom">

                <Row>
                    <Col>

                        <p>&#169; Lukas,2022. Made With <span>&#10084;</span> by Abu Taher </p>
                    </Col>
                </Row>

            </div>
        </div >

    );
};

export default Footer;