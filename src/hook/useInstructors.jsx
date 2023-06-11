// import { useEffect, useState } from "react";
// import useAxiosSecure from "./useAxiosSecure";

// const useInstructors = () => {
//     const axiosSecure = useAxiosSecure();
//     const [instructors, setInstructors] = useState([]);
//     useEffect(() => {
//         axiosSecure.get('/instructors')
//             .then(data => { setInstructors(data.data); })
//             .catch(error => { console.log(error); })

//     }, [])
//     return [instructors];
// };

// export default useInstructors;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const response = await axiosSecure.get('/instructors');
            console.log(response);
            return response.data;
        },
    })
    return [instructors, refetch, isLoading];
};

export default useInstructors;