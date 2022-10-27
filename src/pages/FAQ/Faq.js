import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../shared/Header/Header';
const Faq = () => {
    return (
        <div>
           <Header/>

           <div className="faq-question w-75 mx-auto mt-5">
           <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is feature in this website?</Accordion.Header>
        <Accordion.Body>
          This website is online courses . to here is some benefits to your skill grow. And our teacher is highly qualified to help grow your knowledge. And many year exprience to help you. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What courses we published?</Accordion.Header>
        <Accordion.Body>
          Here is many courses we published. There is main to React . React is popular framework to javascript. There is many job opportunity . So it begeiner friendly.   
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Surprise!! </Accordion.Header>
        <Accordion.Body>
         we exam to every milestone later. that the main focus to grow your knowledge.and some special news for you. but when you purchase  our course then you know that. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
           </div>
        </div>
    );
};

export default Faq;