import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-100 lg:flex-row">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-lg shadow-md bg-sky-100">
        {/* Left Side Image */}
        <div className="hidden w-1/2 lg:block">
          <img
            src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
            alt="Login"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full p-6 lg:w-1/2 sm:p-10 md:p-14">
          <h1 className="mb-6 text-3xl font-semibold text-center text-gray-800 lg:text-left">
            Login
          </h1>

          <form className="space-y-5">
            {/* Username Field */}
            <div className="relative">
              <label htmlFor="username" className="block mb-1 text-gray-600">
                Username
              </label>
              <Mail
                className="absolute text-gray-400 left-3 bottom-2.5"
                size={20}
              />
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block mb-1 text-gray-600">
                Password
              </label>
              <Lock
                className="absolute text-gray-400 left-3 bottom-2.5"
                size={20}
              />
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="accent-blue-500"
                  required
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember Me
                </label>
              </div>

              {/* Forgot Password */}
              <div className="text-sm text-blue-600 hover:underline">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          {/* Sign Up */}
          <div className="mt-6 text-center text-gray-700">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </div>

          {/* Social Login */}
          <div className="flex flex-col items-center justify-between gap-4 mt-6 sm:flex-row">
            <button className="flex items-center justify-center w-full gap-2 py-2 transition border rounded-md sm:flex-1 hover:bg-gray-200">
              <FcGoogle size={22} />
              <span className="text-sm">Google</span>
            </button>

            <button className="flex items-center justify-center w-full gap-2 py-2 text-blue-600 transition border rounded-md sm:flex-1 hover:bg-gray-200">
              <FaFacebookF size={20} />
              <span className="text-sm">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
