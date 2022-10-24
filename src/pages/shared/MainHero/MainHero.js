import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import hero from "../../../assets/hero.png";
import box from "../../../assets/shape/shape_2_1.png";
import line from "../../../assets/shape/shape_4_1.png";
import water from "../../../assets/shape/shape_2_3.png";
import './MainHero.css';
const MainHero = () => {
  return (
    <div className="hero-section">
        <img src={line} alt="" />
        <img src={box} alt="" className="box-shape shape"/>
        <img src={water} alt="" className="water-shape"/>
      <Row>
        <Col lg={6}>
          <div className="hero-text">
            <span className="sub-title">MORE THAN 25,659+ STUDENTS</span>
            <h2 className="hero-title">
              We’re Best Online Education Partners University 2022
            </h2>
            <div className="hero-icon">
              <span>
                <FaCheckCircle className="check-icon"/> Experts Advisors
              </span>
              <span>
                <FaCheckCircle className="check-icon"/> 538+ Courses
              </span>
            </div>

            <div className="hero-button mt-5">
                <Link to='/register'><button className="theme-button me-4 mb-3">Register <FaArrowRight/></button></Link>
                <Link to='/courses'><button className="white-btn">Our Courses <FaArrowRight/></button></Link>
            </div>
          </div>
        </Col>
        <Col lg={6} className="d-none d-sm-block">
            
          <div className="hero-image">
            <img src={hero} alt="" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainHero;
