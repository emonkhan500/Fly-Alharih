import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/cox_bazar_1.webp";
import Slider from "react-slick";
import { FaStar, FaRegHeart, FaShareAlt } from "react-icons/fa";

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
    <div className="px-4 py-10 mx-auto xl:px-28 font">
      <div className="flex items-center justify-between px-4 mb-6">
        <h2 className="text-3xl font-bold">Holiday packages</h2>
        <button className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">
          View All
        </button>
      </div>
      <Slider {...settings}>
        {hotels.map((hotel, index) => (
          <div key={index} className="p-2">
            <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md">
              {/* Image */}
              <div className="relative">
                <img
                  src={image}
                  alt={hotel.name}
                  className="object-cover w-full h-48"
                />
                {/* Icons */}
                <div className="absolute flex gap-2 text-sm text-white top-2 left-2">
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-black/60">
                    <FaStar className="text-yellow-400" />
                    <span>4.8</span>
                    <span className="ml-1">30 review</span>
                  </div>
                </div>
                <div className="absolute flex gap-3 text-lg text-white top-2 right-2">
                  <FaRegHeart className="cursor-pointer " />
                  <FaShareAlt className="cursor-pointer " />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between h-full p-4 text-sm">
                <div>
                  <h3 className="mb-1 font-semibold text-md">{hotel.name}</h3>
                  <p>
                    <span className="font-bold">Date:</span>{" "}
                    <span className="text-blue-600">{hotel.date}</span>
                  </p>
                  <p>
                    <span className="font-bold">Tour Type:</span>{" "}
                    {hotel.tourType}
                  </p>
                  <p>
                    <span className="font-bold">Time:</span> {hotel.time}
                  </p>
                  <p>
                    <span className="font-bold">Visit Place:</span>{" "}
                    {hotel.visitPlace}
                  </p>
                  <p>
                    <span className="font-bold">Transportation:</span>{" "}
                    {hotel.transportation}
                  </p>
                  <p>
                    <span className="font-bold">Room Type:</span>{" "}
                    {hotel.roomType}
                  </p>
                  <p>
                    <span className="font-bold">Facilities Included:</span>{" "}
                    {hotel.facilities}
                  </p>

                  {/* Pricing */}
                  <div className="mt-2">
                    <p className="font-medium text-gray-400 line-through">
                      ৳{hotel.oldPrice}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-blue-600">
                        {hotel.discount}
                      </p>
                      <p className="text-xs text-gray-500">{hotel.countdown}</p>
                    </div>
                    <p>
                      <span className="font-bold">Price:</span> {hotel.price}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="w-1/2 py-2 font-semibold text-blue-700 transition bg-blue-100 rounded hover:bg-blue-200">
                    Details
                  </button>
                  <button className="w-1/2 py-2 font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700">
                    Book now
                  </button>
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
