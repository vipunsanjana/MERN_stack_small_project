import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'
import { useNavigate } from 'react-router-dom';

function Login() {

    let date = new Date().getFullYear();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            console.log('Registration successful:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };



    return (
        <div className="container">
            <form style={{height:"500px"}} onSubmit={handleSubmit}>
                <h1 style={{marginTop:"20px"}}>Login</h1>
                <div className="ui form" style={{marginTop:"30px"}}>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div style={{marginTop:"30px"}} className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <button type='submit' style={{marginTop:"50px"}} className="fluid ui button blue">Submit</button>
                </div>
                
            </form>
            <Link to="/" style={{fontSize:"18PX",fontWeight:"800",color:"black",marginTop:"5px"}}>
                I don't have a accout
            </Link>
            <div style={{marginTop:"10px",color:"blue",fontSize:"18PX",fontWeight:"800"}}> &copy; Developerd by Vipun Sanjana for beter web {date}</div>
        </div>
    )
}

export default Login