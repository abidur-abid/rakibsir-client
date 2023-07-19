import React from 'react';
import SocialLink from '../Components/SocialLink'
import profile from '../Images/profile2.png'

const Banner = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column">
                        <h2 className=''>Hello_</h2>
                        <h4 className=''>I AM ABID</h4>
                        <h4 className='mt-5 custom-background rounded px-1'>JUNIOR MERN STACK DEVELOPER</h4>
                        <div className='flex gap-4 mt-5 tablet-social-link'>
                        <SocialLink></SocialLink>
                        </div>
                        <div className='tablet-button mobile-button'>
                            <a href="https://drive.google.com/file/d/1D7-F8K4GO7JHds03ClhJAeM18Arf2U5g/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><button className='button'><i class="fa-solid fa-download"></i> Download Resume</button></a>
                        </div>
                    </div>
                    <div className="custom-column">
                        <img src={profile} className='custom-image custom-background rounded-full p-12 tablet-custom-image'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;