import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {
    const axiosSecure = useAxiosSecure();
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axiosSecure.get('/allclasses')
            .then(data => { setClasses(data.data); })
            .catch (error=> {  console.log(error); })
    }, [])
    return [classes];
};

export default useClasses;
