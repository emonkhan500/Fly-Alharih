import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image from "../assets/image1.webp";
import Slider from "react-slick";

const hotels = new Array(8).fill({
  name: "Hotel Sea Uttara",
  location: "cox’s bazar, bangladesh",
  star: "3star Hotel",
  checkIn: "3:00pm (UTS)",
  checkOut: "11:00am (UTS)",
  features: "Double King Bed, Sea View, Air Condition",
  price: "BDT 3000 /room",
});

const HotelSlider = () => {
  const settings = {
    dots: true,
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
    <div className="px-4 py-8 mx-auto shadow-xl xl:px-28 font">
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-3xl font-bold dark:text-black">Hotel Booking</h2>
        <button className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">
          View All
        </button>
      </div>
      <Slider {...settings}>
        {hotels.map((hotel, index) => (
          <div key={index} className="p-2">
            <div className="flex flex-col h-full bg-white dark:text-black rounded-lg shadow-md">
              <img
                src={image}
                alt="hotel"
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <p>
                    <span className="font-bold text-blue-500">Country:</span>{" "}
                    <span className="text-blue-500">{hotel.location}</span>
                  </p>
                  <p>
                    <span className="font-bold">Hotel Star Rating:</span>{" "}
                    {hotel.star}
                  </p>
                  <p>
                    <span className="font-bold">Check-In:</span> {hotel.checkIn}
                  </p>
                  <p>
                    <span className="font-bold">Check-Out:</span>{" "}
                    {hotel.checkOut}
                  </p>
                  <p>
                    <span className="font-bold">Features:</span>{" "}
                    {hotel.features}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-gray-400 line-through">6000</p>
                    <p className="font-bold text-blue-600">50% OFF</p>
                  </div>
                  <p>
                    <span className="font-bold">Price:</span> {hotel.price}
                  </p>
                </div>
                <button className="w-full py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HotelSlider;
