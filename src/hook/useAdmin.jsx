import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { user,loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { isLoading:isAdminLoading, refetch, data: isAdmin } = useQuery({

        queryKey: ['isAdmin',user?.email],
        enabled: !loading  && !!user?.email,
        queryFn: async () => {
           if(!loading  && user?.email)
           {
            const response = await axiosSecure.get(`/user/admin/${user?.email}`);
            // console.log(response);
            return response.data.admin;
           }
        },
    })
    return [isAdmin,isAdminLoading,refetch];
};

export default useAdmin;