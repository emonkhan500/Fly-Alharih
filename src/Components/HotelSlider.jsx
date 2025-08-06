
import image from "../assets/image1.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    <div className="xl:px-28 mx-auto px-4 py-8 font shadow-xl">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-3xl font-bold">Hotel Booking</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View All</button>
      </div>
      <Slider {...settings}>
        {hotels.map((hotel, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
              <img src={image} alt="hotel" className="h-48 w-full object-cover rounded-t-lg" />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <p><span className="font-bold text-blue-500">Country:</span> <span className="text-blue-500">{hotel.location}</span></p>
                  <p><span className="font-bold">Hotel Star Rating:</span> {hotel.star}</p>
                  <p><span className="font-bold">Check-In:</span> {hotel.checkIn}</p>
                  <p><span className="font-bold">Check-Out:</span> {hotel.checkOut}</p>
                  <p><span className="font-bold">Features:</span> {hotel.features}</p>
                <div className="flex justify-between">
                <p className="line-through text-gray-400">6000</p>
                  <p className="text-blue-600 font-bold">50% OFF</p>
                </div>
                  <p><span className="font-bold">Price:</span> {hotel.price}</p>
                </div>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded w-full transition">
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
