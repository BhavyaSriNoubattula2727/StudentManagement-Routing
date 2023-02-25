import React from 'react';
import { Studentdata,Professorsdata,courses } from '../Data/CompleteData';

const Dashboard = () => {
    const statistics =[
        {
            "id":1,
            "name":"Students",
            "icon":"#xf501",
            "length":Studentdata.length,
            "color":"pink",
        },{
            "id":2,
            "name":"Professors",
            "icon":"#xf501",
            "length":Professorsdata.length,
            "color":"lightgreen",
        },{
            "id":3,
            "name":"Courses",
            "icon":"#xf501",
            "length":courses.length,
            "color":"lightblue",
        },{
            "id":4,
            "name":"Grades",
            "icon":"&#xf501;",
            "length":"98",
            "color":"purple",
            
        }
    ]
    
    return (
        <div className='dashboard'>
           <div className='box'>
                {
                    statistics.map((item,index)=>{
                        return(
                            <div className="each-box" key={index} style={{backgroundColor:item.color}}>
                                <h3>{item.name}:{item.length}</h3>                                
                            </div>
                        )
                    })
                }
           </div>          
        </div>
    );
};

export default Dashboard;