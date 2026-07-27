import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ImageWithSkeleton } from '../ui/Skeleton';
import { images, trustChecklist } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { CheckCircle2 } from 'lucide-react';

export function TrustSection() {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#112236]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          
          {/* Left: Image Collage */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={controls}
            variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
            className="relative grid grid-cols-2 gap-4 h-[400px] sm:h-[500px] lg:h-[600px] w-full"
          >
            <div className="col-span-1 h-full min-h-0 rounded-2xl overflow-hidden border border-[#1E3A5F]">
              <ImageWithSkeleton src={images.trustLarge} alt="Team collaboration" className="w-full h-full" />
            </div>
            <div className="col-span-1 grid grid-rows-2 gap-4 h-full min-h-0">
              <div className="rounded-2xl overflow-hidden border border-[#1E3A5F] min-h-0 h-full">
                <ImageWithSkeleton src={images.trustSmall1} alt="Design process" className="w-full h-full" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#1E3A5F] min-h-0 h-full">
                <ImageWithSkeleton src={images.trustSmall2} alt="Digital mockup" className="w-full h-full" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content & Checklist */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] mb-6">
              Why our clients <span className="text-[#F59E0B]">trust us</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-[#94A3B8] mb-10 leading-relaxed">
              We don't just build websites; we build digital businesses. Our approach combines strategic thinking with cutting-edge design to deliver experiences that convert visitors into loyal customers.
            </motion.p>

            <div className="space-y-6 mb-10">
              {trustChecklist.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={index} variants={itemVariants} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0D1B2A] border border-[#1E3A5F] flex items-center justify-center text-[#F59E0B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[#F8FAFC] font-medium text-lg">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={itemVariants}>
              <Button variant="primary" size="lg">
                Discover our process
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
