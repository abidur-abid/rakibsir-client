
import education from '../Images/education.gif'



const AboutImage = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <img src={education} className='image ml-auto mr-auto' />
                </div>
            </div>
        </section>
    );
};

export default AboutImage;