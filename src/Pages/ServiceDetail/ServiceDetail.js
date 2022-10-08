import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const params=useParams();
    return (
        <div>
            <h3>ServiceDetail:{params.serviceId}</h3>
        </div>
    );
};

export default ServiceDetail;

/*
(Module: 61-2 Setup Dynamic Route and access route params);
To setup a dynamic route,you use useParams and to navigate you use
useNavigate both are import from 'react-router-dom';
 */