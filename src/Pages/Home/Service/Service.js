import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const navigate=useNavigate();
    const{id,img,name,price,description}=service;
    const navigateToServiceDetail=(id)=>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p  style={{textAlign:'justify'}}><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book :{name}</button>
          
            
        </div>
    );
};

export default Service;