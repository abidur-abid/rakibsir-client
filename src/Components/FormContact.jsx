
import contact from '../Images/contact.svg'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    // service id, template id and public key must be change project by project
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_usop9ib', 'template_wpdyeec', form.current, 'PDSJMrqIhbNfGNqPl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="lg:w-1/3">
                        <img src={contact} className='custom-image'/>
                    </div>
                    <div className=" lg:w-2/3">
                        
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                                <div className="form-control">
                                <input type="text" placeholder="Type Your Name" name='name' className="input  input-bordered " />
                                </div>
                                <div className="form-control">
                            
                                <input type="email" placeholder="Enter Your Email Address" name='email' className="input input-bordered" />
                                
                                </div>
                                <div className="form-control">
                            
                                <textarea placeholder="Type Your Message" name='message' className="textarea textarea-bordered textarea-lg  w-full" ></textarea>
                                
                                </div>
                                <div className="form-control mt-6 flex">
                                <input type="submit" value="Submit" className="btn color  custom-button-2 font-bold"/>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;