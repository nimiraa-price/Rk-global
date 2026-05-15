import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/home/Hero';
import AboutUs from '../sections/home/AboutUs';
import CitizenshipPrograms from '../sections/home/CitizenshipPrograms';
import ResidencePrograms from '../sections/home/ResidencePrograms';
import BusinessMigrationProgramsShowcase from '../sections/home/BusinessMigrationProgramsShowcase';
import NomadVisasShowcase from '../sections/home/NomadVisasShowcase';
import StatsSection from '../sections/home/StatsSection';
import WhyChooseUs from '../sections/home/WhyChooseUs';
import ProcessSection from '../sections/home/ProcessSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import FAQ from '../sections/home/FAQ';
import UnlockGlobalMobility from '../sections/home/UnlockGlobalMobility';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Home = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-gray-50">
      <div className="flex flex-col gap-0">
        <Hero />
        <motion.div {...fadeInUp}>
          <AboutUs />
        </motion.div>
        <motion.div {...fadeInUp}>
          <CitizenshipPrograms />
        </motion.div>
        <motion.div {...fadeInUp}>
          <ResidencePrograms />
        </motion.div>
        <motion.div {...fadeInUp}>
          <BusinessMigrationProgramsShowcase />
        </motion.div>
        <motion.div {...fadeInUp}>
          <NomadVisasShowcase />
        </motion.div>
        {/* <motion.div {...fadeInUp}>
          <StatsSection />
        </motion.div> */}
        <motion.div {...fadeInUp}>
          <WhyChooseUs />
        </motion.div>
        <motion.div {...fadeInUp}>
          <ProcessSection />
        </motion.div>
        <motion.div {...fadeInUp}>
          <TestimonialsSection />
        </motion.div>
        <motion.div {...fadeInUp}>
          <UnlockGlobalMobility />
        </motion.div>
        <motion.div {...fadeInUp}>
          <FAQ />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
