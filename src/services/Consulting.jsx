import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaUsers, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import HeroBackground from "@/components/HeroBackground";
import CallToAction from "@/components/CallToAction";
import { useNavigate } from "react-router-dom";

function Consulting() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Retrieve features from translations
  const features = t("Consulting.features", { returnObjects: true });

  // Define icons corresponding to each feature
  const featureIcons = [
    <FaCheckCircle className="text-yellow-500 text-2xl mr-3" />,
    <FaUsers className="text-yellow-500 text-2xl mr-3" />,
    <FaLightbulb className="text-yellow-500 text-2xl mr-3" />,
    <FaBriefcase className="text-yellow-500 text-2xl mr-3" />,
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroBackground
        title={t("Consulting.heroTitle")}
        subtitle={t("Consulting.heroSubtitle")}
        image="/src/images/consulting-bg.webp"
      />

      <section className="container mx-auto py-16 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("Consulting.header")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/src/images/consulting.webp"
              alt={t("Consulting.imageAlt")}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column - Text & Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700">
              {t("Consulting.description")}
            </p>
            <ul className="space-y-4">
              {features &&
                features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {featureIcons[i]}
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
            <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition" onClick={()  => navigate("/contact")}>
              {t("Consulting.button")}
            </button>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}

export default Consulting;
