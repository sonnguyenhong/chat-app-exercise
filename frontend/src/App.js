import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Container className="pt-5">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
