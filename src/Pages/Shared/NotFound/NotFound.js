import React from 'react';
import './NotFound.css';
import sorry from '../../../images/sorry.png';

const NotFound = () => {
   
    return (
        <div className='sorry'>
            <img src={sorry} alt="" />
        </div>
    );
};

export default NotFound;