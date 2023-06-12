import useClasses from "../../../hook/useClasses";
import musicImg from "../../../assets/loggedin.jpg"
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Classes = () => {
    const [classes] = useClasses();
    const ApprovedClasses = classes.filter(cls => cls.status === "Approved");
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSelect = (classList) => {
        if (!user?.email) {
            Swal.fire({
                title: 'Before select a course you have to login!!',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { replace: true, state: { from: location } });
                }
            })

        }
        else {
            const classID = classList._id;
            delete classList._id;
            console.log("classID is", classID);
            console.log("class list after delete is", classList);
            const selectedCart = { ...classList, classID, studentEmail: user?.email, payment: "" }
            axiosSecure.post('/selectcart', selectedCart)
                .then((data) => {
                    if (data.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'The course is booked!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/dashboard/myselectedclasses');
                    }
                })
                .catch((error) => { console.log(error) })
        }
    }


    return (


        <div>
            <div className="hero h-48" style={{ backgroundImage: `url(${musicImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl text-white font-bold ">Classes</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 gap-6 my-14">

                    {
                        ApprovedClasses.map(classList =>
                            <div key={classList._id}>
                                <h1 className="text-[#18adc0] pl-4 py-3 text-2xl font-bold">Course of {classList.classNam}</h1>
                                <div className={classList.availableSeats !== 0 ?
                                    "card card-side bg-base-100 shadow-2xl" : "card card-side bg-red-400 shadow-2xl"}>
                                    <div>

                                        <figure><img className="w-[300px] h-[180px] pl-4 pt-3" src={classList.classImage} alt="Movie" /></figure>
                                    </div>
                                    <div className="card-body text-xs">
                                        <h2 className={`card-title text-base ${classList.availableSeats !== 0 ? "text-amber-600" : "text-white"}`}>Ins. {classList.instructorName}</h2>
                                        <p>Total Students: {classList.numStudents}</p>
                                        <p>Available Seats: {classList.availableSeats}</p>
                                        <p>Price: ${classList.price}.00</p>
                                        {/* button disable or not */}

                                        <div className="card-actions justify-end">
                                            {(classList.availableSeats !== 0 && user?.role !== "Student") ?
                                                <button onClick={() => handleSelect(classList)} disabled={false} className="btn  bg-[#1ed8f0] hover:bg-[#1bc2d8]   
                                            ">Select</button>
                                                :
                                                <button disabled={true} className="btn">Select</button>
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div> </div>
    );
};

export default Classes;