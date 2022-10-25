import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../pages/courses/CourDetails/CourseDetails";
import CoursePackage from "../pages/courses/CoursePackage/CoursePackage";
import Courses from "../pages/courses/Courses";
import Home from "../pages/Home/Home";

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
        }
      ]
    }

])