import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Signup.css';

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
        <div id="signUpId">
            <h1 className="signUp">Sign Up</h1>
            <form className="signForm" onSubmit={handleSubmit}>
                <div id="nameSignId">
                    <label className="namelbl">Name</label>
                    <input className="nameSign" type="text" name="name" placeholder="Name"/>
                </div>
                <div id="emailSignId">                    <label className="emaillbl" for="email">Email:</label>
                    <input className="emailSign" type="text" id="email" name="email" placeholder="Email" />
                </div>
                <div id="passSignId">
                    <label className='passlbl' for="password">Password:</label>
                    <input className="passSign" type="password" id="password" name="password" placeholder="Password" />
                </div>
                <div id="submitSignId">
                    <button  className='submitBtn'type="submit">Signup</button>
                </div>
            </form>
        </div>
    );
}
export default Signup; 
