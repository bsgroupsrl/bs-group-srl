import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const testimonialsData = [
  { id: 1, image: "/src/images/testimonials/john.png" },
  { id: 2, image: "/src/images/testimonials/sarah.png" },
  { id: 3, image: "/src/images/testimonials/michael.png" },
];

function Testimonials() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          {t("Testimonials.header.before")}{" "}
          <span className="text-yellow-500">
            {t("Testimonials.header.highlight")}
          </span>
        </h2>

        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaQuoteLeft className="text-yellow-500 text-3xl absolute top-4 left-4" />
          <p className="text-lg text-gray-700 italic">
            {t(`Testimonials.testimonials.${index}.feedback`)}
          </p>
          <FaQuoteRight className="text-yellow-500 text-3xl absolute bottom-4 right-4" />

          <div className="mt-6">
            <img
              src={testimonialsData[index].image}
              alt={t(`Testimonials.testimonials.${index}.name`)}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-3">
              {t(`Testimonials.testimonials.${index}.name`)}
            </h3>
            <p className="text-gray-500">
              {t(`Testimonials.testimonials.${index}.role`)}
            </p>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
