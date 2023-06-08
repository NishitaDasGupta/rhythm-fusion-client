import { Rating } from '@smastrom/react-rating'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '@smastrom/react-rating/style.css'
import useClasses from '../../../hook/useClasses';

const PopularClasses = () => {
    const [classes] = useClasses();
    // sorted by big to small 
    classes.sort(function (a, b) {
        return b.numStudents - a.numStudents;
    });
   
    return (
        <div className="my-48">
            <div className="mb-14" >
                <h1 className="text-5xl font-bold my-5">Top <span className="text-[#18adc0]">Classes</span></h1>
                <p className="lg:w-3/5 mb-5">The school offers a comprehensive curriculum that encompasses a wide range of musical instruments, including drums, percussion, keyboards, guitars, and bass. </p>

            </div>
            <Swiper
                slidesPerView={3.5}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}
                grabCursor={true}
                freeMode={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, FreeMode]}
                className="mySwiper"
            >    {
                    classes.slice(0, 6).map((classList) =>
                        <SwiperSlide key={classList.classId}>
                            <div className="card card-compact bg-base-100 hover:bg-[#a5eff9] shadow-xl">
                                <figure><img src={classList.classImage} className="h-[190px] mt-5" alt="Class" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{classList.classNam} Class</h2>
                                    <div className="flex">
                                        <p className="text-[#0f6c78]">Mon-Fri   {classList.time}</p>
                                        <Rating
                                            style={{ maxWidth: 60 }}
                                            value={classList.ratings}
                                            readOnly
                                        />
                                    </div>
                                    <div className="card-actios justify-end">
                                        <div className="divider mb-0 mt-0"></div>
                                        <div className="flex justify-between">
                                            <p className="bg-[#18adc0] py-1 text-center w- rounded-full text-white">${classList.price}.00</p>
                                            <p className=" text-right text-[#0f6c78]">{classList.numStudents} student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )

                }
                <div className="w-full   flex justify-between absolute top-11 left-0 "><h1></h1>
                    <h1></h1></div>
            </Swiper>


        </div>
    );
};

export default PopularClasses;