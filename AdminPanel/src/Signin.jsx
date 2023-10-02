import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'
import { useNavigate } from 'react-router-dom';

function Signin() {

    let date = new Date().getFullYear();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/register', { firstName,lastName,phoneNumber, email, password });
            console.log('Registration successful:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="First Name"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>last Name</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="last Name"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Phone Number"
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                        />
                    </div>
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
                    <div className="field">
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
                    <button type='submit' className="fluid ui button blue">Submit</button>
                </div>
            </form>
            <Link to="/login" style={{fontSize:"18PX",fontWeight:"800",color:"black",marginTop:"5px"}}>
                Already have an account
            </Link>
            <div style={{marginTop:"10px",color:"blue",fontSize:"18PX",fontWeight:"800"}}> &copy; Developerd by Vipun Sanjana for beter web {date}</div>
        </div>

    )
}

export default Signin