import React from 'react';
import { FaBook, FaRegClock, FaStar, FaStarHalfAlt, FaTag } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import './Checkout.css'

const Checkout = () => {
   const checkoutContent = useLoaderData();
   const {image, title, tag, lesson,level} = checkoutContent;
   console.log(checkoutContent)

    return (
        <div>
            <Header/>
            <h4 className='text-success text-center fw-semibold py-4'>Course Purchase Successfully!!</h4>
            <div className="checkout w-75 pb-4 mb-5">
            <img src={image} alt="" className='img-fluid'/>
            <h5 className="text-primary py-4 font-bold display-6">{title}</h5>

            <div className="mt-4 d-flex align-items-center ">
                <div className="tag ">
                  <FaTag className="icon" />
                  <span className="border-right">{tag}</span>
                </div>
                <div className="tag mx-4">
                  <FaRegClock className="icon" />
                  <span className="border-right">{lesson}</span>
                </div>
                <div className="tag">
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStarHalfAlt className="icon" />
                </div>
                <span className='ms-4'>
              <FaBook className="feature-icon" /> <b>Course level : </b>
              {level}
            </span>
                </div>
            </div>
        </div>
    );
};

export default Checkout;