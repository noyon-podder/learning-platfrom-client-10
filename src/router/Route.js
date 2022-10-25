import { createBrowserRouter } from "react-router-dom";
import Courses from "../pages/courses/Courses";
import Home from "../pages/Home/Home";
import CoursePackage from "../pages/shared/CoursePackage/CoursePackage";

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
        }
      ]
    }

])