import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTools, FaHammer, FaBuilding, FaClipboardList } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import HeroBackground from "@/components/HeroBackground";
import CallToAction from "@/components/CallToAction";
import TrustedPartners from "../components/TrustedPartners";

const servicesData = [
  {
    icon: <FaBuilding className="text-4xl text-yellow-500" />,
    image: "/src/images/construction.webp",
    link: "/services/construction",
  },
  {
    icon: <FaHammer className="text-4xl text-yellow-500" />,
    image: "/src/images/renovation.webp",
    link: "/services/renovation",
  },
  {
    icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    image: "/src/images/consulting.webp",
    link: "/services/consulting",
  },
  {
    icon: <FaTools className="text-4xl text-yellow-500" />,
    image: "/src/images/maintenance.webp",
    link: "/services/maintenance",
  },
];

function Services() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <HeroBackground image="/src/images/services-bg.webp" />

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("Services.header")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={service.image}
                alt={t(`Services.services.${index}.title`)}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold">
                    {t(`Services.services.${index}.title`)}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">
                  {t(`Services.services.${index}.description`)}
                </p>
                <button
                  className="text-blue-500 mt-4 hover:underline"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  {expanded === index ? t("Services.readLess") : t("Services.readMore")}
                </button>
                {expanded === index && (
                  <motion.div
                    className="mt-4 text-gray-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{t("Services.expandedText")}</p>
                    <Link to={service.link} className="text-yellow-500 font-bold mt-2 block">
                      {t("Services.learnMore")}
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
      {/* <TrustedPartners /> */}
    </div>
  );
}

export default Services;
