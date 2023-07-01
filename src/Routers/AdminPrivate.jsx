import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";



const AdminPrivate = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    // console.log(loading,isAdminLoading);
    if (loading && isAdminLoading) {
       // console.log(loading,isAdminLoading)
        return <h1>Loading ... </h1>;
    }
    if (user && isAdmin) {
    //    console.log(user,isAdmin)
        return children;
    }

    
    return <Navigate to="/login" replace={true} state={{ from: location }}></Navigate>


};

export default AdminPrivate;