import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const{img,name,price,description}=service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p  style={{textAlign:'justify'}}><small>{description}</small></p>
            <button>Book :{name}</button>
            
        </div>
    );
};

export default Service;