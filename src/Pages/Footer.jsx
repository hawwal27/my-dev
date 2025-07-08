import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a120b] text-amber-100 pt-20 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-amber-900 pb-12">
        {/* Logo & Mission */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Sabotan</h2>
          <p className="text-amber-300 leading-relaxed text-sm">
            Shaping the future with bold architecture and seamless property
            management. Where design meets trust.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-amber-200">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Projects</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
            <li className="hover:text-white cursor-pointer transition">FAQ</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact</h3>
          <ul className="space-y-4 text-sm text-amber-200">
            <li className="flex items-start gap-3">
              <MapPin className="text-amber-500 mt-1" />
              <span>23 Marina Drive, Lagos, Nigeria</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-amber-500 mt-1" />
              <span>+234 800 000 1234</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-amber-500 mt-1" />
              <span>hello@sabotandesign.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-400">
            Stay Inspired
          </h3>
          <p className="text-sm text-amber-300 mb-4">
            Get architecture tips and project updates in your inbox.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-amber-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-amber-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 bg-amber-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-amber-600 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
          <span className="font-semibold">Back to Top</span>
        </button>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-amber-400">
        <p>&copy; {new Date().getFullYear()} Sabotan. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Linkedin size={20} />
          </a>
        </div>
        <p className="italic text-amber-300">Built with passion & precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
