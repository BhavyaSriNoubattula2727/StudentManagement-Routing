import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Studentdata } from '../Data/CompleteData';

const Students = () => {
    return (
        <div className='students'>
            <div className='student-regno'>
                {
                    Studentdata.map((item,index)=>{
                       return (
                        <div className='regno' key={index}>                            
                            <Link to={`/students/${item.id}`} className="navlink">{item.firstname}</Link>
                        </div>            
                       )
                    })
                }
            </div>
            <div className='student-data'> <Outlet /> </div>
        </div>
    );
};

export default Students;