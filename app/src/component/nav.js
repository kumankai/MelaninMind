import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

function Nav()  {
    

        return (
           <nav>
                <ul>
                    <NavLink to="/views/Home" activeClassName="home">Home</NavLink>   
                     <NavLink to='/views/Grants' activeClassName="scholarship">Scholarships</NavLink>   
                     <NavLink to='/views/cohereController' activeClassName="edu">Education</NavLink>    
                     <NavLink  activeClassName="">About Us</NavLink> 
                     <NavLink  activeClassName="">Contacts</NavLink> 
                </ul>
           </nav>
        );
}

export default Nav;
