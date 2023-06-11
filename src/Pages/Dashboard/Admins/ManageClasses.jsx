import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useClasses from "../../../hook/useClasses";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const axiosSecure = useAxiosSecure();
  const [classes, refetch] = useClasses();

  // console.log(classes);
  const handleStatus = (clas, statusValue) => {
    console.log(statusValue);
    const newUpdate = { status: statusValue };
    axiosSecure.put(`/updateclass/${clas._id}`, newUpdate)
      .then(data => {
        // console.log(data.data);
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Approved!',
            showConfirmButton: false,
            timer: 1500
          })

        }

      })
      .catch(error => console.log(error))

  }
  return (
    <div className="m-9">
      <h1 className="text-4xl font-bold ">Total class: {classes.length}</h1>
      {
        classes.map(clas =>
          <div key={clas._id}>

            <div className="card lg:card-side bg-base-100 shadow-xl my-4 ">
              <figure><img src={clas.classImage} className="mx-2 w-[300px] h-[180px]" alt="Album" /></figure>
              <div className="card-body">

                <div className=" grid grid-cols-2 gap-4">
                  <div>
                    <h2 className="card-title ">Class:<span className="text-[#128290]">{clas.classNam}</span></h2>

                    <p>Total Enrolled Students: {clas.numStudents}</p>
                    <p>Available Seats: {clas.availableSeats}</p>
                    <p>Price: ${clas.price}.00</p>
                    <p>Status: {clas.status}</p></div>
                  <div>
                    <h2 className="text-[#128290] font-bold">Instructor</h2>
                    <p className="font-semibold text-sm">{clas.instructorName}</p>
                    <p className="text-gray-500 text-sm">{clas.email}</p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  {
                    clas.status !== "Pending" ?
                      <>
                        <button disabled={true} className="btn  bg-[#1ed8f0] hover:bg-[#1bc2d8] ">Approve</button>
                        <button disabled={true} className="btn  bg-[#1ed8f0] hover:bg-[#1bc2d8] ">Deny</button>
                      </>
                      :
                      <>
                        <button onClick={() => { handleStatus(clas, "Approved") }} className="btn  bg-[#1ed8f0] hover:bg-[#1bc2d8] ">Approve</button>
                        <button onClick={() => { handleStatus(clas, "Denied") }} className="btn  bg-[#1ed8f0] hover:bg-[#1bc2d8] ">Deny</button>
                      </>
                  }

                  <Link to={`/dashboard/updatefeedback/${clas._id}`}>
                    <button
                      className="btn bg-[#1ed8f0] hover:bg-[#1bc2d8] " > SEND FEEDBACK </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>)
      }
    </div>
  );
};

export default ManageClasses;

