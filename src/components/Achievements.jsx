import { motion } from "framer-motion";
import { FaTrophy, FaBuilding, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Define the achievements data with icons only.
// The text (title and description) will be retrieved via translation keys.
const achievementsData = [
  {
    id: 1,
    icon: <FaBuilding className="text-yellow-500 text-5xl mx-auto" />,
  },
  {
    id: 2,
    icon: <FaTrophy className="text-yellow-500 text-5xl mx-auto" />,
  },
  {
    id: 3,
    icon: <FaUsers className="text-yellow-500 text-5xl mx-auto" />,
  },
  {
    id: 4,
    icon: <FaProjectDiagram className="text-yellow-500 text-5xl mx-auto" />,
  },
];

function Achievements() {
  const { t } = useTranslation();

  return (
    <section className="py-16 rounded-xl bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          {t("Achievements.header.before")}{" "}
          <span className="text-yellow-500">
            {t("Achievements.header.highlight")}
          </span>
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              {achievement.icon}
              <h3 className="text-2xl font-semibold mt-4">
                {t(`Achievements.achievements.${index}.title`)}
              </h3>
              <p className="text-gray-400 mt-2">
                {t(`Achievements.achievements.${index}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
