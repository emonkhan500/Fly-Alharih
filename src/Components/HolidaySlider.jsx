import image from "../assets/cox_bazar_1.webp";
import Slider from "react-slick";
import { FaStar, FaRegHeart, FaShareAlt } from "react-icons/fa";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const hotels = new Array(8).fill({
    name: "Cox’s Bazar - Bangladesh",
    date: "Aug 12-14 (3 Nights & 2 Days)",
    tourType: "Tour Package",
    time: "10.30 AM - Gulistan, Dhaka",
    visitPlace: "Marin Drive, Inani beach, Himchori",
    transportation: "Bus, Air",
    roomType: "AC Room (2 person / room)",
    facilities: "Food, Hotel, Bus",
    oldPrice: "16500",
    discount: "10% OFF",
    countdown: "48D: 11H: 49M: 15S",
    price: "BDT 15000 /person",
   
  });

const HolidaySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          { breakpoint: 1280, settings: { slidesToShow: 3 } },
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
      };
    return (
        <div className="xl:px-28 mx-auto px-4 py-10 font">
        <div className="flex justify-between items-center mb-6 px-4">
          <h2 className="text-3xl font-bold">Holiday packages</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View All</button>
        </div>
        <Slider {...settings}>
          {hotels.map((hotel, index) => (
            <div key={index} className="p-2">
              <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                {/* Image */}
                <div className="relative">
                  <img src={image} alt={hotel.name} className="h-48 w-full object-cover" />
                  {/* Icons */}
                  <div className="absolute top-2 left-2 flex gap-2 text-white text-sm">
                    <div className="bg-black/60 px-2 py-1 rounded flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>4.8</span>
                      <span className="ml-1">30 review</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-3 text-white text-lg">
                    <FaRegHeart className="cursor-pointer " />
                    <FaShareAlt className="cursor-pointer " />
                  </div>
                </div>
  
                {/* Content */}
                <div className="p-4 text-sm flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold text-md mb-1">{hotel.name}</h3>
                    <p>
                      <span className="font-bold">Date:</span>{" "}
                      <span className="text-blue-600">{hotel.date}</span>
                    </p>
                    <p><span className="font-bold">Tour Type:</span> {hotel.tourType}</p>
                    <p><span className="font-bold">Time:</span> {hotel.time}</p>
                    <p><span className="font-bold">Visit Place:</span> {hotel.visitPlace}</p>
                    <p><span className="font-bold">Transportation:</span> {hotel.transportation}</p>
                    <p><span className="font-bold">Room Type:</span> {hotel.roomType}</p>
                    <p><span className="font-bold">Facilities Included:</span> {hotel.facilities}</p>
  
                    {/* Pricing */}
                    <div className="mt-2">
                      <p className="line-through text-gray-400 font-medium">৳{hotel.oldPrice}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-blue-600 font-bold">{hotel.discount}</p>
                        <p className="text-xs text-gray-500">{hotel.countdown}</p>
                      </div>
                      <p><span className="font-bold">Price:</span> {hotel.price}</p>
                    </div>
                  </div>
  
                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button className="w-1/2 bg-blue-100 text-blue-700 font-semibold py-2 rounded hover:bg-blue-200 transition">Details</button>
                    <button className="w-1/2 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Book now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default HolidaySlider;