import { Link, useNavigate } from "react-router-dom";
import SocialLink from "../../Shared/SocialLink";
import signUpImg from "../../assets/Mobile login.gif"
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
const Register = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { createUser, logOut, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const onSubmit = data => {
        const { name, photoURL, email, password, confirmPassword } = data;
        if (password === confirmPassword) {
            createUser(email, password)
                .then((result) => {
                    const user = result.user;
                    updateUserProfile(name, photoURL)
                        .then(() => {
                            const userDetails = { name:name, email:email, role: "Student" };
                            axiosSecure.post('/users', userDetails)
                                .then(data => { console.log("User handle role", data.data); })
                                .catch(error => { console.log(error); })
                            setError("");
                        })
                        .catch((error) => {
                            setError(error.message)
                        });
                    setError("");


                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Regestration Done!!',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    // logout then login
                    logOut()
                        .then(() => { })
                        .catch(() => { })
                    navigate('/login');
                })
                .catch(error => setError(error.message))
        }
        else {
            setError("Confirm your password again!");
        }

    }
    return (

        <div className="my-10 mx-20">
            <div className="grid grid-cols-2 gap-10">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-[#1597a8] text-3xl font-bold">Sign Up now!!</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div> <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered text-black" />
                                </div>
                                    <div className="my-1 text-left">
                                        {errors.name && <span className="text-red-600 ">Name is required</span>}
                                    </div></div>

                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered text-black" />
                                    </div>
                                    <div className="my-1 text-left">
                                        {errors.email && <span className="text-red-600 ">Email is required</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input {...register("photoURL", { required: true })} type="text" placeholder="Photo Url" className="input input-bordered text-black" />
                                <div className="my-1 text-left">
                                    {errors.photoUrl && <span className="text-red-600 ">Photo URL is required</span>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/ })} placeholder="password" className="input input-bordered text-black" />
                                    <div className="my-1 text-left">
                                        {errors.password?.type === "minLength" && <span className="text-red-600 ">Password must have 6 Characters.</span>}
                                    </div>
                                    <div className="my-1 text-left">
                                        {errors.password?.type === "maxLength" && <span className="text-red-600 ">Password must have within 20 Characters.</span>}
                                    </div>
                                    <div className="my-1 text-left">
                                        {errors.password?.type === "pattern" && <span className="text-red-600 ">Password must have one Capital Letter & one Special Character.</span>}
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirmPassword", { required: true })} placeholder="Retype password" className="input input-bordered text-black" />
                                </div>
                            </div>
                            {
                                error && <small className="text-red-600">{error}</small>
                            }
                            <div className="form-control  mt-6">
                                <input className="btn mx-auto w-[296px] bg-[#1ed8f0] hover:bg-[#1bc2d8]" type="submit" value="Signup" />
                            </div>
                        </form>
                        <SocialLink></SocialLink>
                        <p className="text-[#1597a8]">Already have an account? Go to <Link
                            className="text-[#0f6c78] font-semibold" to='/login'>Login</Link></p>
                    </div>
                </div>
                <img src={signUpImg} alt="" />
            </div>
        </div>

    );
};

export default Register;