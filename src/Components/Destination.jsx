import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Components/style.css"; // Your custom 3D carousel styles

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

// 3D Carousel logic
const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((el, idx) => {
      el.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
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

  return (
    <div className="py-10">
      <Heading
        title="Most popular destinations"
        des="Explore the most popular destinations around the globe with JekFly. Asia, Europe, America, Australia, and more await your exploration."
      />

      <div className="wrapper mt-10">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            {/* Each slide manually written without map */}
            <div className="carousel__cell relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={london}
                alt="London"
                className="object-cover w-full h-[280px] sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-base sm:text-lg font-semibold">London</h2>
                <p className="text-xs sm:text-sm">45 Hotels Available</p>
              </div>
            </div>

            <div className="carousel__cell relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={paris}
                alt="Paris"
                className="object-cover w-full h-[280px] sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-base sm:text-lg font-semibold">Paris</h2>
                <p className="text-xs sm:text-sm">40 Hotels Available</p>
              </div>
            </div>

            <div className="carousel__cell relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={newyork}
                alt="New York"
                className="object-cover w-full h-[280px] sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-base sm:text-lg font-semibold">New York</h2>
                <p className="text-xs sm:text-sm">50 Hotels Available</p>
              </div>
            </div>

            <div className="carousel__cell relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={goa}
                alt="Goa"
                className="object-cover w-full h-[280px] sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-base sm:text-lg font-semibold">Goa</h2>
                <p className="text-xs sm:text-sm">40 Hotels Available</p>
              </div>
            </div>

            <div className="carousel__cell relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={kuala}
                alt="Kuala Lumpur"
                className="object-cover w-full h-[280px] sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-base sm:text-lg font-semibold">Kuala Lumpur</h2>
                <p className="text-xs sm:text-sm">35 Hotels Available</p>
              </div>
            </div>

            <div className="carousel__cell relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={thailand}
                alt="Thailand"
                className="object-cover w-full h-[280px] sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-base sm:text-lg font-semibold">Thailand</h2>
                <p className="text-xs sm:text-sm">60 Hotels Available</p>
              </div>
            </div>

            <div className="carousel__cell relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={bandarban}
                alt="Bandarban"
                className="object-cover w-full h-[280px] sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-base sm:text-lg font-semibold">Bandarban</h2>
                <p className="text-xs sm:text-sm">20 Hotels Available</p>
              </div>
            </div>

            <div className="carousel__cell relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={bangkok}
                alt="Bangkok"
                className="object-cover w-full h-[280px] sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-base sm:text-lg font-semibold">Bangkok</h2>
                <p className="text-xs sm:text-sm">55 Hotels Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
