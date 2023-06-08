import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TopSlider = () => {
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {
        fetch('sliderdata.json')
            .then(res => res.json())
            .then(data => setSliderData(data))
    }, [])
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    sliderData.map((slide) => <SwiperSlide key={slide.courseID}><div className="hero min-h-screen" style={{ backgroundImage: `url(${slide.img})` }}>
                        <div className="hero-overlay  bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-lg lg:text-4xl font-bold">{slide.courseTitle}</h1>
                                <p className="mb-5 text-justify"> {slide.courseDetails}</p>
                                <Link to='/register'><button className="btn  bg-[#1ed8f0] hover:bg-[#1bc2d8] mr-5">Sign Up</button></Link>
                                <button className="btn  bg-[#a5eff9] hover:bg-[#78e8f6]">Learn More</button>
                            </div>
                        </div>
                    </div></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default TopSlider;