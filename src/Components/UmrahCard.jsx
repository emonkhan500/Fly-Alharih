import image from '../assets/image1.webp';

import { FaStar, FaRegHeart, FaShareAlt } from "react-icons/fa";


const hotels = new Array(16).fill({
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

const UmrahCard = () => {
    return (
        <div className="xl:px-28 mx-auto px-4 py-10 font">
        <div className="breadcrumbs text-sm px-6 mb-4">
  <ul>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Umrah Packages
      </a>
    </li>
    <li>
      <span className="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        View All
      </span>
    </li>
  </ul>
</div>
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
                      <span className="font-bold text-blue-600">Date:</span>{" "}
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
        </div>
      </div>
    );
};

export default UmrahCard;