
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../Components/SocialLogin';
import SectionTitle from '../../Components/SectionTitle';

import Swal from 'sweetalert2';
import login from '../../Images/login.svg'



const Login = () => {
    
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Loged In',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate('/');
            })
    }


    return (
        <>
            <Helmet>
                <title>Abid | Login</title>
            </Helmet>
            <SectionTitle title={'Please Log In _'}></SectionTitle>
            <section>
                <div className="custom-container">
                    <div className="custom-row mb-8">
                         
                            <img src={login} className='custom-image mx-auto' />
                    </div> 
                    <div className="custom-row">
                    
                    <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input className="btn text-gray custom-background custom-button-2 font-bold" type="submit" value="Login" />
                            </div>
                        </form>
                        
                    </div>
                    
                    <div className="">
                    <Link to="/registration">
                    <p className='text-center'>New Here? Create an account </p>
                    </Link>
                    <SocialLogin></SocialLogin>
                    
                    
                    
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;