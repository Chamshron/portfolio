import React from 'react';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return (  
        <div className='NavBar'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default NavBar;