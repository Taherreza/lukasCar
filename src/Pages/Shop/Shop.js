import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Shop.css';

const Shop = () => {
    const [singleService, setSingleService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/carShop')
            .then(res => res.json())
            .then(data => setSingleService(data))

    }, [])

    return (
        <div>
            <Header></Header>
            <Container>
                <div className="product_heading">
                    <h3>  OUR FEATURE PRODUCTS</h3>
                    <p>Available for you and your can buy this product from here <br /> any time any where so sop now</p>

                </div>
                <Row>
                    {
                        singleService?.map((singleService) => (
                            <Col className='product_content' xs={6} md={4} lg={4}>
                                <img src={singleService.img} alt="" />
                                <h3>{singleService.name}</h3>
                                <h4> Price: {singleService.price}</h4>
                                <p>{singleService.shortDes}</p>
                                <Link to="/contact">
                                    <button className="btn"> Buy Now</button>
                                </Link>

                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Shop;