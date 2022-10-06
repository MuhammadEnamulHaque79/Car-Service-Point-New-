import React from 'react';
import './Service.css';

const Service = (props) => {
    const{img,name,price}=props.service;
    return (
        <div className='container'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2 style={{textAlign:'center'}}>$ {price}</h2>
            <button style={{backgroundColor:'yellow'}}>Book :{name}</button>
        </div>
    );
};

export default Service;