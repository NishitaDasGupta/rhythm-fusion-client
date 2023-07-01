import { Link } from "react-router-dom";
import musicImg from "../../../assets/loggedin.jpg"
import useInstructors from "../../../hook/useInstructors";
import { Zoom } from "react-awesome-reveal";
import Typewriter from "react-ts-typewriter";
import { BsPersonWorkspace } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Instructors = () => {
    const [instructors] = useInstructors();
    return (
        <div className="bg-[#d2f7fc]">
            <div className="hero h-48" style={{ backgroundImage: `url(${musicImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl text-white font-bold "><Typewriter cursor={false} text="Instructors" /></h1>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto">
          
                {/* <div className="grid grid-cols-2 gap-6 my-14"> */}
                <VerticalTimeline>
                    {
                        instructors.map(teacher =>
                            <VerticalTimelineElement key={teacher._id} className="vertical-timeline-element--work"
                            contentStyle={{  color: '#fff' }}
                            contentArrowStyle={{ borderRight: '10px solid  rgb(30, 216, 240)' }}  iconStyle={{ background: 'rgb(30, 216, 240)', color: '#fff' }}
                            icon={<BsPersonWorkspace/>}
                          >
                                <Zoom>

                                    <div
                                        className="card card-side bg-base-100 shadow-2xl">
                                        <div className="avatar">
                                            <div className="w-44 rounded">
                                                <img src={teacher.instructorImage} />
                                            </div>
                                        </div>
                                        <div className="card-body text-xs">
                                            <h2 className="card-title text-base">Ins. {teacher.name}</h2>
                                            <p>Email: {teacher.email}</p>
                                            <p>Total Classes: {teacher.classesTaken}</p>
                                            <div className="card-actions justify-start">
                                                <Link to="/classes" className="btn  bg-[#1ed8f0] hover:bg-[#1bc2d8]   
                                            ">See Classes</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>

                            </VerticalTimelineElement>)
                    }
                    </VerticalTimeline>
                {/* </div> */}
            
            </div> </div>

    );
};

export default Instructors;