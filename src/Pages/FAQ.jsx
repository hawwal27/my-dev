import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer architectural design, building construction, and end-to-end property management — all under one brand with personalized attention.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Every project timeline depends on complexity, but our average design-to-delivery duration ranges between 3–9 months with transparent milestones.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Absolutely. We design and manage both luxury homes and commercial developments with equal dedication to aesthetics and function.",
  },
  {
    question: "Can I consult with your team before deciding?",
    answer:
      "Yes — we offer a complimentary discovery call to understagd your vision and explore how we can bring it to life.",
  },
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/70 sm:bg-white/80 backdrop-blur-sm sm:backdrop-blur-md rounded-xl shadow-lg border border-amber-200 cursor-pointer transition-all"
    >
      <div className="flex justify-between items-center px-6 py-5">
        <h4 className="text-lg font-semibold text-gray-900">{faq.question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-amber-500" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 pb-5 text-gray-700"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-amber-50 to-gray-100 overflow-hidden"
    >
      {/* Floating Background Accent */}
      <div className="absolute -top-10 left-5 sm:left-10 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-amber-100 rounded-full blur-xl opacity-20 sm:opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Frequently Asked <span className="text-amber-500">Questions</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-14">
          Everything you need to know before building your dream with us.
        </p>

        {/* Accordion List */}
        <div className="space-y-6 text-left">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
