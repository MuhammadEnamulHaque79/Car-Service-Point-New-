import React from 'react';
import './Experts.css';
import Expert from '../Expert/Expert';
import expert1 from '../../../images/experts/expert1.png';
import expert2 from '../../../images/experts/expert2.png';
import expert3 from '../../../images/experts/expert3.png';
import expert4 from '../../../images/experts/expert4.png';
import expert5 from '../../../images/experts/expert5.png';
import expert6 from '../../../images/experts/expert6.png';


const experts=[
    {id:1,name:'Ricky Potter',img:expert1},
    {id:2,name:'Adam Smith',img:expert2},
    {id:3,name:'Stacy Rice',img:expert3},
    {id:4,name:'Mona Manch',img:expert4},
    {id:5,name:'Gill Potter',img:expert5},
    {id:6,name:'Ricky John',img:expert6},
];

const Experts = () => {
    return (
        <div>
            <h1 className='text-secondary text-center'>Our Experts</h1>
           <div className="experts-container">
                {
                    experts.map(expert =><Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
           </div>
        </div>
    );
};

export default Experts;