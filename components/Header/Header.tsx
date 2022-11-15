import React from 'react';
import Image  from 'next/image';
import logo from '../../public/images/KFC-Logo.png';

const Header = () => {
    return (
        <div className='headerWrapper d-flex justify-content-between'>
            <div className="logo">
            <Image src={logo} width='80' height='50' alt="Photo"/>
            </div>
            <div className="menu-link">
                <ul>
                    <li><a href="">Store Locator</a></li>
                    <li><a href="">SignIn/Register</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;