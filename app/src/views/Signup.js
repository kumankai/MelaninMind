import React from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
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
                throw new Error('Signup failed');
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
            console.error('Signup error:', error);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    );
}
export default Signup; 
