import HeroBackground from "@/components/HeroBackground";
import CallToAction from "@/components/CallToAction";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import TrustedPartners from "@/components/TrustedPartners";
import Statistics from "@/components/Statistics";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroBackground title="Building the Future, Today" subtitle="High-quality construction services with innovation and excellence." image="/src/images/main-hero-bg.webp" />

      {/* Call to Action */}
      <CallToAction />

      {/* Statistics Section */}
      <Statistics />

      {/* Recent Projects */}
      <RecentProjects />

      {/* Testimonials */}
      <Testimonials />

      {/* Trusted Partners */}
      {/* <TrustedPartners /> */}
    </>
  );
}

export default Home;
