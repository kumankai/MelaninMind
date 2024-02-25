import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
           <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

           </nav>
        );
    }
}

export default Nav;
