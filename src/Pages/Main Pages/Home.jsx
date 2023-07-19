import React from 'react';
import Banner from '../../Components/Banner';
import SectionTitle from '../../Components/SectionTitle';
import AboutSummary from '../../Components/AboutSummary';
import ContactSummary from '../../Components/ContactSummary';
import rakibsir1 from '../../Images/rakibsir1.jpg'
import { Helmet } from 'react-helmet-async';
import SocialLink from '../../Components/SocialLink';
import travelling from '../../Images/travelling.png'
import teaching from '../../Images/teaching.png'
import playing from '../../Images/playing.png'
import learning from '../../Images/learning.png'
import FormContact from '../../Components/FormContact'

const Home = () => {
    return (
        <>
        <Helmet>
            <title>md. Rakibul Islam | Home</title>
        </Helmet>
            <section>
                <div className="custom-container">
                    <div className="custom-row">
                        <img src={rakibsir1} className='custom-image profile ml-auto mr-auto' />
                    </div>
                    <div className="">
                        <h3 className='text-center'>Md. Rakibul Islam</h3>
                        <h4 className='text-center'>Assistant Professor And Head Of the Department</h4>
                        <h4 className='text-center'>Local Government And Urban Development</h4>
                        <h4 className='text-center'>Jatiya Kabi Kazi Nazrul Islam University</h4>
                        <div className='flex justify-center gap-8 mt-4'>
                            <SocialLink></SocialLink>
                        </div>
                    </div>
                    <div className="custom-row">
                        <SectionTitle title={'What I Like To Do _'}></SectionTitle>
                    </div>
                    <div className="custom-row mt-8">
                        <div className="custom-column">
                            <img src={teaching} className='custom-logo mx-auto' />
                            <h4 className='text-center mt-4'>Teaching</h4>
                        </div>
                        <div className="custom-column mt-4">
                            <img src={learning} className='custom-logo mx-auto' />
                            <h4 className='text-center mt-4'>Learning</h4>
                        </div>
                        <div className="custom-column mt-4">
                            <img src={travelling} className='custom-logo mx-auto' />
                            <h4 className='text-center mt-4'>Travelling</h4>
                        </div>
                        <div className="custom-column mt-4">
                            <img src={playing} className='custom-logo mx-auto' />
                            <h4 className='text-center mt-4'>Playing</h4>
                        </div>
                    </div>

                    <div className="custom-row">
                        <SectionTitle title={'Feel Free To Message Me _'}></SectionTitle>
                    </div>
                    <div className="custom-row mt-8">

                        
                           <FormContact></FormContact>
                        
                   
                      
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;