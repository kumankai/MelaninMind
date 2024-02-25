import React, { Component } from 'react';
import { Link } from 'react-router-dom';    
class Login extends Component {
    handleSubmit = async (event) => {
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

            //Test
            console.log('Login successful');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                   <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
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
}

export default Login;