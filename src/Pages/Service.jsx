import React from "react";
import { Building2, ClipboardList, Wrench, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    description:
      "Elegant, innovative, and timeless structures tailored to your vision. Our team crafts each design with precision and purpose.",
    icon: <Building2 size={32} className="text-amber-500" />,
  },
  {
    title: "Project Management",
    description:
      "We handle your projects from start to finish—efficient timelines, smart budgeting, and total transparency.",
    icon: <ClipboardList size={32} className="text-amber-500" />,
  },
  {
    title: "Maintenance & Upkeep",
    description:
      "Our team ensures your property remains in peak condition year-round, from landscaping to structural care.",
    icon: <Wrench size={32} className="text-amber-500" />,
  },
  {
    title: "Tenant Support",
    description:
      "We offer 24/7 tenant care, conflict resolution, and regular inspections to keep your property hassle-free.",
    icon: <ShieldCheck size={32} className="text-amber-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our <span className="text-amber-500">Services</span>
        </h2>
        <p className="text-gray-600 text-lg mb-14 max-w-3xl mx-auto">
          From stunning design to smart management, we help clients bring their architectural dreams to life—and keep them running beautifully.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
