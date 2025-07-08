import React from "react";
import { Link } from "react-router-dom"; 

const QuoteForm = () => {
  return (
    <section className="relative min-h-screen bg-[#0e0c0a] flex items-center justify-center px-4 py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-amber-700/10 to-transparent blur-2xl opacity-20 pointer-events-none" />

      {/* Form container */}
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-2xl border border-amber-100/20 rounded-3xl shadow-2xl p-10 md:p-16 relative z-10">
        
        {/* Breadcrumb */}
        <div className="text-sm text-amber-300 mb-6">
          <Link to="/" className="hover:underline text-amber-400">Home</Link>
          <span className="mx-2 text-amber-200">/</span>
          <span>Request a Quote</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
          Request a <span className="text-amber-400">Quote</span>
        </h2>
        <p className="text-amber-200 text-center mb-12 max-w-2xl mx-auto text-lg">
          Tell us about your project and we’ll get in touch shortly.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FloatingInput label="Full Name" />
          <FloatingInput label="Email Address" type="email" />
          <FloatingInput label="Phone Number" type="tel" />
          <FloatingInput label="Company Name" />
          <FloatingInput label="Project Location" />

          {/* Dropdown */}
          <div className="relative col-span-1 md:col-span-2">
            <label className="block text-sm text-amber-400 mb-2">Project Type</label>
            <select className="w-full bg-transparent border-b border-amber-400 text-white py-3 focus:outline-none focus:border-amber-500">
              <option className="text-black">-- Select --</option>
              <option className="text-black">Residential Design</option>
              <option className="text-black">Commercial Architecture</option>
              <option className="text-black">Interior / Renovation</option>
              <option className="text-black">Property Management</option>
            </select>
          </div>

          <FloatingInput label="Estimated Timeline" />
          <FloatingInput label="Estimated Budget" />

          {/* Textarea */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm text-amber-400 mb-2">Additional Details</label>
            <textarea
              rows="5"
              className="w-full bg-transparent border-b border-amber-400 text-white placeholder:text-amber-300 focus:outline-none focus:border-amber-500 resize-none py-2"
              placeholder="Tell us more about your vision or requirements..."
            />
          </div>

          {/* Submit */}
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-300">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const FloatingInput = ({ label, type = "text" }) => (
  <div className="relative">
    <input
      type={type}
      required
      placeholder=" "
      className="peer w-full bg-transparent border-b border-amber-400 text-white placeholder-transparent focus:outline-none focus:border-amber-500 py-2"
    />
    <label className="absolute left-0 top-0 text-sm text-amber-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-amber-300 peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-500">
      {label}
    </label>
  </div>
);

export default QuoteForm;
