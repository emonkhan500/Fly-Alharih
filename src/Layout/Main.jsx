import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";
import Banner from "../Shared/Banner";

const Main = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
