
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useCarts = () => {
    const axiosSecure = useAxiosSecure();

    const { isLoading, refetch, data: carts = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const response = await axiosSecure.get('/allcarts');
            // console.log(response);
            return response.data;
        },
    })
    return [carts, refetch, isLoading];
};

export default useCarts;

