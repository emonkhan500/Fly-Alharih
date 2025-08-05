import biman from '../assets/Airline1.webp'
import us from '../assets/us.webp'
import emi from '../assets/Emi.webp'
import hima from '../assets/hima.webp'
import mala from '../assets/mala.webp'
import singa from '../assets/singa.webp'
import turkish from '../assets/turkish.webp'
import visa from '../assets/visa.webp'
import novo from '../assets/novo.webp'
import { IoIosArrowForward } from "react-icons/io";

import Heading from '../Shared/Heading';

const Airlines = () => {
    return (
        <div className='bg-gray-100 mt-20'>
            <div className='py-10'>
            <Heading title='Top Airlines' des="JekFly's user-friendly platform connects you to top airlines instantly. Enjoy a comfortable and hassle-free journey on any destination."></Heading>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-10 lg:px-44 mt-8'>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={biman} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>Biman Airlines</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={us} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>US-Bangla Airlines</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={emi} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>Emirates</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={hima} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>Himalaya Airlines</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={mala} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>Malaysia Airlines</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={singa} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>Singapore Airlines</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={turkish} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>Turkish Airlines</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={visa} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>Vistara</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>
                {/* card */}
                <div  className=' bg-white  rounded-2xl shadow-md'>
                    <div  className='flex gap-4 justify-between md:justify-center lg:justify-between items-center px-3 lg:px-10 lg:py-4'>
                    <img className='w-14 h-14 ' src={novo} alt="" />
                    <h1 className='text-lg lg:text-xl lg:font-medium py-3'>NOVOAIR</h1>
                    <IoIosArrowForward className='text-3xl font-bold '/>
                    </div>
                    </div>

                
            </div>
            
            </div>
        </div>
    );
};

export default Airlines;