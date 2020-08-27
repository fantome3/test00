import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <header className = 'navbar navbar-expand-lg navbar-light bg-light'>
            <NavLink to = "/">
                <label className = 'navbar-brand'> Test of Mango inc </label>
            </NavLink>
            <div className="navbar navbar-expand">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to = "/login" className = 'nav-link'> Login </NavLink>
                    </li>
                
                    <li className="nav-item">
                        <NavLink to = "/signup" className = 'nav-link'> SignUp </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;