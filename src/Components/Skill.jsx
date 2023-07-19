import html from '../Images/html-5.png'
import css from '../Images/css-3.png'
import js from '../Images/js.png'
import bootstrap from '../Images/bootstrap.png'
import tailwind from '../Images/tailwind.png'
import react from '../Images/react.png'
import router from '../Images/react-router.png'
import query from '../Images/react-query.jpg'
import firebase from '../Images/firebase.png'
import jwt from '../Images/jwt.png'
import node from '../Images/node-js.png'
import express from '../Images/express.png'
import wordpress from '../Images/wordpress.png'
import canva from '../Images/canva.jpg'
import mongodb from '../Images/mongodb.png'
import Marquee from 'react-fast-marquee';

const Skill = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row ">
                    <div>
                    <Marquee>
                        
                        <img src={html} className='w-auto h-20 mx-4' />
                        <img src={css} className='w-auto h-20 mx-4' />
                        <img src={js} className='w-auto h-20 mx-4' />
                        <img src={bootstrap} className='w-auto h-20 mx-4' />
                        <img src={tailwind} className='w-auto h-20 mx-4' />
                        <img src={react} className='w-auto h-20 mx-4' />
                        <img src={router} className='w-auto h-20 mx-4' />
                        <img src={query} className='w-auto h-20 mx-4' />
                        <img src={firebase} className='w-auto h-20 mx-4' />
                        <img src={jwt} className='w-auto h-20 mx-4' />
                        <img src={node} className='w-auto h-20 mx-4' />
                        <img src={express} className='w-auto h-20 mx-4' />
                        <img src={mongodb} className='w-auto h-20 mx-4' />
                        <img src={wordpress} className='w-auto h-20 mx-4' />
                        <img src={canva} className='w-auto h-20 mx-4' /> 
                    </Marquee>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;