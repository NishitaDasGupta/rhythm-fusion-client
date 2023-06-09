import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import MarqueeText from "../Shared/MarqueeText";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MarqueeText></MarqueeText>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;