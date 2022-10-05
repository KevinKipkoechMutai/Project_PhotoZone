import React from 'react'

function NavBar() {
    return (
        <header>
            <h1>PhotoZone</h1>
            <nav>
                <ul className='bold'>
                    <li>Home</li>
                    <li>My Favorites</li>
                    <li>Latest News</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;