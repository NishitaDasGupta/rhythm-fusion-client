import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import useCheckInstructor from "../hook/useCheckInstructor";



const InstructorPrivate = ({children}) => {
    const [isInstructor,isInstructorLoading] = useCheckInstructor();
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if(loading && isInstructorLoading)
    {
        return <h1>Loading ... </h1>
    }
    if(user && isInstructor)
    {
        return children;
    }
    else
    {
       return <Navigate to="/login" replace={true} state={{from:location}}></Navigate>
    }
  
};

export default InstructorPrivate;