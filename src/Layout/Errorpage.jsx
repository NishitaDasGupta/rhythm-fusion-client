
import { Link } from "react-router-dom";
import imgError from "../assets/404 error with a tired person.gif"
const Errorpage = () => {
    return (
        <div >
            <img className="mx-auto" src={imgError} alt="" />
          <div className="text-center">
          <Link className="btn bg-[#1ed8f0]  hover:bg-[#1bc2d8]" to='/'>Back to Home</Link>
          </div>
        </div>
    );
};

export default Errorpage;