import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Instructors from "../Pages/Home/Instructors/Instructors";
import Classes from "../Pages/Home/Classes/Classes";
import Login from "../Pages/SigninUp/Login";
import Register from "../Pages/SigninUp/Register";
import Errorpage from "../Layout/Errorpage";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../Pages/Dashboard/Admins/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admins/MAnageUsers";
import AddAClass from "../Pages/Dashboard/Instructors/AddAClass";
import MyClasses from "../Pages/Dashboard/Instructors/MyClasses";
import MyEnrolledClasses from "../Pages/Dashboard/Students/MyEnrolledClasses";
import MySelectedClasses from "../Pages/Dashboard/Students/MySelectedClasses";
import PrivateRoute from "./PrivateRoute";
import ClassUpdate from "../Pages/Dashboard/Instructors/ClassUpdate";
import FeedbackUpdate from "../Pages/Dashboard/Admins/FeedbackUpdate";
import AdminPrivate from "./AdminPrivate";
import InstructorPrivate from "./InstructorPrivate";
import StudentPrivate from "./StudentPrivate";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "classes",
                element: <Classes></Classes>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },



        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "manageclasses",
                element: <AdminPrivate><ManageClasses></ManageClasses></AdminPrivate>
            },
            {
                path: "manageusers",
                element: <AdminPrivate><ManageUsers></ManageUsers></AdminPrivate>
            },
            {
                path: "addaclass",
                element: <InstructorPrivate><AddAClass></AddAClass></InstructorPrivate>
            },
            {
                path: "myclasses",
                element: <InstructorPrivate><MyClasses></MyClasses></InstructorPrivate>
            },
            {
                path: "updateclass/:id",
                element: <ClassUpdate></ClassUpdate>,
                loader: ({ params }) => fetch(`https://rhythm-fusion-server.vercel.app/findmyoneclass/${params.id}`)
            },
            {
                path: "updatefeedback/:id",
                element: <FeedbackUpdate></FeedbackUpdate>,
                loader: ({ params }) => fetch(`https://rhythm-fusion-server.vercel.app/findmyoneclass/${params.id}`)
            },
            {
                path: "myenrolledclasses",
                element: <StudentPrivate><MyEnrolledClasses></MyEnrolledClasses></StudentPrivate>
            },
            {
                path: "myselectedclasses",
                element: <StudentPrivate><MySelectedClasses></MySelectedClasses></StudentPrivate>
            },



        ]
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>
    }
]);
export default router;