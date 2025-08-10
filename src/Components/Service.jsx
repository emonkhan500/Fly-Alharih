import plane from '../assets/plane.webp';
import hotel from '../assets/hotel.webp';
import beach from '../assets/beach.webp';
import umrah from '../assets/umrah.webp';
import Heading from '../Shared/Heading';

const Service = () => {
    return (
        <div className="bg-blue-50 py-12 px-4 text-center">

            <Heading title='Our Services' des='JekFly offers flight booking, hotel reservation, holiday packages, umrah packages, tourist visa, student visa and work visa.'></Heading>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 text-left">
          <img
            src={plane}
            alt="Flight Booking"
            className="w-16 h-16 mb-2 mx-auto"
          />
          <h3 className="text-lg font-semibold text-center dark:text-orange-300">Flight Booking</h3>
          <p className="text-sm text-gray-600  text-center">
            Find air ticket prices in Bangladesh. Book cheap airline tickets online with JekFly - your go-to flight booking website!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 text-left">
          <img
            src={hotel}
            alt="Hotel Booking"
            className="w-16 h-16 mb-2 mx-auto"
          />
         
          <h3 className="text-lg font-semibold text-center dark:text-orange-300">Hotel Booking</h3>
          <p className="text-sm text-gray-600  text-center">
            Book your ideal stay with ease at the top hotel booking platform. Discover the best deals for hotels and flights with JekFly!
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 text-left">
          <img
            src={beach}
            alt="Holiday Packages"
            className="w-16 h-16 mb-2 mx-auto"
          />
          <h3 className="text-lg font-semibold text-center dark:text-orange-300">Holiday Packages</h3>
          <p className="text-sm text-gray-600 text-center">
            Discover the best deals on cheap holiday packages and vacation deals for 2024. Plan your affordable and amazing holiday with JekFly.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 text-left">
          <img
            src={umrah}
            alt="Umrah Packages"
            className="w-16 h-16 mb-2 mx-auto"
          />
          <h3 className="text-lg font-semibold text-center dark:text-orange-300">Umrah Packages</h3>
          <p className="text-sm text-gray-600  text-center">
            Discover cheap Umrah packages in 2024! Book family-friendly and low-cost Umrah tours with JekFly for an unforgettable spiritual journey.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Service;