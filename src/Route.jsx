import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Error from "./Error/Error";
import Home from "./Pages/Home/Home";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader/Loader";

const Flight = lazy(() => import("./Pages/Flight/Flight"));
const Holiday = lazy(() => import("./Pages/Holiday/Holiday"));
const Hotel = lazy(() => import("./Pages/Hotel/Hotel"));
const Umrah = lazy(() => import("./Pages/Umrah/Umrah"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Register = lazy(() => import("./Pages/Register/Register"));

const suspenseWrapper = (Component) => (
  <Suspense fallback={<Loader message="Loading page..." />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flight",
        element: suspenseWrapper(Flight),
      },
      {
        path: "/holiday",
        element: suspenseWrapper(Holiday),
      },
      {
        path: "/hotel",
        element: suspenseWrapper(Hotel),
      },
      {
        path: "/umrah",
        element: suspenseWrapper(Umrah),
      },
      {
        path: "/login",
        element: suspenseWrapper(Login),
      },
      {
        path: "/register",
        element: suspenseWrapper(Register),
      },
    ],
  },
]);
