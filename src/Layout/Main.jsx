import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";
import Banner from "../Shared/Banner";

const Main = () => {
  const location = useLocation();

  const showBanner =
    location.pathname.includes("umrah") ||
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <>
      <Nav />
      {showBanner || <Banner />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
