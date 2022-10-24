import React from "react";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaUser, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import "./Header.css";

const Header = () => {
  return (
    <>
    <div className="header">
      <Container>
        <div className="top-header py-3 d-flex justify-content-between align-items-center">
            {/* //top header left part start  */}
          <div className="left-part d-flex align-items-center">
            <div className="d-flex align-items-center">
              <p>
                <FaEnvelope className="" />
                <span className="fw-bold text-light ms-3 me-2">Email Us: </span>
                web.programming12.6@gmail.com
              </p>
            </div>
            <div className="d-flex align-items-center ms-5">
              <p>
                <FaPhone className="" />
                <span className="fw-bold text-light ms-3 me-2">Mobile: </span>
               01732-322321
              </p>
            </div>
          </div>
          {/* top header right part  */}
          <div className="right-part d-flex align-items-center">
           <div className="icons me-4 border-right">
            <FaFacebook className="icon"/>
            <FaWhatsapp className="icon"/>
            <FaTwitter className="icon"/>
            <FaLinkedin className="icon"/>
            <FaInstagram className="icon me-3"/>
           </div>
           {/* user part start   */}
           <div className="user">
           <FaUser className="me-3"/>
           <Link to='/login'>Login</Link> /
           <Link to='/register'>Register</Link>
           </div>
          </div>
        </div>       
        </Container>
        </div>
        <div className="bottom-header">
        <Navbar collapseOnSelect expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="" className="logo"/>
           <span className="titleName">madeLearn</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" menu ms-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/courses">Courses</Nav.Link>
            <Nav.Link to="/blog">Blog</Nav.Link>
            <Nav.Link to="/faq">FAQ</Nav.Link>
            <Nav.Link to="/Contact">Contact</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>

    
  
        
      
    
    </>
  );
};

export default Header;
