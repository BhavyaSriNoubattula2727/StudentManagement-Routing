import React from 'react';
import { Studentdata } from '../Data/CompleteData';
import { useParams ,useNavigate} from 'react-router-dom';

const StudentDetails = () => {
    const paramsId = useParams();
    const navigate = useNavigate();
    
    return (
        <div className='details'>
        <h2>Student Details</h2><br></br><br></br>
        <div className='boxes'>
            {
                Studentdata.filter((item,index)=> paramsId.id == item.id ).map((item,index)=>{
                    return(
                        <div key={index}>
                            <p><b>Name&nbsp;&nbsp;:&nbsp;&nbsp;</b>{item.firstname}</p>
                            <p><b>Email &nbsp;&nbsp;    :&nbsp;&nbsp;</b>{item.email}</p>
                            <p><b>Gender &nbsp;&nbsp;   :&nbsp;&nbsp;</b>{item.gender}</p>
                            <p><b>Department&nbsp;:&nbsp;&nbsp;</b>{item.department}</p><br></br>
                            <button onClick={()=>navigate(-1)}>Prev</button>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default StudentDetails;