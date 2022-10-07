import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { img, name } = expert;
    return (
       <div className='expert-container'>
        <img src={img} alt="" />
        <h2>{name}</h2>

       </div>

    );
};

export default Expert;
