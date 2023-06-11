
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const axiosSecure = useAxiosSecure();

    const { isLoading, refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await axiosSecure.get('/allclasses');
            // console.log(response);
            return response.data;
        },
    })
    return [classes, refetch, isLoading];
};

export default useClasses;

