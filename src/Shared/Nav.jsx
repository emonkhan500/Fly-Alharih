import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  CircleUserRound,
  Hotel,
  House,
  Plane,
  TentTree,
  UserCog,
} from "lucide-react";
import umrahImg from "../assets/umrah.webp";
import logo from "../assets/logo.webp";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md shadow-gray-300 dark:shadow-gray-300">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img className="w-auto h-10" src={logo} alt="" />
            </Link>
          </div>

          {/* this is the hamburger button */}
          {isOpen || (
            // this svg is hamburger icon
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black md:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          {/* visible menu for large devices */}
          <div className="hidden md:flex md:items-center md:justify-center md:space-x-5 lg:space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? "text-blue-500" : "text-black"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/flight"
              className={({ isActive }) =>
                `text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? "text-blue-500" : "text-black"
                }`
              }
            >
              Flight
            </NavLink>

            <NavLink
              to="/hotel"
              className={({ isActive }) =>
                `text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? "text-blue-500" : "text-black"
                }`
              }
            >
              Hotel
            </NavLink>

            <NavLink
              to="/holiday"
              title=""
              className={({ isActive }) =>
                `text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? "text-blue-500" : "text-black"
                }`
              }
            >
              Holiday
            </NavLink>

            <NavLink
              to="/umrah"
              title=""
              className={({ isActive }) =>
                `text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? "text-blue-500" : "text-black"
                }`
              }
            >
              Umrah
            </NavLink>
          </div>

          {/* for mobile devices this will work*/}
          <div
            className={`fixed top-0 left-0 h-screen w-screen bg-white z-40 p-10 transform transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* close button */}
            <div className="flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex p-1 ml-auto text-black transition-all duration-200 border border-black md:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* nav links */}
            <div className="grid items-center justify-between grid-cols-4 gap-2 my-7">
              <NavLink
                to="/"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-200 hover:text-opacity-80 flex flex-col items-center shadow-gray-300 shadow-lg p-2 rounded-md ${
                    isActive ? "text-blue-300" : "text-black"
                  }`
                }
              >
                <House />
                Home
              </NavLink>
              <NavLink
                to="/flight"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-200 hover:text-opacity-80 flex flex-col items-center shadow-gray-300 shadow-lg p-2 rounded-md ${
                    isActive ? "text-blue-300" : "text-black"
                  }`
                }
              >
                <Plane />
                Flight
              </NavLink>

              <NavLink
                to="/hotel"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-200 hover:text-opacity-80 flex flex-col items-center shadow-gray-300 shadow-lg p-2 rounded-md ${
                    isActive ? "text-blue-300" : "text-black"
                  }`
                }
              >
                <Hotel />
                Hotel
              </NavLink>

              <NavLink
                to="/holiday"
                onClick={() => setIsOpen(!isOpen)}
                title=""
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-200 hover:text-opacity-80 flex flex-col items-center shadow-gray-300 shadow-lg p-2 rounded-md ${
                    isActive ? "text-blue-300" : "text-black"
                  }`
                }
              >
                <TentTree />
                Holiday
              </NavLink>

              <NavLink
                to="/umrah"
                onClick={() => setIsOpen(!isOpen)}
                title=""
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-200 hover:text-opacity-80 flex flex-col items-center shadow-gray-300 shadow-lg p-2 rounded-md ${
                    isActive ? "text-blue-300" : "text-black"
                  }`
                }
              >
                <img src={umrahImg} alt="umrah" className="w-6" />
                Umrah
              </NavLink>
            </div>

            <div className="h-[2px] bg-gray-300 mb-5" />

            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col items-center p-2 text-base font-semibold transition-all duration-200 rounded-md shadow-lg hover:text-opacity-80 shadow-gray-300 text-slate-950"
              >
                <CircleUserRound />
                Login
              </Link>
              <Link
                to="/support"
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col items-center p-2 text-base font-semibold transition-all duration-200 rounded-md shadow-lg hover:text-opacity-80 shadow-gray-300 text-slate-950"
              >
                <UserCog />
                Support
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 px-5 py-2 font-bold text-white bg-teal-500 rounded-lg cursor-pointer"
            >
              Login
              <CircleUserRound />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
