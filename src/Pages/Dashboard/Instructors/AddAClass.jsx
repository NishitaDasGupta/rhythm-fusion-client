import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AddAClass = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1 className="text-4xl font-bold">Add a class</h1>
            <div className="text-xl">
                <h3>Instructor Name: {user.displayName}</h3>
                <h3>Instructor Email: {user.email}</h3>
            </div>


            <div>
                <input type="text" placeholder="Class Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Class Image" className="input input-bordered w-full max-w-xs" />
                <input type="number" placeholder="Available Seats" className="input input-bordered w-full max-w-xs" />
                <input type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
            </div>
        </div>
    );
};

export default AddAClass;