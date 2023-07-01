
import {   Slide,Fade } from 'react-awesome-reveal';
const PrincipalsTalk = () => {
    return (
        <div className="my-36">
               <h1 className="text-5xl font-bold mt-5 mb-10">Message from the <span className="text-[#18adc0]">Principal</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <Slide triggerOnce>
                    <img className="rounded-3xl drop-shadow-xl" src="https://img.freepik.com/free-photo/handsome-successful-old-businessman-suit-using-mobile-phone_176420-31774.jpg?w=740&t=st=1687878104~exp=1687878704~hmac=fd79d182f96bec029af0735a1d500b0d98feb3ffb149f52be07945fc69ba7f2b" alt="" /> </Slide>
                </div>
                <div>
                <Fade cascade >
                    <h1 className="text-3xl font-bold mt-4">Prof. Benjamin Carter</h1>
                    <h1 className="text-lg ">Principal, <br />Rhythm Fusion School</h1>
                    <p className="py-6 text-justify">As the Principal of Rhythm Fusion School, I am honored to lead a vibrant community where rhythm and fusion thrive. Our school is a nurturing space where diverse cultures, styles, and disciplines converge, fostering creative exploration and empowering students to discover their rhythmic identities.Our school is a dynamic hub where rhythm becomes a catalyst for artistic expression, cultural exchange, and personal growth. Here, we embrace the power of fusion, blending diverse rhythmic traditions and pushing the boundaries of innovation. Together, we harmonize the world through the language of rhythm</p>
</Fade>
                </div>
            </div>

        </div>
    );
};

export default PrincipalsTalk;