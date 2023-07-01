import { Fade } from "react-awesome-reveal";
import useInstructors from "../../../hook/useInstructors";


const PopularInstructors = () => {
    const [instructors] = useInstructors();
    // sorted by big to small 
    instructors.sort(function (a, b) {
        return b.student - a.student;
    });

    return (
        <div className="my-48">

            <h1 className="text-5xl font-bold my-5">Our Popular <span className="text-[#18adc0]">Instructors</span></h1>
            <h5 className="lg:w-3/5 mb-5">The school offers a comprehensive curriculum that encompasses a wide range of musical instruments, including drums, percussion, keyboards, guitars, and bass.</h5>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
                {
                    instructors.map(teacher =>
                        <div key={teacher._id}>
                            <Fade >
                                <div className="w-72 mx-auto shadow-xl">
                                    <div className="relative">
                                        <img
                                            className="w-full h-auto border-2 border-[#18adc0] rounded-xl"
                                            src={teacher.instructorImage}
                                            alt="Instructor Image"
                                        />
                                         <h2 className="rounded-xl px-2 text-lg font-bold pt-2">{teacher.name}</h2>
                                         <p className="pb-2 text-sm px-2">{teacher.position}, <br />Rhythm Fusion School.</p>
                                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex flex-col items-center justify-center">
                                           
                                            <p className="text-white text-sm">Email: {teacher.email}</p>
                                            <p className="text-white text-sm">Total Class: {teacher.classesTaken}</p>
                                            <p className="text-white text-sm">Total Student: {teacher.student}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>


                        </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;