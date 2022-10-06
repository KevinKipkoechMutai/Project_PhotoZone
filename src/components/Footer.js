import React from 'react';

function Footer() {
    return (
            <div className='footer' id='footer'>
                <form>
                <h2>Contact Us:</h2>
                <div className='input-fields'>
                    <label htmlFor='email'>Email</label>
                    <input className='box-field' id='email' type="email"/>
                    <label htmlFor='name'>Name</label>
                    <input className='box-field' id='name' type="text"/>
                    <label htmlFor="text-area">Comments:</label>
                    <textarea className='box-field' id='text-area' type="text"></textarea>
                    <button className='button'>Submit</button>
                </div>
                </form>
            </div>
    )
}

export default Footer;