
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAdmin from '../Hooks/useAdmin';
import useModerator from '../Hooks/useModerator';





const DashboardHeader = () => {

    const navigate = useNavigate();

    const {user,logOut} = useAuth();

    const [isAdmin] = useAdmin();

    const [isModerator] = useModerator();

    // console.log(isAdmin);
    // console.log(isModerator);
    
    const handleLogOut = () =>{
        logOut();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Loged Out',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/')
       
    }

    return (
        <header className='custom-background'>
            <div className="custom-container">
                
                    
                    <p className='text-center pb-4'>{`Welcome, ${user?.displayName}`}</p>
                  
                

                <div className='flex justify-center gap-8 pb-4'>
                <div className="custom-column ">
                    
                    <button className='bg-gray-100 py-2 px-4 rounded'><Link to='/'> <i class="fa-solid fa-house"></i> Home</Link></button>
                    </div>
                    <div className="custom-column ">
                    <button onClick={handleLogOut} className='bg-gray-100 py-2 px-4 rounded'>Log Out <i class="fa-solid fa-right-from-bracket"></i>  </button>
                    </div>
                </div>
                    
                   
                    
                    
                
            </div>
            <div className="custom-container">
             <div className='flex justify-center gap-8 pb-8'>
             <Link to='/dashboard/dashboardhome'><button className='bg-gray-100 py-2 px-4 rounded'>Dashboard Home</button></Link>
                {
                    isAdmin ?
                    <>
                     <Link to='/dashboard/allusers'><button className='bg-gray-100 py-2 px-4 rounded'>All Users</button></Link>
                    <Link to='/dashboard/uploadblog'><button className='bg-gray-100 py-2 px-4 rounded'>Upload Blog</button></Link>
                    
                    </>
                    : 
                    isModerator ? 
                    <p>You are Moderator</p>
                    :
                    <p>You are normal user</p>

                }
             </div>
            </div>
        </header>
    );
};

export default DashboardHeader;