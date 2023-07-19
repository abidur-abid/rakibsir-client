import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Main Pages/Login";
import Registration from "../Pages/Main Pages/Registration";
import UploadProject from "../Pages/Dashboard Pages/UploadProject";
import UploadBlog from "../Pages/Dashboard Pages/UploadBlog";
import AllUsers from "../Pages/Dashboard Pages/AllUsers";
import Home from "../Pages/Main Pages/Home";
import About from "../Pages/Main Pages/About";
import Skills from "../Pages/Main Pages/Skills";
import Projects from "../Pages/Main Pages/Projects";
import Blogs from "../Pages/Main Pages/Blogs";
import Contact from '../Pages/Main Pages/Contact'
import BlogDetails from "../Components/BlogDetails";
import DashboardHome from "../Pages/Dashboard Pages/DashboardHome";
import Cousers from "../Pages/Main Pages/Cousers";





 // here router must be export for all project 
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/skills',
          element: <Skills></Skills>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/courses',
          element: <Cousers></Cousers>
        },
        {
          path: '/blogs/:id',
          element: <BlogDetails></BlogDetails>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
            path: '/dashboard/dashboardhome',
            element: <DashboardHome></DashboardHome>
        },
        {
            path: '/dashboard/allusers',
            element: <AllUsers></AllUsers>
        },
        {
            path: '/dashboard/uploadblog',
            element: <UploadBlog></UploadBlog>
        },
        {
            path: '/dashboard/uploadproject',
            element: <UploadProject></UploadProject>
        },
      ]
    }
  ]);