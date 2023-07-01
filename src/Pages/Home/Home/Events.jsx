import { useEffect, useState } from "react";
import { CiLocationOn } from 'react-icons/ci';
import { BiTime } from 'react-icons/bi';
const Events = () => {
    const [events, setevents] = useState([]);
    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setevents(data))
    }, [])
    return (
        <div className="my-36">
            <h1 className="text-5xl font-bold mt-5 mb-10">Our Upcoming <span className="text-[#18adc0]">Events</span></h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
           {
                events.map(event =>
                    <div key={event.id}>
                        <div className="relative w-[360px]">
                            <img
                                className=" w-full h-auto "
                                src={event.img}

                            />
                            <div className="absolute bottom-0 w-full bg-[#18adc0] bg-opacity-70  py-2 px-4">
                                <p className="text-lg font-bold text-white">{event.title}</p>
                                <div className="flex justify-start items-center gap-4">
                                    <div className="text-white">
                                    <BiTime/>
                                    </div>
                                    <p className="text-sm text-white">{event.time}</p>
                                  
                                    <div className="text-white">
                                    <CiLocationOn/>
                                    </div>
                                    <p className="text-sm text-white">{event.location}</p>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0   text-center bg-[#18adc0] bg-opacity-60 text-white py-2 px-2">
                                <p className="text-lg font-bold">{event.date}</p>
                            </div>
                        </div>
                    </div>)}
           </div>


        </div>
    );
};

export default Events;