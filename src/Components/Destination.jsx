import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Components/style.css"; // Your custom styles (optional)

import Heading from "../Shared/Heading";

// Images
import london from "../assets/london.webp";
import paris from "../assets/paris.webp";
import newyork from "../assets/new-york.webp";
import goa from "../assets/goa.webp";
import kuala from "../assets/kuala-lumpur.webp";
import thailand from "../assets/thailand.webp";
import bandarban from "../assets/bandarban.webp";
import bangkok from "../assets/bangkok.webp";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Destination = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  const cities = [
    { name: "London", hotels: "45 Hotels Available", img: london },
    { name: "Paris", hotels: "40 Hotels Available", img: paris },
    { name: "New York", hotels: "50 Hotels Available", img: newyork },
    { name: "Goa", hotels: "40 Hotels Available", img: goa },
    { name: "Kuala Lumpur", hotels: "35 Hotels Available", img: kuala },
    { name: "Thailand", hotels: "60 Hotels Available", img: thailand },
    { name: "Bandarban", hotels: "20 Hotels Available", img: bandarban },
    { name: "Bangkok", hotels: "55 Hotels Available", img: bangkok },
  ];

  return (
    <div className="py-10">
      <Heading
        title="Most popular destinations"
        des="Explore the most popular destinations around the globe with JekFly. Asia, Europe, America, Australia, and more await your exploration."
      />

      <div className="wrapper mt-10">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="carousel__cell relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={city.img}
                  alt={city.name}
                  className="object-cover h-[380px] w-full"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

                {/* Text */}
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h2 className="text-lg font-semibold">{city.name}</h2>
                  <p className="text-sm">{city.hotels}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
