import plain from '../assets/plane.webp';
import Heading from '../Shared/Heading';
import { IoIosArrowForward } from 'react-icons/io';

const ChepFlights = () => {
    return (
        <div className='mt-20 font lg:px-20 xl:px-32'>
            <Heading title='Search for cheapest flights' des='Search for cheapest flights on popular destination and enjoy your flight.' ></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 ">
      {/* Card 1 */}
      <div className="bg-white shadow-xl p-4 rounded-lg flex justify-between items-center">
        <img className='h-10 w-10' src={plain} alt="" />
        <div>
          <p className="text-lg font-medium">Dhaka - Cox's Bazar</p>
          <p className="text-gray-600">
            From <span className="font-bold">BDT 4,311</span>
          </p>
        </div>
        <IoIosArrowForward className='text-3xl font-bold text-black'/>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-xl p-4 rounded-lg flex justify-between items-center">
      <img className='h-10 w-10' src={plain} alt="" />
        <div>
          <p className="text-lg font-medium">Dhaka - Kolkata</p>
          <p className="text-gray-600">
            From <span className="font-bold">BDT 6,989</span>
          </p>
        </div>
        <IoIosArrowForward className='text-3xl font-bold text-black'/>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-xl p-4 rounded-lg flex justify-between items-center">
      <img className='h-10 w-10' src={plain} alt="" />
        <div>
          <p className="text-lg font-medium">Dhaka - Bangkok</p>
          <p className="text-gray-600">
            From <span className="font-bold">BDT 23,389</span>
          </p>
        </div>
        <IoIosArrowForward className='text-3xl font-bold text-black'/>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-xl p-4 rounded-lg flex justify-between items-center">
      <img className='h-10 w-10' src={plain} alt="" />
        <div>
          <p className="text-lg font-medium">Dhaka - Jessore</p>
          <p className="text-gray-600">
            From <span className="font-bold">BDT 2,645</span>
          </p>
        </div>
        <IoIosArrowForward className='text-3xl font-bold text-black'/>
      </div>

      {/* Card 5 */}
      <div className="bg-white shadow-xl p-4 rounded-lg flex justify-between items-center">
      <img className='h-10 w-10' src={plain} alt="" />
        <div>
          <p className="text-lg font-medium">Dhaka - Chittagong</p>
          <p className="text-gray-600">
            From <span className="font-bold">BDT 3,339</span>
          </p>
        </div>
        <IoIosArrowForward className='text-3xl font-bold text-black'/>
      </div>

      {/* Card 6 */}
      <div className="bg-white shadow-xl p-4 rounded-lg flex justify-between items-center">
      <img className='h-10 w-10' src={plain} alt="" />
        <div>
          <p className="text-lg font-medium">Dhaka - Delhi</p>
          <p className="text-gray-600">
            From <span className="font-bold">BDT 13,618</span>
          </p>
        </div>
        <IoIosArrowForward className='text-3xl font-bold text-black'/>
      </div>

      {/* Card 7 */}
      <div className="bg-white shadow-xl p-4 rounded-lg flex justify-between items-center">
      <img className='h-10 w-10' src={plain} alt="" />
        <div>
          <p className="text-lg font-medium">Dhaka - Madras</p>
          <p className="text-gray-600">
            From <span className="font-bold">BDT 13,618</span>
          </p>
        </div>
        <IoIosArrowForward className='text-3xl font-bold text-black'/>
      </div>

      {/* Card 8 */}
      <div className="bg-white shadow-xl p-4 rounded-lg flex justify-between items-center">
      <img className='h-10 w-10' src={plain} alt="" />
        <div>
          <p className="text-lg font-medium">Dhaka - Kuala Lumpur</p>
          <p className="text-gray-600">
            From <span className="font-bold">BDT 29,790</span>
          </p>
        </div>
        <IoIosArrowForward className='text-3xl font-bold text-black'/>
      </div>
    </div>
            
        </div>
    );
};

export default ChepFlights;