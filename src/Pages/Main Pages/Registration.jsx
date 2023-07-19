
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin";
import SectionTitle from "../../Components/SectionTitle";
import registration from '../../Images/register.png'
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

const Registration = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    
    // console.log(image);
 
    const onSubmit = data => {
        
        
        //here are image upload function

        const formData = new FormData();
    formData.append('image', data.blogImage[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
                // create user

        createUser(data.email, data.password)
        .then(result => {

            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, imgURL)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Successfully Created Account',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                                reset();
                                navigate('/');
                            }
                        })



                })
                .catch(error => console.log(error))
        })
           
           
        }
    })


    };

    return (
        <>
            <Helmet>
                <title>Abid | Registration</title>
            </Helmet>
            <SectionTitle title={'Please Create Account _'}></SectionTitle>
            <section>
                <div className="custom-container">
                    
                    <div className="custom-row">
                        <img src={registration} className="custom-image mx-auto" />
                    </div>
                    <div className="custom-row">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <input
                                type="file"
                                
                                {...register("blogImage", { required: true })}
                                className="file-input file-input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-gray custom-background custom-button-2 font-bold" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        </div>
                    
                    
                    <div className="">
                    <Link to="/login">
                    <p className="text-center">Already have an account? Login </p>
                    </Link>
                    
                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Registration;