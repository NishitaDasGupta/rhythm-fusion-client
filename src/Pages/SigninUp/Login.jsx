import { Link } from "react-router-dom";
import SocialLink from "../../Shared/SocialLink";
import loginImg from "../../assets/loggedin.jpg"
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => { console.log(data); }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-[#1597a8] text-3xl font-bold">Login now!!</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered text-black" />
                                </div>
                                <div className="my-1 text-left">
                                    {errors.email && <span className="text-red-600 ">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered text-black" />
                                    <div className="my-1 text-left">
                                        {errors.password && <span className="text-red-600 ">Password is required</span>}
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#1ed8f0] hover:bg-[#1bc2d8]" type="submit" value="Login" />
                                </div>
                            </form>
                            <SocialLink></SocialLink>
                            <p className="text-[#1597a8]">Dont have an account? Go to <Link className="text-[#0f6c78] font-semibold" to='/register'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;