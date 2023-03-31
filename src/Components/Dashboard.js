import React, { useEffect, useState } from 'react';
import { Studentdata,Professorsdata,courses } from '../Data/CompleteData';
import axios from 'axios';

const Dashboard = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const url = "http://localhost:5000/users"
        axios.get(url)
        .then((res)=>{setUsers(res.data)})
    },[])
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

        return(
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
            <div>
                 <table border={1}>
                    <thead>
                        <tr><td>ID</td><td>NAME</td></tr>
                    </thead>
                    <tbody>
                    {
                    users.map((item,index)=>{
                        return(<tr key={index}><td>{item.id}</td><td>{item.name}</td></tr>)
                    })
                    }
                    </tbody>
                 </table>
            </div>          
            </div>
        )
};

export default Dashboard;