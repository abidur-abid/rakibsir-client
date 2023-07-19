
import FormContact from '../../Components/FormContact';
import SectionTitle from "../../Components/SectionTitle";
import SocialLink from "../../Components/SocialLink";
import contact from '../../Images/contact.png'
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <section>
        <Helmet>
        <title>Abid | Contact</title>
    </Helmet>
    <div className="custom-container">
        <SectionTitle title={'Feel Free Contact With Me'}></SectionTitle>
    </div>
    <div className="custom-container">
        <div className="custom-row">
            <img src={contact} className='custom-image ml-auto mr-auto' />
        </div>
        <div className="custom-row tablet-social-link flex lg:justify-center gap-4 mt-4">
            <SocialLink></SocialLink>
        </div>
        <div>
            <p className='text-center'><b>Email:</b> abidur.abid40@gmail.com  |  <b>Mobile:</b> 01568441078</p>
            <p className='text-center'><b>Location:</b> Sunamgonj, Bangladesh</p>
        </div>
        <div className="custom-row">
            <FormContact></FormContact>
        </div>
    </div>
    </section>
    );
};

export default Contact;



