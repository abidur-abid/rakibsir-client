import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const { user } = useAuth();

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  return (
    <div className="sticky top-0">
      <header className="mobile-menu-parent-position laptop-header-position z-30 sticky top-0">
        <div className="sticky top-0">
          
          <div className="custom-row flex items-center mx-auto">
            <Link className='text-white mx-auto' to="/">
                <h4 className=''>Md. Rakibul Islam</h4>
                </Link>
            </div>
            <div className="custom-row -mt-4 ">
              <ul className="custom-laptop-menu mx-auto pb-4">
              <Link className='text-white' to="/">
                <p ><i class="fa-solid fa-house"></i> Home</p>
                </Link>
                <Link  className='text-white flex' to="/about">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> Education & Experience </p>
                </Link>
                <Link  className='text-white' to="/skills">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> Achivements</p>
                </Link>

                <Link  className='text-white' to="/">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> TA & RA</p>
                </Link>
                <Link  className='text-white' to="/courses">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> Courses</p>
                </Link>
                <Link  className='text-white' to="/blogs">
                <p ><i class="fa-solid fa-book-open"></i> Rearch & Articles</p>
                </Link>
                {
                  user ? <Link to='/dashboard/dashboardhome'><img src={user?.photoURL} className='w-12 h-12 rounded-full'/></Link>
                  : 
                  <Link  className='text-white' to="/login">
                  <p><i class="fa-solid fa-right-to-bracket"></i> Log In</p>
                  </Link> 
                }
              </ul>
            </div>
            <div>
              {mobileMenu ? (
                <button onClick={handleMobileMenu} className="flex justify-center items-center custom-mobile-menu">
                  <i className="fa-solid fa-bars text-white"></i>
                </button>
              ) : (
                <div className="mobile-menu-position w-80 h-auto pl-12 pr-20 rounded z-30">
                  <div onClick={handleMobileMenu}>
                    <button>
                      <i className="fa-solid fa-minus text-white"></i>
                    </button>
                    <div className="grid grid-cols-1 justify-start gap-4 mt-4 mobile-menu overflow-auto">
                    <Link className='text-white' to="/">
                <p className='text-left'><i class="fa-solid fa-house"></i> Home</p>
                </Link>
                <Link  className='text-white' to="/about">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> Education </p>
                </Link>
                <Link  className='text-white' to="/about">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> Achivements</p>
                </Link>
                <Link  className='text-white' to="/about">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> Experience</p>
                </Link>
                <Link  className='text-white' to="/about">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> Rearch</p>
                </Link>
                <Link  className='text-white' to="/about">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> TA & RA</p>
                </Link>
                <Link  className='text-white' to="/about">
                <p  className='text-left'><i class="fa-solid fa-eject"></i> Courses</p>
                </Link>

                <Link  className='text-white' to="/blogs">
                <p className='text-left'><i class="fa-solid fa-book-open"></i> Articles</p>
                </Link>
                {
                  user ? <Link to='/dashboard/dashboardhome'><img src={user?.photoURL} className='w-12 h-12 rounded-full'/></Link>
                  : 
                  <Link  className='text-white' to="/login">
                  <p className='text-left'><i class="fa-solid fa-right-to-bracket"></i> Log In</p>
                  </Link> 
                }
                    </div>
                  </div>
                </div>
              )}
            </div>
          
        </div>
      </header>
    </div>
  );
};

export default Header;