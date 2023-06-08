import { SiSemanticscholar } from 'react-icons/si';
import { MdOutlineSchool } from 'react-icons/md';
import { BsBarChart } from 'react-icons/bs';
import { GiTeacher } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Welcome = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    return (
        <div className="my-48">
            <div>
                <h1 className="my-5 text-center text-5xl font-bold">Welcome to <span className="text-[#18adc0]">Rhythm Fusion</span></h1>
                <p className="mb-5 mx-auto text-center lg:w-3/5">Rhythm Fusion Music Instrument School is a renowned educational institution specializing in teaching the art of rhythmic music and instrumental skills.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-64 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">

                        <div className='text-5xl text-[#1ed8f0]'>
                            <MdOutlineSchool />
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">World-Class Faculty</h2>
                        <p>Exceptional faculty comprising world-class musicians.</p>
                    </div>
                </div>
                
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"   className="card w-64 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">

                        <div className='text-5xl text-yellow-600'>
                            <SiSemanticscholar /></div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">Performance Masterclasses</h2>
                        <p>Organize it conducted by renowned guest artists.</p>
                    </div>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-64 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className='text-5xl text-[#1ed8f0]'> <BsBarChart /></div>

                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">Career Guidance and Networking</h2>
                        <p>Offers workshops and seminars on music industry trends.</p>
                    </div>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-64 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className='text-5xl text-yellow-600'>   <GiTeacher /></div>

                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">Expert Instructors</h2>
                        <p>Enrich students musical education we have world-class musicians</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Welcome;