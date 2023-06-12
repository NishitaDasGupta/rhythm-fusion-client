import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useStudent from "../hook/useStudent";



const StudentPrivate = ({children}) => {
    const [isStudent,isStudentLoading] = useStudent();
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if(loading && isStudentLoading)
    {
        return <h1>Loading ... </h1>
    }
    if(user && isStudent)
    {
        return children;
    }
    else
    {
       return <Navigate to="/login" replace={true} state={{from:location}}></Navigate>
    }
  
};

export default StudentPrivate;