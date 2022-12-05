import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Users from './Users';
import Messages from './Messages';

function Home() {
    return (
        <Fragment>
            <Row className="bg-white mb-1">
                <Col xs={4} className="text-center">
                    <Link to="/login">
                        <Button variant="link">Login</Button>
                    </Link>
                </Col>
                <Col xs={4} className="text-center">
                    <Link to="/register">
                        <Button variant="link">Register</Button>
                    </Link>
                </Col>
                <Col xs={4} className="text-center">
                    <Button variant="link">Logout</Button>
                </Col>
            </Row>
            <Row className="bg-white">
                <Users />
                <Messages />
            </Row>
        </Fragment>
    );
}

export default Home;
