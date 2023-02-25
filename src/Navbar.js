import React from 'react';
import './App.css';
import {NavLink,useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const changeStyle = ({isActive})=>{
        return{
            color:isActive ? "white":"black",
        }
    }
    return (
        <div className='navbar'>
            <NavLink to="/" style={changeStyle} className="navitem"><i className="fa fa-home" aria-hidden="true" style={{fontSize:"35px"}}></i></NavLink>
            <div className='navbar-left'>
            <NavLink to="students" style={changeStyle} className="navitem">Students</NavLink>    
            <NavLink to="courses" style={changeStyle} className="navitem">Courses</NavLink>                  
            <NavLink to="grades" style={changeStyle} className="navitem">Grades</NavLink>
            <button onClick={()=>{navigate('/login')}}>Login</button>
            </div>
        </div>
    );
};

export default Navbar;