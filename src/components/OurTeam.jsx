import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

const teamMembers = [
  { id: 1, image: "/src/images/team/john.png" },
  { id: 2, image: "/src/images/team/michael.png" },
  { id: 3, image: "/src/images/team/sarah.png" },
  { id: 4, image: "/src/images/team/mohamed.png" },
];

function OurTeam() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          <Trans i18nKey="OurTeam.header">
            Meet Our <span className="text-yellow-500">Team</span>
          </Trans>
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={t(`OurTeam.teamMembers.${index}.name`)}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">
                {t(`OurTeam.teamMembers.${index}.name`)}
              </h3>
              <p className="text-gray-600">
                {t(`OurTeam.teamMembers.${index}.role`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurTeam;
