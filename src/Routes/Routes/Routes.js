import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Blog from "../../components/Pages/Blog/Blog";
import CheckOut from "../../components/Pages/Courses/checkout/CheckOut";
import CourseDetails from "../../components/Pages/Courses/Courses/CourseDetails";
import Courses from "../../components/Pages/Courses/Courses/Courses";
import ErrorPage from "../../components/Pages/errorpage/ErrorPage";
import Faq from "../../components/Pages/Faq/Faq";
import Home from "../../components/Pages/Home/Home";
import SignIn from "../../components/Pages/Login/SignIn";
import SignUp from "../../components/Pages/Login/SignUp";
import Profile from "../../components/Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";





export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: '/checkout/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`),
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      }
    ]

  }
])