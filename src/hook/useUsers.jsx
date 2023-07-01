
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data: registeredUsers = [] } = useQuery({
        queryKey: ['registeredUsers'],
        queryFn: async () => {
            const response = await axiosSecure.get('/allusers');
          //  console.log(response);
            return response.data;
        },
    })
    return [registeredUsers, refetch, isLoading];
};

export default useUsers;