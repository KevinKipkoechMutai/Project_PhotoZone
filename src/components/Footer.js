import React from 'react';

function Footer() {
    return (
            <div className='footer'>
                <form>
                <h2>Have some questions? Reach out to us!</h2>
                <div className='input-fields'>
                    <label htmlFor='email'>Email</label>
                    <input className='box-field' id='email' type="email"/>
                    <label htmlFor='name'>Name</label>
                    <input className='box-field' id='name' type="text"/>
                    <labe htmlFor="text-area">Comments:</labe>
                    <textarea className='box-field' id='text-area' type="text"></textarea>
                    <button className='button'>Submit</button>
                </div>
                </form>
            </div>
    )
}

export default Footer;