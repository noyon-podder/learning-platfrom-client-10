import { createBrowserRouter } from "react-router-dom";
import Checkout from '../pages/courses/Checkout/Checkout';
import CourseDetails from "../pages/courses/CourDetails/CourseDetails";
import CoursePackage from "../pages/courses/CoursePackage/CoursePackage";
import Courses from "../pages/courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import LoginForm from "../pages/shared/LoginForm/LoginForm";
import RegisterForm from "../pages/shared/RegisterForm/RegisterForm";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,      
    },
    {
      path: '/home',
      element: <Home/>,      
    },
    {
      path: '/courses',
      element: <Courses/>,
      children: [
        {
          path: '/courses',
          element: <CoursePackage/>,
          loader: () => fetch('http://localhost:5000/courses')
        },
        {
          path: '/courses/:id',
          element: <CourseDetails/>,
          loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
      ]
    },
    {
      path: '/course/checkout/:id',
      element: <PrivateRoute><Checkout/></PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      
     },
    {
      path: '/user',
      element: <Login/>,
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
    }

])