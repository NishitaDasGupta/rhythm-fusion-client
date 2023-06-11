import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from 'sweetalert2';


const MySelectedClasses = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { isLoading, refetch, data: mycarts = [] } = useQuery({
        queryKey: ['mycarts'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/mycarts?studentEmail=${user.email}`);
            return (response.data);
        },
    });

    const handleDelete = (cart) => {
        // console.log(cart._id);
        axiosSecure.delete(`/deletecart/${cart._id}`)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Deleted!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-10">Selected Classes: </h1>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>

                            <th></th>
                            <th>Instructor</th>
                            <th>Class</th>
                            <th>Enrolled Students</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mycarts.map((cart, index) => <tr key={cart._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="font-bold">{cart.instructorName}</div>
                                <div className="text-sm opacity-50">{cart.email}</div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cart.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="font-bold">Course {cart.classNam}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-center"> {cart.numStudents} Students</span>
                                <br />
                                <span className="badge badge-ghost badge-sm">Available: {cart.availableSeats}</span>
                            </td>
                            <td>{cart.price}</td>
                            <th>
                                <button onClick={() => { handleDelete(cart) }} className="btn btn-ghost btn-xs text-2xl" title="Delete"><MdDelete /></button>
                                <button className="btn btn-ghost btn-xs text-2xl" title="Payment"><FaMoneyBillAlt /></button>
                            </th>
                        </tr>)}


                    </tbody>


                </table>
            </div >
        </div >
    );
};

export default MySelectedClasses;