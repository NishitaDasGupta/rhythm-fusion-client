
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";


const useCarts = () => {
    const axiosSecure = useAxiosSecure();
const {user , loading} = useContext(AuthContext);
    const { isLoading, refetch, data: carts = [] } = useQuery({
        queryKey: ['carts'],
        enabled: !loading  && !!user.email,
        queryFn: async () => {
           if(!loading  && user.email)
           {
            const response = await axiosSecure.get('/allcarts');
            // console.log(response);
            return response.data;
           }
        },
    })
    return [carts, refetch, isLoading];
};

export default useCarts;

