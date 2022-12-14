import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
    return (
        <BrowserRouter>
            <header>
            <h1>PhotoZone</h1>
            <nav>
                <ul className='bold nav-links'>
                    <li>
                        <Link to='#favorites' smooth className="nav-bar-links">
                            My Favorites
                        </Link>
                    </li>
                    <li>
                        <Link to="#photo-collection" smooth className="nav-bar-links">
                            All Photo Collections
                        </Link> 
                    </li>
                    <li>
                        <Link to="#footer" smooth className="nav-bar-links">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </BrowserRouter>
    )
}

export default NavBar;
