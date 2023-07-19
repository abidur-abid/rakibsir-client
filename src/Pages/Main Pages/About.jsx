
import SectionTitle from '../../Components/SectionTitle';
import AboutImage from '../../Components/AboutImage';
import Education from '../../Components/Education';
import AboutSummary from '../../Components/AboutSummary';
import { Helmet } from 'react-helmet-async';
import about from '../../Images/about.svg'
import ssc from '../../Images/ssc.jpg'
import hsc from '../../Images/hsc.jpg'
import honours from '../../Images/honours.jpg'
import ma from '../../Images/ma.jpg'

const About = () => {
    return (
       <>
       <Helmet>
        <title>md. Rakibul Islam | About</title>
       </Helmet>
        
        <section>
            <div className="custom-container">
                <div className="">
                    <img src={about} className='custom-image ml-auto mr-auto'/>
                </div>
                <SectionTitle title={'My Experience _'}></SectionTitle>
                <div className="">
                <h4>Lecturer</h4>
                <p>5 February 2017 – Present</p>
                <p>Department of Local Government & Urban Development,</p>
                <p>Jatiya Kabi Kazi Nazrul Islam University,</p>
                <p>Trishal, Mymensingh-2220, Bangladesh</p>
                </div>
                <SectionTitle title={'My Educational Qualification _'}></SectionTitle>
                <div className="lg:grid lg:grid-cols-2 Lg:gap-8 md:grid md:grid-cols-1 Lg:gap-4 sm:grid sm:grid-cols-2 sm:gap-8">
                    <div className=" p-4">
                    <div class="card w-96 custom-border shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={ma} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <p >M. S. S - 2015</p>
                            <p >M. S. S in Public Administration</p>
                            <p >University of Dhaka</p>
                            <p >Bangladesh</p>
                        </div>
                        </div>
                    </div>
                

                    <div className=" p-4">
                    <div class="card w-96 custom-border shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={honours} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <p >B. S. S.- 2014</p>
                            <p >B.S.S. in Public Administration</p>
                            <p >University of Dhaka</p>
                            <p >Bangladesh</p>
                        </div>
                        </div>
                    </div>
                
              
                    <div className=" p-4">
                    <div class="card w-96 custom-border shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={hsc} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <p >H. S. C – 2010</p>
                            <p >Science Group</p>
                            <p >Dhaka College</p>
                            <p >Bangladesh</p>
                        </div>
                        </div>
                    </div>
                
                    <div className=" p-4">
                    <div class="card w-96 custom-border shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={ssc} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <p >S. S. C – 2008</p>
                            <p >Science Group</p>
                            <p >Dhanmondi Govt. Boys’ High School</p>
                            <p >Bangladesh</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    );
};

export default About;