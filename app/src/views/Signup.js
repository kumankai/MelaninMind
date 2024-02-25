import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
    handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const name = formData.get('name');
        const password = formData.get('password');

        try {
            const response = await fetch('http://localhost:8080/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, name, password })
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
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <div>
                        <button type="submit">Signup</button>
                    </div>

                    <div>
                        <Link to="/views/Signup">Login</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup; 
