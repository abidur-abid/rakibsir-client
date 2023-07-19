import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  console.log(blogs);

  return (
    <div >
      <Helmet>
        <title>Abid | Blogs</title>
      </Helmet>
      
      <section>
        <div className="custom-container">
          <SectionTitle title={'My Publication List _'}></SectionTitle>
         <p>
         1. E-waste management in Dhaka City: Prescript, Practice, Problem and Proposition, JKKNIU Journal of Social Sciences, Jatiya Kabi Kazi Nazrul Islam University, Mymensingh, Bangladesh (Vol 1, Issue 1)
         </p>

        <p>
        2. Comprehensive Local Government Policy: How Far Is The Shore? Volume 36, Issue 2, Dynamics of Public Administration, Department of Public Administration, University of Lucknow, India.
        </p>

        <p>
        3. The Determinants of Child Size at Birth: A National Demographic and Health Survey in Bangladesh 2014. IOSR Journal of Humanities And Social Science, Volume 24, Issue 12, Series 7
        </p>

        <p>
        4. Voters’ Perception Towards Female Candidates at local Government: A Study on Trishal Union Parishad, JKKNIU Journal of Social Sciences, Jatiya Kabi Kazi Nazrul Islam University, Mymensingh, Bangladesh, 2019.
        </p>

      <p>
      5. Human Rights and Female Garment Workers in Bangladesh: An Empirical Study, JKKNIU Journal of Social Sciences, Jatiya Kabi Kazi Nazrul Islam University, Mymensingh, Bangladesh, 2019
      </p>
        </div>
      </section>
      <section >
        <div className="custom-container">
        <SectionTitle title={'My Articles'}></SectionTitle>
          <div className="custom-row">
            <table className="table w-full mx-auto rounded border-2">
              {/* head */}
              <thead className='custom-background p-4 m-4'>
                <tr>
                  <td className='lg:text-lg font-bold text-white  p-2 m-2'>#</td>
                  <th className='lg:text-lg font-bold text-white p-2 m-2'>Article Picture</th>
                  <th className='lg:text-lg font-bold text-white p-2 m-2'>Article Name</th>
                  <th className='lg:text-lg font-bold text-white p-2 m-2'>Action</th>
                </tr>
              </thead>
              <tbody className="p-4 m-4">
                {blogs && blogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <td className='lg:text-lg font-bold  p-2 m-2'>
                      <span>{index + 1}</span>
                    </td>
                    <td>
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={blog.image} alt="image" className='custom-logo' />
                      </div>
                    </td>
                    <td className='lg:text-lg font-bold p-2 m-2'>
                      {blog.blogName}
                    </td>
                    <td className='lg:text-lg font-bold p-2 m-2'>
                    <Link to={`/blogs/${blog._id}`}>
                        <a href="https://www.jagonews24.com/en/opinion/news/21175">Details</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
