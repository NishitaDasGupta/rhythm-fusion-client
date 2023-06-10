
import Marquee from "react-fast-marquee";
const MarqueeText = () => {
    return (
        <div className="py-2 bg-base-300 text-[#0f6c78]">
            <Marquee speed={60} pauseOnHover={true}>
            Admission is currently open now for our exciting summer camp at Rhythm Fusion School! Learning the different music instruments with joy...
            </Marquee>
        </div>
    );
};

export default MarqueeText;