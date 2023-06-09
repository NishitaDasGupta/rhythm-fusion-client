import { Link, useNavigate } from "react-router-dom";
import SocialLink from "../../Shared/SocialLink";

import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import loglog from "../../assets/Login.gif"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(true);
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const onSubmit = data => {
        const { email, password } = data;
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully!!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')
            })
            .catch(error => setError(error.message))
    }
    return (

        <div className="my-8 mx-20">
            <div className="grid grid-cols-2 gap-8">
                <img src={loglog} alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-[#1597a8] text-3xl font-bold">Login now!!</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered lg:w-[296px] text-black" />
                            </div>
                            <div className="my-1 text-left">
                                {errors.email && <span className="text-red-600 ">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="input-group pr-5">
                                    <input type={showPass === true ? "password" : "text"} {...register("password", { required: true })} placeholder="password" className="input input-bordered text-black" />
                                    <button onClick={() => { setShowPass(!showPass) }} className="btn btn-square text-2xl">
                                        {showPass === true ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}

                                    </button>
                                </div>

                                <div className="my-1 text-left">
                                    {errors.password && <span className="text-red-600 ">Password is required</span>}
                                </div>
                            </div>
                            {
                                error && <small className="text-red-600">{error}</small>
                            }
                            <div className="form-control  mt-6">
                                <input className="btn bg-[#1ed8f0] hover:bg-[#1bc2d8] lg:w-[296px]" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLink></SocialLink>
                        <p className="text-[#1597a8]">Dont have an account? Go to <Link className="text-[#0f6c78] font-semibold" to='/register'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;