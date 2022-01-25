import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Nav, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import slider1 from '../../../images/qw04.jpg';
import slider2 from '../../../images/qw05.jpg';
import slider6 from '../../../images/qw06.jpg';
import slider7 from '../../../images/qw07.jpg';
import slider8 from '../../../images/qw08.jpg';
import allKinds from '../../../images/qw15.png';
import './Home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faCar, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/carProducts')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])


    return (
        <div>
            <Header></Header>
            {/* header component  */}

            {/* start slider section */}
            <div className="slider-section">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>NEW TECHNOLOGY AND BUILD</h3>
                            <p>WHEELS & TIRES COLLECTIONS</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3> NEW COLLECTION NEW AMBITION</h3>
                            <p>SATISFACTION OUR MAIN ACHIVMENTS</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
            {/* end slider section */}
            {/* start slider-bottom */}
            <div className="slider-bottom">
                <Container>
                    <div className="slider-bottom-top product_heading ">
                        <h2>Exclusive Car</h2>
                        <p>All best seller product are now available for you and your can buy this product from here <br /> any time any where so sop now</p>
                        <Row>
                            <div className="slider-bottom-img">
                                <Col xs={6} md={4}>

                                    <Nav.Link as={Link} to="/shop"><img src={slider6} alt="" /></Nav.Link>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Nav.Link as={Link} to="/shop"><img src={slider7} alt="" /></Nav.Link>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Nav.Link as={Link} to="/shop"><img src={slider8} alt="" /></Nav.Link>
                                </Col>
                            </div>

                        </Row>

                    </div>
                    <div className="slider-bootom-end">
                        <Row>
                            <Col xs={6} md={4}>
                                <div className="slider-end-content">
                                    <FontAwesomeIcon className='font-awesome' icon={faCar}></FontAwesomeIcon>
                                    <h2>Free Home Delivery</h2>
                                    <p>Provide free home delivery for all product over $100</p>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="slider-end-content">
                                    <FontAwesomeIcon className='font-awesome' icon={faCarSide}></FontAwesomeIcon>
                                    <h2>Quality Products</h2>
                                    <p>We ensure our product quality all times</p>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="slider-end-content">
                                    <FontAwesomeIcon className='font-awesome' icon={faHandHoldingHeart}></FontAwesomeIcon>
                                    <h2>Online Support</h2>
                                    <p>To satisfy our customer we try to give support online</p>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Container>

            </div>

            {/* end slider-bottom */}


            {/* load product page */}

            <Container>
                <div className="product_heading">
                    <h3>ALL OF OUR PRODUCTS</h3>
                    <p>All best seller product are now available for you and your can buy this product from here <br /> any time any where so sop now</p>

                </div>
                <Row>



                    {

                        service?.map((services) => (
                            <Col className='product_content' xs={6} md={4} lg={4}>
                                <img src={services.img} alt="" />
                                <h3>{services.name}</h3>
                                <h4> Price: {services.price}</h4>
                                <p>{services.shortDes}</p>
                                <Link to="/services">
                                    <button className="btn"> View Details</button>
                                </Link>

                            </Col>
                        ))
                    }

                </Row>

            </Container>







            {/*end load product page */}

            {/* all kinds part */}
            <div className="all-kinds">
                <Container>
                    <div className="all-kinds-top">
                        <h1>ALL KINDS OF PARTS THAT YOU <br></br>
                            NEED CAN FIND HERE</h1>
                        <button>Shop Now</button>

                    </div>
                    <img src={allKinds} alt="" />
                </Container>
            </div>



            {/*end all kinds part */}









            {/* footer component  */}
            <Footer></Footer>
        </div>
    );
};

export default Home;