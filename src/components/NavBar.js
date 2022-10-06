import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
    return (
        <BrowserRouter>
            <header>
            <h1>PhotoZone</h1>
            <nav>
                <ul className='bold'>
                    <li>Home</li>
                    <li>
                        <Link to='favorites' smooth>
                            My Favorites
                        </Link>
                    </li>
                    <li>Latest News</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
        </BrowserRouter>
    )
}

export default NavBar;