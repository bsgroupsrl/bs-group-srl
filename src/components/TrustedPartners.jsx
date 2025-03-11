import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const partners = [
  { id: 1, logo: "/images/partners/partner1.png" },
  { id: 2, logo: "/images/partners/partner2.png" },
  { id: 3, logo: "/images/partners/partner3.png" },
  { id: 4, logo: "/images/partners/partner4.png" },
  { id: 5, logo: "/images/partners/partner5.png" },
];

function TrustedPartners() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          {t("TrustedPartners.header.before")}{" "}
          <span className="text-yellow-500">
            {t("TrustedPartners.header.highlight")}
          </span>
        </h2>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="p-4 bg-gray-100 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={partner.logo}
                alt={t(`TrustedPartners.partners.${index}.name`)}
                className="max-w-full max-h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedPartners;
