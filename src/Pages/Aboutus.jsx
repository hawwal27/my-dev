import React, { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";

const team = [
  {
    name: "Sarah Kole",
    role: "Lead Architect",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Tang",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Lena Morris",
    role: "Interior Designer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ibrahim Noor",
    role: "Property Specialist",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

const AboutUsSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 2, spacing: 15 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="relative bg-gray-50 py-28 overflow-hidden">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full opacity-10 z-0"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-modern-skyscrapers-in-the-city-33130-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Office"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-100/30 to-transparent rounded-3xl" />
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h2 className="text-5xl font-extrabold text-gray-900 leading-snug mb-6">
              Building Vision. <br />
              Managing Reality.
            </h2>
            <p className="text-gray-700 text-lg mb-5">
              At <span className="text-amber-500 font-semibold">Sabotan</span>,
              we are more than builders — we are creators, curators, and
              custodians of exceptional spaces.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              We blend architectural brilliance with seamless property
              management to create structures that inspire and endure.
            </p>
            <ul className="text-left space-y-3 text-gray-800 font-medium">
              <li>• 12+ years in architecture and housing solutions</li>
              <li>• Eco-conscious and tech-integrated design</li>
              <li>• Trusted by 100+ clients across the country</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-28 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the <span className="text-amber-500">Team</span>
          </h3>
          <p className="text-gray-600 mb-10">
            Passionate experts behind every project we touch.
          </p>

          <div
            ref={sliderRef}
            className="keen-slider px-4 md:px-0 max-w-4xl mx-auto"
          >
            {team.map((member, idx) => (
              <div
                className="keen-slider__slide bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
                key={idx}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-amber-300 object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-amber-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
