import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useCheckInstructor = () => {
    const { user,loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { isLoading:isInstructorLoading, refetch, data: isInstructor } = useQuery({

        queryKey: ['isInstructor',user?.email],
        enabled: !loading  && !!user?.email,
        queryFn: async () => {
           if(!loading  && user?.email)
           {
            const response = await axiosSecure.get(`/user/instructor/${user?.email}`);
            // console.log(response);
            return response.data.instructor;
           }
        },
    })
    return [isInstructor,isInstructorLoading,refetch];
};

export default useCheckInstructor;