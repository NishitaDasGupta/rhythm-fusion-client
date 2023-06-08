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
            <p className="lg:w-3/5 mb-5">The school offers a comprehensive curriculum that encompasses a wide range of musical instruments, including drums, percussion, keyboards, guitars, and bass. </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-14">
                {
                    instructors.map(teacher =>
                        <div key={teacher.instructorId}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className="flex"><div className="avatar">
                                        <div className="w-10 rounded-full mr-5">
                                            <img src={teacher.instructorImage} />
                                        </div>
                                    </div>
                                        <h2 className="card-title ">{teacher.name}  </h2></div>

                                    <p>
                                        Classes: {
                                            teacher.classes.map(classL =>
                                                <small key={classL?.cid}>{classL.cname}, </small>
                                            )
                                        }
                                    </p>
                                    <p>Students: <small>{teacher.student}</small></p>
                                    <p className="text-center font-bold text-[#1597a8]">Gallery</p>

                                    {
                                        teacher.classeImage.map(classL =>
                                            <div className="w-1/2" key={classL.cImgId}><figure className="w-80 h-[213px]"><img src={classL.cImg} alt="Shoes" /></figure>
                                            </div>
                                        )
                                    }




                                </div>


                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;