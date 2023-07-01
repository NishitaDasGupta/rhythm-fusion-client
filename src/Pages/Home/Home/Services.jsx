import { useEffect, useState } from "react";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-48">
             <h1 className="text-5xl font-bold my-5">Our <span className="text-[#18adc0]">Services</span></h1>
            <h5 className="lg:w-3/5 mb-5">Experience the power of music through our innovative instruction, personalized lessons, diverse genres, and a supportive community of musicians.</h5>
           <div className="grid md:grid-cols-2 gap-6 mx-auto">
           {
                services.map(service =>
                    <div key={service.service_id}>
                        <div className="flex justify-start items-center ">
                        <img className="w-24 mr-9 p-2  border-4 border-[#18adc0] rounded-full" src={service.image} alt="" />
                        <h1 className="text-base  font-bold text-[#18adc0]">{service.name}</h1>
                        
                        </div>
                       
                    </div>)
            }
           </div>
        </div>
    );
};

export default Services;