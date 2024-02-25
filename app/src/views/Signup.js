import React from "react";
import { Link } from "react-router-dom";

class Signup  extends Component() {
  render() {
    return (
    <div>
        <form>
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
}

export default Signup;