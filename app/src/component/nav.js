import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
           <nav>
                <ul>
                    <li>  <Link to="/views/Home">Home</Link>  </li>
                    <li> <Link>About Us</Link> </li>
                    <li> <Link>Contacts</Link> </li>
                </ul>

           </nav>
        );
    }
}

export default Nav;
