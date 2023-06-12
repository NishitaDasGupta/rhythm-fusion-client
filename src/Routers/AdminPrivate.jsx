import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";



const AdminPrivate = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if(loading && isAdminLoading)
    {
        return <h1>Loading ... </h1>
    }
    if(user && isAdmin)
    {
        return children;
    }
    else
    {
       return <Navigate to="/login" replace={true} state={{from:location}}></Navigate>
    }
  
};

export default AdminPrivate;