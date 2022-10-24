import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <Container>
            <div className="top-header"> 
              <div className="left-part">
                <div className="email">
                <FaEnvelope className=""/>
                <p><span className="fw-bold text-light">Email Us: </span>web.programming12.6@gmail.com</p>
                </div>
              </div>
              <div className="right-part"></div>
            </div>
            <div className="bottom-header"> </div>
            </Container>
        </header>
    );
};

export default Header;