import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css'
import { FaAtlassian, FaBook, FaReact, FaRegClock, FaStar, FaStarHalfAlt, FaTag } from "react-icons/fa";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(CourseDetails);
    const {title, image, tag, data, about, details, price, level, lesson, duration, quiz} = courseDetails;
    return (
        <div className="container">
            <Row className="g-5">
                <Col lg="9">
                <Card  className="card-details p-5">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <span className="details-title">{title}</span>
        <Card.Text className="mt-4 d-flex align-items-center flex-xl-column">
         <div className="tag ">
            <FaTag className='icon'/>
            <span className="border-right">{tag}</span>
         </div>
         <div className="tag mx-4">
            <FaRegClock className='icon'/>
            <span className="border-right">{data}</span>
         </div>
         <div className="tag">
            <FaStar className='icon'/>
            <FaStar className='icon'/>
            <FaStar className='icon'/>
            <FaStar className='icon'/>
            <FaStarHalfAlt className='icon'/>
            
         </div>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <div className="about-course p-5 mt-4">
        <h2 className="about-course-title">{about}</h2>
        <p className="text-muted about-course-details">{details}</p>
    </div>
                </Col>
                <Col lg="3"className="checkout">
                   <h3 className='price'>Paid : <span>{price}</span></h3>
                   <button class="checkout-btn">Checkout</button>

                   <div className="course-feature">
                    <span><FaTag className="feature-icon"/> <b>Course level : </b>{level}</span>
                    <span><FaBook className="feature-icon"/> <b>Lesson : </b>{lesson}</span>
                    <span><FaRegClock className="feature-icon"/> <b>Duration : </b>{duration}</span>
                    <span><FaAtlassian className="feature-icon"/> <b>Last Update : </b>{data}</span>
                    <span><FaReact className="feature-icon"/> <b>Quizzes : </b>{quiz}</span>
                   </div>
                </Col>
            </Row>
        </div>
    );
};

export default CourseDetails;