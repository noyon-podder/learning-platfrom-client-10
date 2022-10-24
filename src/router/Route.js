import { createBrowserRouter } from "react-router-dom";
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
    }

])