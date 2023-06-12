import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useStudent = () => {
    const { user,loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { isLoading:isStudentLoading, refetch, data: isStudent } = useQuery({

        queryKey: ['isStudent',user?.email],
        enabled: !loading  && !!user?.email,
        queryFn: async () => {
           if(!loading  && user?.email)
           {
            const response = await axiosSecure.get(`/user/student/${user?.email}`);
            // console.log(response);
            return response.data.student;
           }
        },
    })
    return [isStudent,isStudentLoading,refetch];
};

export default useStudent;