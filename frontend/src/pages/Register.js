import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
    const [variables, setVariables] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const submitRegisterForm = (e) => {
        e.preventDefault();
    };

    return (
        <Row className="bg-white py-5 justify-content-center">
            <Col sm={8} md={6} lg={4}>
                <h1 className="text-center">Register</h1>
                <Form onSubmit={submitRegisterForm}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label className={errors.username && 'text-danger'}>
                            {errors.username ?? 'Username'}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={variables.username}
                            className={errors.username && 'is-invalid'}
                            onChange={(e) => setVariables({ ...variables, username: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className={errors.password && 'text-danger'}>
                            {errors.password ?? 'Password'}
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={variables.password}
                            className={errors.password && 'is-invalid'}
                            onChange={(e) => setVariables({ ...variables, password: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label className={errors.confirmPassword && 'text-danger'}>
                            {errors.confirmPassword ?? 'Confirm password'}
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Retype password"
                            value={variables.confirmPassword}
                            className={errors.confirmPassword && 'is-invalid'}
                            onChange={(e) => setVariables({ ...variables, confirmPassword: e.target.value })}
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="success" type="submit">
                            Register
                        </Button>
                        <br />
                        <small>
                            Already have an account? <Link to="/login">Login</Link>
                        </small>
                    </div>
                </Form>
            </Col>
        </Row>
    );
}

export default Register;
