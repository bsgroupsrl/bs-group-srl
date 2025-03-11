import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaTools, FaCheckCircle, FaClock, FaPhoneAlt } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import HeroBackground from "@/components/HeroBackground";
import { useNavigate } from "react-router-dom";

function Maintenance() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Retrieve the features array from translations
  const features = t("Maintenance.features", { returnObjects: true });

  return (
    <div>
      {/* Hero Section */}
      <HeroBackground
        title={t("Maintenance.heroTitle")}
        subtitle={t("Maintenance.heroSubtitle")}
        image="/src/images/maintenance-bg.webp"
      />

      {/* Service Details */}
      <section className="container mx-auto py-16 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("Maintenance.header")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Image */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/src/images/maintenance.webp"
              alt={t("Maintenance.imageAlt")}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right Section - Service Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700">
              {t("Maintenance.description")}
            </p>

            <ul className="space-y-4">
              {features &&
                features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {index === 0 && <FaCheckCircle className="text-yellow-500 text-2xl mr-3" />}
                    {index === 1 && <FaClock className="text-yellow-500 text-2xl mr-3" />}
                    {index === 2 && <FaTools className="text-yellow-500 text-2xl mr-3" />}
                    {index === 3 && <FaPhoneAlt className="text-yellow-500 text-2xl mr-3" />}
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
            </ul>

            <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition" onClick={()  => navigate("/contact")}>
              {t("Maintenance.button")}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </div>
  );
}

export default Maintenance;
