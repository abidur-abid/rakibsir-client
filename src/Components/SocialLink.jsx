import React from 'react';
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'
import instagram from '../Images/instagram.png'

// social link must be change project by project
const SocialLink = () => {
    return (
        <>
        <a href="#" target="_blank"><img src={linkedin} className='social bg-white' /></a>
        <a href="#" target="_blank"><img src={instagram} className='social bg-white'  /></a>
        <a href="https://www.facebook.com/profile.php?id=100000639825722" target="_blank"><img src={facebook} className='social bg-white'/></a>
        </>
    );
};

export default SocialLink;