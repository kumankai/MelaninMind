import React from 'react';
import useLocationExclude from './locationHook.js';
import { NavLink } from 'react-router-dom';

function Nav()  {
    const excludePaths =["/", "/signup"];
    const location = useLocationExclude(excludePaths);

        return (
           <nav>
            {!location.isExcluded && (
                <ul>
                    <NavLink to="/views/Home" activeClassName="home">Home</NavLink>   
                     <NavLink to='/views/Grants' activeClassName="scholarship">Scholarships</NavLink>   
                     <NavLink to='/views/cohereController' activeClassName="edu">Education</NavLink>    
                     <NavLink  activeClassName="">About Us</NavLink> 
                     <NavLink  activeClassName="">Contacts</NavLink> 
                </ul>
                )}
           </nav>
        );
}

export default Nav;
