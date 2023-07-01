import { useEffect, useState } from "react";
import count from "../../../assets/count.jpg"
import { useSpring, animated } from '@react-spring/web'

function Number ({n}){
    const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 1500,
        config: {mass: 1, tension:20, fraction: 10}
    });
    return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>

}

const TotalCount = () => {
    const [counts, setcounts] = useState([]);

    useEffect(() => {
        fetch('count.json')
            .then(res => res.json())
            .then(data => setcounts(data))
    }, [])

    

    return (
        <div className="my-24">
        
            <div className="hero place-items-stretch" style={{ backgroundImage: `url(${count})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="z-10">
                    
                    <div >

                        <div className="flex items-center justify-around ">
                            {
                                counts.map(count =>
                                    <div key={count.count_id}>
                                        <div className="py-9">
                                            <img className="w-24 p-2  border-4 border-white  " src={count.image} alt="" />
                                         
                                            <h1 className="text-base  font-bold my-3 text-center text-white">{count.name}</h1>
                                            <hr />
                                            <p className="text-center my-2 text-4xl  text-white"><Number n={count.number}/></p>
                                        </div>

                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCount;