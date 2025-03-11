import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import OurTeam from "@/components/OurTeam";
import Achievements from "@/components/Achievements";
import TrustedPartners from "../components/TrustedPartners";

function About() {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Trans i18nKey="About.header">
            About <span className="text-yellow-500">BS GROUP SRL</span>
          </Trans>
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t("About.description")}
        </motion.p>

        <Achievements />
        <OurTeam />
        {/* <TrustedPartners /> */}
      </div>
    </div>
  );
}

export default About;
