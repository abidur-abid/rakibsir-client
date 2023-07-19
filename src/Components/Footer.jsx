import React from 'react';
import logo from '../Images/logo.png'
import SocialLink from './SocialLink';


const Footer = () => {
    return (
        <footer>
            <div className="custom-container">
                <div className="p-4">
                    <h4 className='text-white text-center'>Md. Rakibul Islam</h4>
                </div>
                <div className='custom-row'>
                    <p className='font-bold mx-auto text-white'>Copyrights 2023. All Rights Reserved. Designed By Abid</p>
                </div>
                <div className='flex justify-center gap-4 my-2 items-center'>
                    <SocialLink></SocialLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;