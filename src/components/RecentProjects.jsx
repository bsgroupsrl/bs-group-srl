import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const projectsData = [
  { id: 1, image: "/src/images/projects/office.webp" },
  { id: 2, image: "/src/images/projects/residential.webp" },
  { id: 3, image: "/src/images/projects/warehouse.webp" },
];

function RecentProjects() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          <Trans i18nKey="RecentProjects.header">
            Our <span className="text-yellow-500">Recent Projects</span>
          </Trans>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={t(`RecentProjects.projects.${index}.title`)}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {t(`RecentProjects.projects.${index}.title`)}
                </h3>
                <p className="text-gray-600 mt-2">
                  {t(`RecentProjects.projects.${index}.description`)}
                </p>
                <Link
                  to="/projects"
                  className="mt-4 inline-block text-yellow-500 font-bold hover:underline"
                >
                  {t("RecentProjects.viewDetails")}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            {t("RecentProjects.viewAllProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
