import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const ClassUpdate = () => {
    const updateClass = useLoaderData();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = updateClassData => {
        const newUpdate = {
            classNam: updateClassData.classNam, classImage: updateClassData.classImage, availableSeats: parseInt(updateClassData.availableSeats), price: parseFloat(updateClassData.price)
        }
        axiosSecure.put(`/updateclass/${updateClass._id}`, newUpdate)
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Updated Successfully!!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    navigate('/dashboard/myclasses');
                }

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name:</span>
                    </label>
                    <input {...register("classNam", { required: true })} type="text" defaultValue={updateClass.classNam} className="input input-bordered w-full max-w-xs text-gray-400 hover:text-black" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input {...register("classImage", { required: true })} type="text" defaultValue={updateClass.classImage} className="input input-bordered w-full text-gray-400 hover:text-black" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input {...register("availableSeats", { required: true })} min={0} type="number" defaultValue={updateClass.availableSeats} className="input input-bordered w-full max-w-xs text-gray-400 hover:text-black" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input {...register("price", { required: true })} type="number" min={1} defaultValue={updateClass.price} className="input input-bordered w-full max-w-xs text-gray-400 hover:text-black" />
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-[#1ed8f0] hover:bg-[#1bc2d8] w-1/3 mx-auto " type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default ClassUpdate;