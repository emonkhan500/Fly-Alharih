import Heading from "../Shared/Heading";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../Components/Explore.css";
import { FreeMode, Pagination } from 'swiper/modules';

import kuakata from "../assets/kuakata.webp";
import sajek from "../assets/sajek.webp";
import coxs from "../assets/coxsbazar.webp";
import chittagong from "../assets/chittagong.webp";
import sylhet from "../assets/sylhet.webp";
import banderban from "../assets/bandarban.webp";
import rangamati from "../assets/rangamati.webp";

const ExploreBD = () => {
  return (
    <div className="bg-gray-100 mt-10 py-10 xl:px-24">
      <Heading
        title="Explore Bangladesh"
        des="Experience Bangladesh’s vibrant culture and stunning landscapes. Explore Cox’s Bazar, Sylhet, Bandarban, Sajek Valley, and Rangamati.

        "
      ></Heading>
      <Swiper
        
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className="mySwiper mt-9"
        modules={[FreeMode, Pagination]}
        breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 2 }, // Mobile (sm)
           
            640: { slidesPerView: 3, spaceBetween: 2 }, // Tablets
            770: { slidesPerView: 4, spaceBetween: 2 }, // Small laptops
            1024: { slidesPerView: 5, spaceBetween: 2 }, // Standard laptops (adjusted)
           
          }}
      >
        <SwiperSlide>
          <div className=" relative overflow-hidden rounded-xl shadow-lg ">
            <img src={kuakata} alt="" className="object-cover h-[380px] w-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-lg font-semibold">Kuakata</h2>
              <p className="text-sm">100 Hotels Available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative overflow-hidden rounded-xl shadow-lg">
            <img src={sylhet} alt="" className="object-cover h-[380px] w-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-lg font-semibold">Sylhet</h2>
              <p className="text-sm">50 Hotels Available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative overflow-hidden rounded-xl shadow-lg">
            <img src={rangamati} alt="" className="object-cover h-[380px] w-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-lg font-semibold">Rangamati</h2>
              <p className="text-sm">70 Hotels Available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative overflow-hidden rounded-xl shadow-lg">
            <img src={coxs} alt="" className="object-cover h-[380px] w-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-lg font-semibold">Cox's Bazar</h2>
              <p className="text-sm">120 Hotels Available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative overflow-hidden rounded-xl shadow-lg">
            <img src={sajek} alt="" className="object-cover h-[380px] w-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-lg font-semibold">Sajek Valley</h2>
              <p className="text-sm">40 Hotels Available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative overflow-hidden rounded-xl shadow-lg">
            <img src={chittagong} alt="" className="object-cover h-[380px] w-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-lg font-semibold">Chittagong</h2>
              <p className="text-sm">30 Hotels Available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative overflow-hidden rounded-xl shadow-lg">
            <img src={banderban} alt="" className="object-cover h-[380px] w-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-lg font-semibold">Bandarban</h2>
              <p className="text-sm">80 Hotels Available</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ExploreBD;

<div className=" relative overflow-hidden rounded-xl shadow-lg">
  <img src="" alt="" className="object-cover h-[380px] w-full" />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

  {/* Text */}
  <div className="absolute bottom-4 left-4 text-white z-10">
    <h2 className="text-lg font-semibold"></h2>
    <p className="text-sm"></p>
  </div>
</div>;
