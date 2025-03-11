import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

function HeroBackground({ image = "/src/images/main-hero-bg.jpg" }) {
  const { t } = useTranslation();

  return (
    <div
      className="relative h-screen flex mt-4 items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <motion.div
        className="relative text-center max-w-2xl z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">
          <Trans i18nKey="HeroBackground.title">
            Building the Future, <span className="text-yellow-400">Today</span>
          </Trans>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          {t("HeroBackground.subtitle")}
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            {t("HeroBackground.buttons.viewProjects")}
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            {t("HeroBackground.buttons.getInTouch")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroBackground;
