import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                   <form method="post" action>
                        <div>
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                   </form>
                </div>
            </div>
        );
    }
}

export default Login;