import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { img, name } = expert;
    return (
       <div className='expert-container'>
        <img style={{border:'1px solid lightgray',width:'400px',height:'395px',marginTop:'15px',borderRadius:'15px'}} src={img} alt="" />
        <h2>{name}</h2>
       </div>

    );
};

export default Expert;

