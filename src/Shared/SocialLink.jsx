import google from "../assets/ggg.png"
const SocialLink = () => {
    return (
        <div>
         <div className="divider">Or</div>
                            <button className="btn w-full bg-[#1ed8f0] hover:bg-[#1bc2d8]"><img className="w-7" src={google } alt="" /> Google</button>    
        </div>
    );
};

export default SocialLink;