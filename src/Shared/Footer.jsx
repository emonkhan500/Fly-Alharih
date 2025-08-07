import { CgFacebook } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import logo from "../assets/logo.webp";

import { FaGithub } from "react-icons/fa6";
import { BiLogoMicrosoft } from "react-icons/bi";
import { IoMdTime, IoMdPin, IoMdMail, IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#1f3337] text-gray-300 py-10 px-4 z-10 pt-20">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and description */}
        <div>
          <img className=" w-44 mb-4" src={logo} alt="" />

          <p className="">
            JekFly is a one-stop shop for all your travel needs. Since 2023, We
            offer a wide range of travel services, including flights, hotels,
            holidays, and Visa Processing. We are committed to providing our
            customers with the best possible travel experience.
          </p>
          {/* Social icons */}
          <div className="flex gap-[15px] text-black mt-5 ">
            <a
              href="https://www.facebook.com/profile.php?id=100025282659899"
              className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
            >
              <CgFacebook />
            </a>
            <a
              href="https://github.com/emonkhan500"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
            >
              <FaGithub />
            </a>
            <a
              href="https://emon-khan-portfolio.netlify.app/"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
            >
              <BiLogoMicrosoft />
            </a>
            <a
              href="https://www.linkedin.com/in/emon-khan-247498306/"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">About JekFly</h3>
          <ul className="space-y-2 ">
            <li>About Us</li>
            <li>Our Leaders</li>
            <li>Our Mission, Vision, & Values</li>
            <li>Contact Us
</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 ">
            <li>News & Media</li>
            <li>Promotions</li>
            <li>Blogs</li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 ">
          
          <div className=" space-x-2">
            <div className="flex items-center  gap-3">
              <div>
              <IoMdPin className="mt-1 text-white text-lg" />
              </div>
              <p className="text-sm">Japani Building, House #435/1 4th Floor, Block # D, Road # 1 Signboard, Narayanganj</p>
            </div>
            
          </div>
          <div className=" space-x-2">
            <div className="flex items-start gap-3">
            <IoMdCall className="mt-1 text-white text-lg" />
              <p className="">+8801819 47 50 35
</p>
            </div>
           
          </div>
          <div className=" space-x-2">
            <div className="flex items-start gap-3">
              <IoMdMail className="mt-1 text-white text-lg" />
              <p className="">contact@jekfly.com</p>
            </div>
           
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="  mt-10 border-t border-gray-600 pt-6  text-gray-400   xl:px-64">
        <div className="text-center">© 2025 JekFly. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
