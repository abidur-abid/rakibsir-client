import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import professor from '../../Images/education.gif'
import localnews from '../../Images/developer.gif'
import lgud from '../../Images/contact.gif'
import { Helmet } from 'react-helmet-async';

const Projects = () => {

    const [projects, setProjects] = useState();
    
    useEffect(()=>{
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    console.log(projects)

    return (
       <>
       <Helmet>
        <title>
            Abid | Projects
        </title>
       </Helmet>
        <SectionTitle title={'My Latest Projects'}></SectionTitle>
         <section>
            <div className="custom-container">
                {
                    projects && projects.map(project =>                 <div key={project._id} className="custom-row">
                    <div className="custom-column lg:w-2/3">
                            <p className='text-center'><b>{project?.projectName}</b></p>
                            <p>
                                {project?.projectDescription}
                            </p>
                            <ul className='flex gap-4  justify-center items-center'>
                                <a href={project?.clientLink} className='custom-background rounded px-2'><i class="fa-solid fa-code-compare"></i> Client Code</a>
                                <a href={project?.serverLink} className='custom-background rounded px-2'><i class="fa-solid fa-code-compare"></i> Server Code</a>
                                <a href={project?.liveLink} className='custom-background rounded px-2'><i class="fa-solid fa-link"></i> Live Website</a>  
                            </ul>
                            <ul className='flex gap-4 mt-4 justify-center items-center'>
                                <a href="#" className='bg-gray-200 rounded px-2'>Tailwind</a>
                                <a href="#" className='bg-gray-200 rounded px-2'>React</a>
                                <a href="#" className='bg-gray-200 rounded px-2'>Firebase</a>  
                                <a href="#" className='bg-gray-200 rounded px-2'>Express</a>  
                                <a href="#" className='bg-gray-200 rounded px-2'>MongoDB</a>  
                            </ul>
                        </div>
                        <div className="custom-column lg:w-1/3">
                         <img src={project?.image} className='custom-image ml-auto mr-auto'/>  
                        </div>
                    </div>)
                }


            </div>
        </section>
       </>
    );
};

export default Projects;