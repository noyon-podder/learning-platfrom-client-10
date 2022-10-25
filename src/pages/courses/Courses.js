import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import CourseSidebar from './CourseSidebar/CourseSidebar';
import './Courses.css'

const Courses = () => {
    return (
        <div>
            <Header/>
            <div className="py-5 courses-bg">
            <Container>
            <Outlet></Outlet>
            </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default Courses;