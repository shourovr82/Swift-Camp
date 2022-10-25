import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
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
        path: '/login',
        element: <SignIn></SignIn>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      }
    ]

  }
])