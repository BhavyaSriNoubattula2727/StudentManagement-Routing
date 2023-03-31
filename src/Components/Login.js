import { React, useEffect } from 'react';
import { useState } from 'react';
import { useForm, } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();
    const [data,setData] = useState({});
    const [error,setError] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    // const localdata = JSON.parse(localStorage.getItem('studentdetails'));

    const onsubmit = (event) => {
        // setData(data.name);
        const name = event.fullname;
        const pwd = event.password;
        setData({pwd,name})
    }

    useEffect(()=>{
        const url = "http://localhost:5000/insert"
        axios.post(url,{data})
        .then((res)=>{
            console.log("Hurray")
        })
        .catch((err)=>{
            console.log(err)
        });
    },[])

    // localStorage.setItem("studentdetails",JSON.stringify({
    //     fullname: "bhavya",
    //     dateofbirth:"2003-12-23",
    //     email:"bhavya.n2003@gmail.com",
    //     mobilenumber:"9014066895",
    //     password:"1234",
    //     gender:"female",
    //     major:"cyber security",
    // }))

    return (
        <div className="forms">
            <form onSubmit={handleSubmit(onsubmit)}>
                <h2>Login form</h2><br></br>
                <input type="text" placeholder='full name' className='input-class' {...register("fullname", {
                    required: true,
                })} />
                <span style={{ color: 'red' }}>&nbsp;&nbsp;*{errors.fullname?.message}</span><br></br>

                <input type="date" placeholder='Date-of-Birth' className='input-class' {...register("dateofbirth", {
                    required: true,
                })} />
                <span style={{ color: 'red' }}>{errors.dateofbirth?.message}</span><br></br>

                <input type="email" placeholder='email' className='input-class' {...register("email", {required: true, })} />
                <span style={{ color: 'red' }}>{errors.email?.message}</span><br></br>

                <input type="password" placeholder='Password' className='input-class' {...register("password", {required: true, })} />
                <span style={{ color: 'red' }}>{errors.password?.message}</span><br></br>

                <input type="text" placeholder='Mobilenumber' className='input-class' {...register("mobilenumber", { required: true,})} />
                <span style={{ color: 'red' }}>{errors.mobilenumber?.message}</span><br></br>

                
                <p><b>Gender</b></p>
                <input type="radio" id="male" name="gender" value="male" {...register("gender", { required: true, })} />
                <label htmlFor="male">Male</label>&nbsp;&nbsp;
                <input type="radio" id="female" name="gender" value="female" {...register("gender", { required: true, })} />
                <label htmlFor="female">Female</label>
                {errors.gender?.type === 'required' ? <span style={{ color: 'red' }}> &nbsp;*{errors.gender?.type}</span> : <span></span>}<br></br><br></br>

                <div className="ui form" style={{ width: '400px' }}>
                    <div className="field">
                        <label><b>Major</b></label>
                        <select className="ui search dropdown" {...register("major", { required: true, })}>
                            <option value="">Select Major</option>
                            <option value="cyber security">Cyber Security</option>
                            <option value="artificial intelligence">Artificial Intelligence</option>
                            <option value="web development">Web Development</option>
                            <option value="datascience">DataScience</option>
                            <option value="machine learning">Machine Learning</option>
                        </select> {errors.major?.type === 'required' ? <span style={{ color: 'red' }}> &nbsp;*{errors.major?.type}</span> : <span></span>}
                    </div>
                </div>

                {error?<span style={{color:'red'}}>*enter correct data</span>:<span></span>}<br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;