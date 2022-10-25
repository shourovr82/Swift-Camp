import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import CourseDetails from "../../components/Pages/Courses/Courses/CourseDetails";
import Courses from "../../components/Pages/Courses/Courses/Courses";
import Home from "../../components/Pages/Home/Home";
import SignIn from "../../components/Pages/Login/SignIn";
import SignUp from "../../components/Pages/Login/SignUp";





export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/courses',
        loader: () => fetch('http://localhost:5000/courses'),
        element: <Courses></Courses>
      },
      {
        path: '/login',
        element: <SignIn></SignIn>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/course/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),

        element: <CourseDetails></CourseDetails>
      }
    ]

  }
])