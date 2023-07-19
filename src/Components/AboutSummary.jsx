
import developer from '../Images/Developer.gif'

const AboutSummary = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column md:w-1/2">
                        <img src={developer} className='custom-image' />
                    </div>
                    <div className="custom-column md:w-1/2 tablet-custom-image">
                        <p>I am seeking an opportunity to contribute skill, enthusiasm, and passion for technology. I am an adaptable and quick learner, continueously expanding my skill set and staying up to date with the latest progtamming languages, frameworks and industry best practices.</p>
                        <p><b>Email:</b> abidur.abid40@gmail.com</p>
                        <p><b>Location:</b> Sumamgonj, Bangladesh</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;