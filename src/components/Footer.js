import React from 'react';

function Footer() {
    return (
            <div className='footer'>
                <form>
                <h2>Have some questions? Reach out to us!</h2>
                <label htmlFor='email'>Email</label>
                <input id='email' type="email"/>
                <label htmlFor='name'>Name</label>
                <input id='name' type="text"/>
                <textarea type="text"></textarea>
                <button>Submit</button>
                </form>
            </div>
    )
}

export default Footer;