import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Error from "./Error/Error";
import Flight from "./Pages/Flight/Flight";
import Home from "./Pages/Home/Home";
import Holiday from "./Pages/Holiday/Holiday";
import Hotel from "./Pages/Hotel/Hotel";
import Umrah from "./Pages/Umrah/Umrah";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
   errorElement:<Error></Error>,
   children:[
    {
        path:'/',
        element:<Home></Home>
      },
    {
        path:'/flight',
        element:<Flight></Flight>
      },
    {
        path:'/holiday',
        element:<Holiday></Holiday>
      },
    {
        path:'/hotel',
        element:<Hotel></Hotel>
      },
    {
        path:'/umrah',
        element:<Umrah></Umrah>
      },
   ]
  },
]);
