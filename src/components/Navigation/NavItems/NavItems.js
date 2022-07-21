import React from 'react';
import {NavLink} from "react-router-dom";
import './NavItems.css';

const NavItems = () => {
    return (
        <ul className='Nav-Items'>
           <li className='Nav-Item'>
               <NavLink to='/' exact>Home</NavLink>
           </li>
            <li className='Nav-Item'>
               <NavLink to='/enter' exact>Intercom</NavLink>
           </li>
            <li className='Nav-Item'>
               <NavLink to='/cal' exact>Calculator</NavLink>
           </li>
        </ul>
    );
};

export default NavItems;