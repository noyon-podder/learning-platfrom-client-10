import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseWrapper.css'
const CourseWrapper = ({course}) => {
    const {title, image, price, id} = course;
    return (
       <Col lg={4}>
        <Card className="position-relative">
          <Card.Img variant="top" src={image} />
          <Card.Body>
           <Link to={`/courses/${id}`} className="course-title"> <Card.Title>{title}</Card.Title></Link>
            <Card.Text>
             <span className='course-price' >{price}</span> 
            </Card.Text>
          </Card.Body>
        </Card>
       </Col>
      );
};

export default CourseWrapper;