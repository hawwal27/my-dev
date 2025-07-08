import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "Hero", label: "Home" },
    { to: "services", label: "Services" },
    { to: "projects", label: "Projects" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact" },
    { to: "Faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Logo (Clickable) */}
        <Link
          to="Hero"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="text-3xl font-bold tracking-tight text-gray-900 cursor-pointer"
        >
          Sabo<span className="text-amber-500">Tan</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium text-base">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-amber-500 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
          <button className="hidden md:block bg-amber-500 text-white px-5 py-2 rounded-full shadow hover:bg-amber-600 transition">
            View our project
          </button>
        </Link>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-800 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-amber-500 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              <button className="mt-4 bg-amber-500 text-white px-5 py-2 rounded-full shadow hover:bg-amber-600 transition">
                View our project
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
