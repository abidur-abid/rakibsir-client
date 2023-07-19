import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/SectionTitle';
import dashhome from  '../../Images/dashboard.svg'

const DashboardHome = () => {
    return (
        <>
         <Helmet>Abid | Dashboard Home</Helmet>
         <SectionTitle title={'Dashboard Home'}></SectionTitle>
         <section>
            <div className="custom-container">
                <img src={dashhome} className='mr-auto ml-auto' />
            </div>
        </section>
        </>
    );
};

export default DashboardHome;