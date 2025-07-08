import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  "https://media.istockphoto.com/id/2168342920/photo/two-colleagues-discussing-data-working-and-tablet-laptop-with-architectural-project-at.jpg?s=1024x1024&w=is&k=20&c=9omNOWVA7x3DArdKv-WzTQY88QAmxZbzaxNoLnNz26M=",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  // Cycle through background images every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
          Build Bold. Live Beautiful.
          <br />
          <span className="text-amber-400">
            Architecture & Property Management Redefined
          </span>
        </h1>

        <p className="text-lg md:text-xl mt-6 max-w-3xl drop-shadow text-white/90">
          We design inspiring spaces with precision and passion — from
          cutting-edge architecture to seamless property management. Whether
          it's your dream home or a commercial masterpiece, we bring visions to
          life with craftsmanship, care, and creativity.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="QuoteForm">
            <button className="bg-amber-600 hover:bg-amber-700 px-6 py-3 text-lg font-medium rounded-full shadow">
              Request a Quote
            </button>
          </Link>
          <button className="bg-white/20 hover:bg-white/30 px-6 py-3 text-lg font-medium rounded-full border border-white text-white shadow">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
