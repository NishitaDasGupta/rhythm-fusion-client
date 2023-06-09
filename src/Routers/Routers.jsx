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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "manageclasses",
                element:<ManageClasses></ManageClasses>
            },
            {
                path: "manageusers",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "addaclass",
                element: <AddAClass></AddAClass>
            },
            {
                path: "myclasses",
                element: <MyClasses></MyClasses>
            },
            {
                path: "myenrolledclasses",
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: "myselectedclasses",
                element: <MySelectedClasses></MySelectedClasses>
            },



        ]
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>
    }
]);
export default router;