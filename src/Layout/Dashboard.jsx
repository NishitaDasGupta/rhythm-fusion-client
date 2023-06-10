import { Link, Outlet } from "react-router-dom";
import logo from "../assets/music.png"
import { SiGoogleclassroom } from 'react-icons/si';
import { FaUsers, FaBookReader, FaHome } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import { AiFillSchedule, AiFillFolderAdd } from 'react-icons/ai';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';

const Dashboard = () => {
  const isAdmin = false;
  const isStudent = false;
  const isInstructor = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-[#1bc2d8]  text-white">
          {/* Rhythm fusion  LOGO */}
          <div className="flex justify-center items-center">
            <img className="w-7" src={logo} alt="" />
            <h1 className="text-xl font-bold"><span className="text-3xl"> R</span>hythm Fusion</h1>
          </div>
          <div className="divider"></div>
          {/* Sidebar content here */}
          {
            isAdmin && <> <li><Link to='/dashboard/manageclasses'><SiGoogleclassroom />Manage Classes</Link></li>
              <li><Link to='/dashboard/manageusers'><FaUsers />Manage Users</Link></li></>
          }
         {
          isInstructor && <> <li><Link to='/dashboard/addaclass'><AiFillFolderAdd />Add A Class</Link></li>
          <li><Link to='/dashboard/myclasses'><AiFillSchedule />My Classes</Link></li></>
         }
         {
         isStudent && <> <li><Link to='/dashboard/myenrolledclasses'><FaBookReader />My Enrolled Classes</Link></li>
          <li><Link to='/dashboard/myselectedclasses'><MdLibraryMusic />My Selected Classes</Link></li></>}

          <div className="divider"></div>
          <li><Link to='/'><FaHome />Home</Link></li>
          <li><Link to='/instructors'><BsFileEarmarkPersonFill />Instructors</Link></li>
          <li><Link to='/classes'><SiGoogleclassroom />Classes</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;