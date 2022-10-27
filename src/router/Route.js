import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import Checkout from '../pages/courses/Checkout/Checkout';
import CourseDetails from "../pages/courses/CourDetails/CourseDetails";
import CoursePackage from "../pages/courses/CoursePackage/CoursePackage";
import Courses from "../pages/courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Faq from '../pages/FAQ/Faq';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import LoginForm from "../pages/shared/LoginForm/LoginForm";
import RegisterForm from "../pages/shared/RegisterForm/RegisterForm";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>, 
      errorElement: <ErrorPage/>,

    },
    {
      path: '/home',
      element: <Home/>, 
      errorElement: <ErrorPage/>,     
    },
    {
      path: '/courses',
      element: <Courses/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/courses',
          element: <CoursePackage/>,
          loader: () => fetch('https://madelearn-server.vercel.app/courses')
        },
        {
          path: '/courses/:id',
          element: <CourseDetails/>,
          loader: ({params}) => fetch(`https://madelearn-server.vercel.app/courses/${params.id}`)
        },
      ]
    },
    {
      path: '/course/checkout/:id',
      element: <PrivateRoute><Checkout/></PrivateRoute>,
      loader: ({params}) => fetch(`https://madelearn-server.vercel.app/courses/${params.id}`)
      
     },
    {
      path: '/user',
      element: <Login/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/user/login',
          element: <LoginForm/>
        },
        {
          path: '/user/register',
          element: <RegisterForm/>
        }
      ]
    },
    {
      path: '/blog',
      element: <Blog/>
    },
    {
      path: '/faq',
      element: <Faq/>
    },
    

])