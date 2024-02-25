import React from 'react';
import useLocationExclude from './locationHook.js';
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

function Nav()  {
    const excludePaths =["/", "/signup"];
    const location = useLocationExclude(excludePaths);

        return (
        <div id='navbarId'> 
           <nav className='navClass'>
            {!location.isExcluded && (
                <ul className='navLink'>
                    <div id='homeLink'>
                        <NavLink  to="/Home" className="homeCL">Home</NavLink>   
                    </div>
                    <div id='scholarLink'>
                        <NavLink to='/views/Grants' className="scholarshipCL">Scholarships</NavLink>   
                    </div>
                    <div id='eduLink'>
                        <NavLink to='../cohereChat' className="eduCL">Education</NavLink>    
                    </div>
                    <div id='aboutLink'>
                        <NavLink  activeClassName="aboutCL">About Us</NavLink> 
                    </div>
                    <div id='contactLink'>
                        <NavLink to='/views/Contact' className="contactCl">Contact</NavLink>
                    </div>
                </ul>
                )}
           </nav>
           </div>
        );
}

export default Nav;
