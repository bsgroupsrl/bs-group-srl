import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Building, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

function CallToAction() {
  const { t } = useTranslation();

  // Store icons only; text is retrieved via translation keys.
  const servicesData = [
    {
      icon: <Wrench size={40} />,
    },
    {
      icon: <Building size={40} />,
    },
    {
      icon: <Users size={40} />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          {t("CallToAction.header.before")}{" "}
          <span className="text-yellow-500">
            {t("CallToAction.header.highlight")}
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-yellow-500 flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(`CallToAction.services.${index}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`CallToAction.services.${index}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            {t("CallToAction.link")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
