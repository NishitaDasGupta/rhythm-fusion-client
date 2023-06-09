import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import google from "../assets/ggg.png"
import {useNavigate } from "react-router-dom";
const SocialLink = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                navigate('/');
            })
            .catch((error) => {
            })
    }
    return (
        <div className="mx-auto">
            <div className="divider">Or</div>
            <button onClick={handleGoogle} className=" btn w-[296px]  bg-[#1ed8f0] hover:bg-[#1bc2d8]"><img className="w-7" src={google} alt="" /> Google</button>
        </div>
    );
};

export default SocialLink;