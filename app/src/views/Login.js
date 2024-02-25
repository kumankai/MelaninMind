import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../css/Login.css';
import melaninLogo from '../images/melaninlogo.png';
function Login() {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const responseData = await response.json();
            console.log(responseData);

            //Set localstorage
            const newToken = responseData.user.token;
            const newName = responseData.user.name;
            const newEmail = responseData.user.email;

            localStorage.setItem('token', newToken);
            localStorage.setItem('name', newName);
            localStorage.setItem('email', newEmail);
            navigate('/Home');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div id='loginLog'>
            <div id='imageLog'>
            <img className="imgMelanin" src={melaninLogo} alt=""/>
            </div>
            <h1 className='loginH'>Login</h1>
            <div classname="loginDiv">
                <form className='formLogF' onSubmit={handleSubmit}>
                    <div id='emailLog'>
                        <label className="emailLoglb" htmlFor="email">Email:</label>
                        <input type="text" className="emailLog" name="email" />
                    </div>
                    <div id='passwordLog'>
                        <label className='passLoglb' htmlFor="password">Password:</label>
                        <input type="password" className="passwordLog" name="password" />
                    </div>
                    <div id='submitLog'>
                        <button className='subLogBtn' type="submit">Login</button>
                    </div>

                    <div id='signupButton'>
                        <Link className='signLinkLog' to="/Signup">Not a member yet? Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
  
}

export default Login;