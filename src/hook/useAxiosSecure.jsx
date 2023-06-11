import axios from "axios";
// import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import { useContext } from "react";

const axiosSecure = axios.create(
    {
        baseURL: "http://localhost:5000",
    })
const useAxiosSecure = () => {
    // const { logOut } = useContext(AuthContext);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     axiosSecure.interceptors.request.use((request) => {
    //         const token = localStorage.getItem("access-token");
    //         if (token) {
    //             request.headers.Authorization = `Bearer ${token}`;
    //         }
    //         return request;
    //     })
    //     axiosSecure.interceptors.response.use(
    //         (response) =>response ,
    //         async (error) => {
    //             if (error.response && (error.response.status === 401 || error.response.status === 403)) {
    //                 // await logOut()
    //                 // .then(() => { })
    //                 // .catch(() => { })
    //                 // navigate('/login');
    //                 console.log("Hello From Error ");
    //             }
    //             return Promise.reject(error);
    //         })

    // }, [ ])

    return axiosSecure;
};

export default useAxiosSecure;