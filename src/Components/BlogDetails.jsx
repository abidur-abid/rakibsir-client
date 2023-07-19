import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SectionTitle from './SectionTitle';

const BlogDetails = () => {

    const {id} = useParams();
    console.log(id);
    const [blogDetails, setBlogDetails] = useState();
     
    useEffect(()=>{
        fetch(`http://localhost:5000/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlogDetails(data))
    },[])

    console.log(blogDetails);
    return (
        <>
         <Helmet>
            <title>Abid | Blog Details</title>
         </Helmet>\
         <SectionTitle title={'Blog Details _'}></SectionTitle>

         <section>
            <div className="custom-container">
                <div>
                    <img src={blogDetails?.image} className='custom-image ml-auto mr-auto'/>
                </div>
                <div >
                    <h4 className='text-center'>{blogDetails?.blogName}</h4>
                </div>
                <div className="custom-row">
                    <p className='text-justify'>{blogDetails?.blogDescription}</p>
                </div>
            </div>
         </section>
        </>
    );
};

export default BlogDetails;