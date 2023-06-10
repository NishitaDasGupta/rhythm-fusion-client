import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const AddAClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { availableSeats, classImage, classNam, price, status } = data;
        console.log(data);
    };
    return (
        <div>
            <div className="flex justify-end mt-3">
                <div className="
         bg-[#e9fbfe] border rounded-xl py-2 px-3 
            ">
                    <div>
                        <h2 className="text-[#1ed8f0] text-lg font-bold py-2">Instructor</h2>
                        <div className="">
                            <div className="flex justify-center items-center">
                                <img className="w-12 mr-4 rounded-md" src={user?.photoURL} alt="" />
                                <div>
                                    <h3>{user?.displayName}</h3>
                                    <h3>{user?.email}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl font-bold text-center">Add a class</h1>

            <div className="flex justify-center  items-center my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-4">
                        {/* class  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Name:</span>
                            </label>
                            <input {...register("classNam", { required: true })} type="text" placeholder="Class" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {errors.classNam && <span>Class Name is required</span>}

                        {/* status  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Status</span>
                            </label>
                            <input {...register("status", { required: true })} type="text" value="Pending" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {errors.classNam && <span>Class Name is required</span>}


                    </div>

                    {/* image   */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input {...register("classImage", { required: true })} type="text" placeholder="Class Image URL" className="input input-bordered w-full " />
                    </div>
                    {errors.classImage && <span>Class Image is required</span>}


                    <div className="grid grid-cols-2 gap-4">
                        {/* available  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input {...register("availableSeats", { required: true })} min={0} type="number" placeholder="Available Seats" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {errors.availableSeats && <span>Available Seats field is required</span>}

                        {/* price  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input {...register("price", { required: true })} type="number" min={1} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {errors.price && <span>Price is required</span>}
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn bg-[#1ed8f0] hover:bg-[#1bc2d8] w-1/3 mx-auto " type="submit" value="Add a Class" />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddAClass;