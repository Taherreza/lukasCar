import React from 'react';
import { Button, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>


            <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Dashboard"
                className="mt-2"
            >

                <Nav.Link style={{ color: '#fff' }} as={Link} to="/pay">Pay</Nav.Link>
                <Dropdown.Item href="#/action-2">My Orders</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Reviews</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Make Admin</Dropdown.Item>
            </DropdownButton>
            <Nav.Link as={Link} to="/"> <Button variant="primary">Back To Home</Button></Nav.Link>

        </>
    );
};

export default Dashboard;