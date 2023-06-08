import { Link } from "react-router-dom";
import logo from "../assets/music.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <Link to='/'>  <img className="w-9" src={logo} alt="" />
                        <h1 className="text-xl font-bold"><span className="text-3xl">R</span>hythm Fusion Ltd.</h1></Link>
                    <p className="text-xs">Providing reliable tech since 1992</p>
                </div>
                <div className="text-xs">
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Intructors</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className="text-xs">
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="text-xs">
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-[10px]">
                <div>
                    <p>Copyright © 2023 - All right reserved by Rhythm Fusion Ltd.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;