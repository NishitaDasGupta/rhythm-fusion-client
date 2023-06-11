import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const FeedbackUpdate = () => {
    const updateClass = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = updateClassData => {
        const newUpdate = { feedback: updateClassData.feedback }
        axiosSecure.put(`/updateclass/${updateClass._id}`, newUpdate)
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Done!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/dashboard/manageclasses")
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1 className="text-2xl text-center font-bold my-7">Give Some Feedback :</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control ml-9 mr-9 max-w-4xl w-full ">
                    <label className="label">
                        <span className="label-text">Give Feedback for {updateClass.classNam}:</span>
                    </label>
                    <textarea {...register("feedback", { required: true })} className="textarea  h-24 input input-bordered w-full  text-gray-400 hover:text-black" ></textarea>

                </div>
                {errors.feedback && <span className="text-red-700">Feedback field is required</span>}
                <div className="form-control mt-6">
                    <input className="btn bg-[#1ed8f0] hover:bg-[#1bc2d8] w-1/3 mx-auto " type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default FeedbackUpdate;