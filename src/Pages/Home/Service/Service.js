import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const{img,name,price}=service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>Service:{name}</h2>
            <h3>${price}</h3>
        </div>
    );
};

export default Service;