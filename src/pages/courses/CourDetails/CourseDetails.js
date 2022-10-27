import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  FaAtlassian,
  FaBook,
  FaReact,
  FaRegClock,
  FaStar,
  FaStarHalfAlt,
  FaTag
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import "./CourseDetails.css";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const {
    title,
    image,
    tag,
    data,
    about,
    details,
    price,
    level,
    lesson,
    duration,
    quiz,
    id,
  } = courseDetails;
  const ref = React.createRef();
  return (
    <div className="container">
      <Row className="g-5">
        <Col lg="9">
          <Card className="card-details p-5">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <span className="details-title">{title}</span>
              <Card.Text className="mt-4 d-flex align-items-center ">
                <div className="tag ">
                  <FaTag className="icon" />
                  <span className="border-right">{tag}</span>
                </div>
                <div className="tag mx-4">
                  <FaRegClock className="icon" />
                  <span className="border-right">{data}</span>
                </div>
                <div className="tag">
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStarHalfAlt className="icon" />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="about-course p-5 mt-4">
            <h2 className="about-course-title">{about}</h2>
            <p className="text-muted about-course-details">{details}</p>
          </div>
        </Col>
        <Col lg="3" className="checkout">
          <h3 className="price">
            Paid : <span>{price}</span>
          </h3>

        <Link to={`/course/checkout/${id}`}> <button class="checkout-btn" >Purchase</button></Link>
        

          <div className="course-feature">
            <span>
              <FaTag className="feature-icon" /> <b>Course level : </b>
              {level}
            </span>
            <span>
              <FaBook className="feature-icon" /> <b>Lesson : </b>
              {lesson}
            </span>
            <span>
              <FaRegClock className="feature-icon" /> <b>Duration : </b>
              {duration}
            </span>
            <span>
              <FaAtlassian className="feature-icon" /> <b>Last Update : </b>
              {data}
            </span>
            <span>
              <FaReact className="feature-icon" /> <b>Quizzes : </b>
              {quiz}
            </span>
          </div>
          
          <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="checkout-btn" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref} className="mt-5">
        <h1 className="h6 text-primary">Hello Students</h1>
        <p className="text-muted">Here is our course details . if you want to take this course. so you can read requirments.</p>
      </div>


          
        </Col>
      </Row>
    </div>
  );
};

export default CourseDetails;
