
import Heading from '../Shared/Heading';
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Components/travel.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';


// Images
import london from "../assets/london.webp";
import paris from "../assets/paris.webp";
import newyork from "../assets/new-york.webp";
import goa from "../assets/goa.webp";
import kuala from "../assets/kuala-lumpur.webp";
import thailand from "../assets/thailand.webp";
import bandarban from "../assets/bandarban.webp";
import bangkok from "../assets/bangkok.webp";
import dubai from "../assets/dubai.webp";

const TopTravel = () => {
    return (
        <div className='lg:px-32 pt-10'>
            <Heading
        title="Top Travel Destinations"
        des="Expand your horizons! Explore our curated selection of top destinations across Asia, Europe, America, Australia, and beyond with JekFly."
      ></Heading>

<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-9"
      >
       <SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={london} alt="London" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">London</h2>
      <p className="text-sm text-white">70 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={paris} alt="Paris" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">Paris</h2>
      <p className="text-sm text-white">70 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={newyork} alt="New York" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">New York</h2>
      <p className="text-sm text-white">70 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={goa} alt="Goa" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">Goa</h2>
      <p className="text-sm text-white">70 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={kuala} alt="Kuala Lumpur" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">Kuala Lumpur</h2>
      <p className="text-sm text-white">100 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={thailand} alt="Thailand" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">Thailand</h2>
      <p className="text-sm text-white">70 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={bandarban} alt="Bandarban" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">Bandarban</h2>
      <p className="text-sm text-white">70 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={bangkok} alt="Bangkok" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">Bangkok</h2>
      <p className="text-sm text-white">70 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative overflow-hidden rounded-xl ">
    <img src={dubai} alt="Dubai" className="object-cover h-[380px] w-full" />
    <div className="absolute bottom-4 left-4 z-10 bg-black/60 px-3 py-2 rounded-md">
      <h2 className="text-lg font-semibold text-white">Dubai</h2>
      <p className="text-sm text-white">130 Hotels Available</p>
    </div>
  </div>
</SwiperSlide>

        
      </Swiper>
            
        </div>
    );
};

export default TopTravel;