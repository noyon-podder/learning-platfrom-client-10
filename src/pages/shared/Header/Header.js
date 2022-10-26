import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaUser, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { AuthContext } from "../../../constext/UserContext";
import "./Header.css";

const Header = () => {
  const {user, logout} = useContext(AuthContext);

     const handleLogOut = () => {
      logout()
      .then()
      .catch(error => {
        console.log(error.message)
      })
     }
  return (
    <>
    <div className="header">
      <Container>
        <div className='d-none .d-sm-block d-xl-block'>
        <div className="top-header py-3 d-flex justify-content-between align-items-center ">
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
           {
            !user?.uid ?
            <div className="user">
           <FaUser className="me-3"/>
           <Link to='/user/login'>Login</Link> /
           <Link to='/user/register'>Register</Link>
           </div> :
           <div>
           <Button variant="light" className="text-primary fe-bold px-3" onClick={handleLogOut}>Logout</Button>
           </div>
           }
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
            <Link to="/home">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/Contact">Contact</Link>
            
          </Nav>
          <Nav>
            {user?.photoURL && <img src={user.photoURL} alt="" className="profile-pic"/> }
           
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
