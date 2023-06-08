import { Link } from "react-router-dom";
import logo from "../assets/music.png"
import { BsPersonCircle } from 'react-icons/bs';
const Navbar = () => {
    const navbarItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start z-30">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      {navbarItems}
                    </ul>
                </div>
                {/* Rhythm fusion  LOGO */}
                <img className="w-7" src={logo} alt="" />
                <h1 className="text-xl font-bold"><span className="text-3xl">R</span>hythm Fusion</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navbarItems} </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-[#1ed8f0]  hover:bg-[#1bc2d8]" to='/login'><BsPersonCircle />Login</Link>

            </div>
        </div>
    );
};

export default Navbar;