// import { useEffect, useState } from "react";

const Gallery = () => {

    return (
        <div className="my-36">
            <h1 className="text-5xl font-bold my-5">Our <span className="text-[#18adc0]">Gallery</span></h1>
            <h5 className="lg:w-3/5 mb-7">Immerse yourself in the captivating world of rhythm fusion at our school gallery, where vibrant displays of movement, culture, and creativity intertwine to ignite the soul and inspire rhythmic expression.</h5>

            <div className="grid grid-cols-6 gap-4">
                <div className=" col-span-1 ">
                    <img className="transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/mom-teaching-girl-play-guitar_23-2148542822.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                    <img className="mt-4 transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/this-is-right-position-happy-music-teacher-helping-motivated-preteen-girl-student-play-violin_662251-1483.jpg?w=740&t=st=1686157504~exp=1686158104~hmac=84d6fbc51e8c47e4a53c8112479e9abd2d4316568c25334563fa0e2475de0268" />

                    <img className="mt-4 transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/low-angle-artists-making-music-home_52683-98057.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                    <img className="mt-2 transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/enjoying-music_1098-18471.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                    <img className="mt-4 transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/group-kids-spending-time-after-school-together-handsome-friends-resting-after-classes-before-start-doing-homework_155003-27017.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                    <img className="mt-4 transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/medium-shot-musicians-working-studio_23-2150265023.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                </div>
                <div className="col-span-3">
                    <img className="transform hover:scale-105 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/little-girl-learning-how-play-guitar_23-2149016003.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                    <img className="mt-4 transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-vector/flat-music-school-classes-education-social-media-cover-template_23-2150041073.jpg?w=900&t=st=1687866550~exp=1687867150~hmac=0a7783da61ca75fe8653ddce46ba67aa50d213a9b73e24fb2b8ff75731c38561" />

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <img className="transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/medium-shot-women-with-piano-violin_23-2149130798.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                        <img className="transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/friends-playing-music-instruments_23-2147624312.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                    </div>
                </div>
                <div className="col-span-2 row-span-1 ">
                     <img className="transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/teaching-how-read-piece-sheet-music-hispanic-kid-learning-play-piano-with-help-male-music-teacher-during-home-lessons_662251-1468.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                    <img className="mt-4 transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/mother-daughter-playing-music-singing_329181-9353.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" />

                    <img className="mt-4 transform hover:scale-110 hover:transition-transform hover:duration-300 hover:border-2 hover:border-[#18adc0]" src="https://img.freepik.com/free-photo/tutor-boy-learning-accoustic-guitar-ukulele_23-2148573997.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=sph" />
                </div>



            </div>
        </div>
    );
};

export default Gallery;