import { AiFillEdit } from 'react-icons/ai';
import { useContext, useEffect } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [myClassList, setMyClassList] = useState([]);

    axiosSecure.get(`/myclass?email=${user?.email}`)
        .then(data => setMyClassList(data.data))

       
    return (
        <div>
            <h1 className="text-3xl font-bold my-8 mx-5 ">List of my classes</h1>
            <hr />
            <div className="overflow-x-auto mx-10 shadow-xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class</th>
                            <th>Enrolled Students</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myClassList.map(myClass =>

                            <tr key={myClass._id}>
                               <Link>
                               <th className='text-xl py-3 px-3'>
                                    <AiFillEdit />
                                </th></Link>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myClass?.classImage} alt="Class Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myClass?.classNam}</div>
                                            <div className="text-sm opacity-50">${myClass?.price}.00</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    {myClass?.numStudents}
                                </td>
                                <td className="text-center">{myClass?.availableSeats}</td>
                                <td>{myClass?.status}</td>
                                {myClass?.feedback === "" ?
                                    <td>No Feedback</td>
                                    :
                                    <td>{myClass?.feedback}</td>}
                            </tr>
                        )}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;