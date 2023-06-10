import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {
    const axiosSecure = useAxiosSecure();
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axiosSecure.get('/instructors')
            .then(data => { setInstructors(data.data); })
            .catch(error => { console.log(error); })

    }, [])
    return [instructors];
};

export default useInstructors;