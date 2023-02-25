import { React } from 'react';
import { useState } from 'react';
import { useForm, } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({});
    const [error,setError] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const localdata = JSON.parse(localStorage.getItem('studentdetails'));

    const onsubmit = (data) => {
        setData(data);
       
        if(data.email === localdata.email && data.fullname === localdata.fullname && data.mobilenumber === localdata.mobilenumber && data.password === localdata.password){
            navigate('/')
        }
        else{
            setError(true);
        }
        console.log("formdata:",data)
        console.log("localdata:",localdata);
    }
    

    localStorage.setItem("studentdetails",JSON.stringify({
        fullname: "bhavya",
        dateofbirth:"2003-12-23",
        email:"bhavya.n2003@gmail.com",
        mobilenumber:"9014066895",
        password:"1234",
        gender:"female",
        major:"cyber security",
    }))

    return (
        <div className="forms">
            <form onSubmit={handleSubmit(onsubmit)}>
                <h2>Login form</h2><br></br>
                <input type="text" placeholder='full name' className='input-class' {...register("fullname", {
                    required: true,
                    minLength: {
                        value: 3,
                        message: "*enter valid name",
                    },
                    })} />
                <span style={{ color: 'red' }}>{errors.fullname?.message}</span><br></br>

                <input type="date" placeholder='Date-of-Birth' className='input-class' {...register("dateofbirth", {
                    required: true,
                    max: {
                        value: "2022-12-31",
                        message: "*date of birth must be less than 2023",
                    },
                    min: {
                        value: "1900-01-01",
                        message: "*date of birth must be greater than 1900",
                    },
                })} />
                <span style={{ color: 'red' }}>{errors.dateofbirth?.message}</span><br></br>

                <input type="email" placeholder='email' className='input-class' {...register("email", {
                    required: true,
                    min: {
                        value: 3,
                        message: "enter valid email"
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
                        message: "*enter valid email"
                    },
                })} />
                <span style={{ color: 'red' }}>{errors.email?.message}</span><br></br>

                <input type="password" placeholder='Password' className='input-class' {...register("password", {
                    required: true,
                    min: {
                        value: 1,
                        message: "*address must be required"
                    },
                })} />
                <span style={{ color: 'red' }}>{errors.password?.message}</span><br></br>

                <input type="text" placeholder='Mobilenumber' className='input-class' {...register("mobilenumber", {
                    required: true,
                    minLength:{
                        value: 10,
                        message: "*enter 10-digit number"
                    },
                    maxLength:{
                        value: 10,
                        message: "*enter 10-digit number"
                    }
                })} />
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