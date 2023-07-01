import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useUsers from "../../../hook/useUsers";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [registeredUsers, refetch] = useUsers();
    const handleRole = (registeredUser, roleValue) => {
     //   console.log(registeredUser,roleValue);
        const newRole = { role: roleValue };
        axiosSecure.put(`/updateuser/${registeredUser._id}`, newRole)
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${registeredUser.name} is now ${roleValue}!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <h1 className="my-8 text-2xl font-bold text-center">All Users List </h1>
            <div className="overflow-x-auto mx-5">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Change Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registeredUsers.map((registeredUser, index) => <tr key={registeredUser._id}>
                            <td>{index + 1}</td>
                            <td>{registeredUser.name}</td>
                            <td>{registeredUser.email}</td>
                            <td className={registeredUser.role!== "Student" ? `font-bold` : `font-normal`}>{registeredUser.role}</td>
                            <th>
                                {registeredUser?.role === "Admin" ?
                                    <button disabled={true} className="btn btn-ghost border-2 border-[#1bc2d8] hover:bg-[#1bc2d8] mr-4">Make Admin</button>
                                    :
                                    <button onClick={() => { handleRole(registeredUser, "Admin") }} className="btn btn-ghost border-2 border-[#1bc2d8] hover:bg-[#1bc2d8] mr-4">Make Admin</button>}

                                {registeredUser?.role === "Instructor" ?
                                    <button disabled={true} className="btn btn-ghost border-2 border-[#1bc2d8] hover:bg-[#1bc2d8] mr-4">Make Instructor</button>
                                    :
                                    <button onClick={() => { handleRole(registeredUser, "Instructor") }} className="btn btn-ghost border-2 border-[#1bc2d8] hover:bg-[#1bc2d8] mr-4">Make Instructor</button>}
                            </th>
                        </tr>)}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;