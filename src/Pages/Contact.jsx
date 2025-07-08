import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-amber-100 via-white to-gray-100 py-28 px-6 md:px-12 lg:px-24"
    >
      {/* Background Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-20 blur-2xl"></div>

      <div
        className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start bg-white/90 md:bg-white/30 md:backdrop-blur-lg p-10 md:p-16 rounded-3xl shadow-xl border border-white/40"
        data-aos="fade-up"
      >
        {/* Contact Info */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Let’s Build <span className="text-amber-500">Together</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Whether you’re dreaming of a new build or seeking property
            management that exceeds expectations — we’re just a message away.
          </p>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-center space-x-4">
              <Mail className="text-amber-500" />
              <span>hello@sabotandesign.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-amber-500" />
              <span>+234 800 000 1234</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-amber-500" />
              <span>23 Marina Drive, Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-8">
          <div className="relative">
            <input
              type="text"
              required
              placeholder=" "
              className="w-full bg-white px-5 py-4 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 peer"
            />
            <label className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs">
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              required
              placeholder=" "
              className="w-full bg-white px-5 py-4 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 peer"
            />
            <label className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs">
              Email Address
            </label>
          </div>

          <div className="relative">
            <textarea
              required
              rows="4"
              placeholder=" "
              className="w-full bg-white px-5 py-4 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 peer resize-none"
            ></textarea>
            <label className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-white font-semibold py-3 rounded-xl hover:bg-amber-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
