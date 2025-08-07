import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-100 md:px-0">
      <div className="flex flex-row-reverse items-center justify-center bg-sky-100 md:max-h-[680px] md:max-w-[880px] md:mx-auto overflow-hidden rounded-lg">
        {/* Left Side Image */}
        <div className="hidden w-1/2 h-screen lg:block">
          <img
            src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
            alt="Register"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full p-5 lg:w-1/2 lg:p-12">
          <h1 className="mb-6 text-3xl font-semibold text-gray-800">
            Register
          </h1>

          <form className="space-y-5">
            {/* First Name and Last Name */}
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative w-full">
                <label htmlFor="firstName" className="block mb-1 text-gray-600">
                  First Name
                </label>
                <User
                  className="absolute text-gray-400 left-3 bottom-2.5"
                  size={20}
                />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  autoComplete="off"
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>

              <div className="relative w-full">
                <label htmlFor="lastName" className="block mb-1 text-gray-600">
                  Last Name
                </label>
                <User
                  className="absolute text-gray-400 left-3 bottom-2.5"
                  size={20}
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  autoComplete="off"
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block mb-1 text-gray-600">
                Email
              </label>
              <Mail
                className="absolute text-gray-400 left-3 bottom-2"
                size={20}
              />
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Mobile Number with Country Code */}
            <div>
              <label htmlFor="mobile" className="block mb-1 text-gray-600">
                Mobile Number
              </label>
              <div className="flex">
                {/* Country Code Dropdown */}
                <select
                  name="countryCode"
                  className="px-3 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="+1">+1 (US)</option>
                  <option value="+91">+91 (IN)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (AU)</option>
                  <option value="+880">+880 (BD)</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full py-2 pl-4 pr-4 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500"
                  placeholder="1234567890"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block mb-1 text-gray-600">
                Password
              </label>
              <Lock
                className="absolute text-gray-400 left-3 bottom-3"
                size={20}
              />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block mb-1 text-gray-600"
              >
                Confirm Password
              </label>
              <Lock
                className="absolute text-gray-400 left-3 bottom-3"
                size={20}
              />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>

          {/* Already have an account */}
          <div className="mt-6 text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
