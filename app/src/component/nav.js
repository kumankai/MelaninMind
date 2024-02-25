import React from 'react';
import useLocationExclude from './locationHook.js';
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

function Nav()  {
    const excludePaths =["/", "/signup"];
    const location = useLocationExclude(excludePaths);

        return (
        <div className='navbar'> 
           <nav>
            {!location.isExcluded && (
                <ul>
                    <div id='homeLink'>
                        <NavLink to="/Home" className="home">Home</NavLink>   
                    </div>
                    <div id='scholarLink'>
                        <NavLink to='/views/Grants' className="scholarship">Scholarships</NavLink>   
                    </div>
                    <div id='eduLink'>
                        <NavLink to='../cohereChat' className="edu">Education</NavLink>    
                    </div>
                    <div id='aboutLink'>
                        <NavLink  activeClassName="about">About Us</NavLink> 
                    </div>
                    <div id='contactLink'>
                        <NavLink to='/views/Contact' className="contact">Contact</NavLink>
                    </div>
                </ul>
                )}
           </nav>
           </div>
        );
}

export default Nav;
