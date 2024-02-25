import React from 'react';

import { NavLink } from 'react-router-dom';

function Nav()  {
        return (
           <nav>
                <ul>
                    <li>  <NavLink to="/views/Home" activeClassName="home">Home</NavLink>  </li>
                    <li> <NavLink to='/views/Grants' activeClassName="scholarship">Scholarships</NavLink> </li>
                    <li> <NavLink to='/views/cohereController' activeClassName="edu">Education</NavLink> </li>
                    <li> <NavLink  activeClassName="">About Us</NavLink> </li>
                    <li> <NavLink  activeClassName="">Contacts</NavLink> </li>
                </ul>
           </nav>
        );
}

export default Nav;
