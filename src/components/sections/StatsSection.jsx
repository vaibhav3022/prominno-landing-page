import React from 'react';
import { motion } from 'framer-motion';
import { stats, images } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ImageWithSkeleton } from '../ui/Skeleton';

export function StatsSection() {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 lg:py-32 overflow-hidden bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] mb-6">
            Our business strategy has helped many businesses across the globe
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            From emerging startups to established enterprises, we provide the digital foundation necessary to thrive in a competitive landscape.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F59E0B] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[#94A3B8] font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-[#1E3A5F] shadow-2xl"
        >
          <ImageWithSkeleton src={images.statsBg} alt="Business Strategy" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}
