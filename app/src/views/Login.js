import React from 'react';
import { Link, useNavigate } from "react-router-dom";

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
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>

                    <div>
                        <Link to="/views/Signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;