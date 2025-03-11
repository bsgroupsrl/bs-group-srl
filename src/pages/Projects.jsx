import { motion } from "framer-motion";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const projectImages = [
  "/src/images/renovation.webp",
  "/src/images/renovation.webp",
  "/src/images/renovation.webp",
  "/src/images/renovation.webp",
];

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <motion.section 
        className="container mx-auto py-16 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">
          {t("Projects.header")}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t("Projects.description")}
        </p>
      </motion.section>

      {/* Swiper Gallery */}
      <motion.div
        className="container mx-auto px-6 py-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Swiper 
          modules={[Navigation, Pagination]} 
          navigation 
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
        >
          {projectImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img 
                src={img} 
                alt={t("Projects.imageAlt", { index: index + 1 })}
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <Statistics />
      <RecentProjects />
      <Testimonials />
    </>
  );
}

export default Projects;
