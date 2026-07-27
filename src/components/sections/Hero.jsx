import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ImageWithSkeleton } from '../ui/Skeleton';
import { images } from '../../constants/data';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F8FAFC] tracking-tight leading-[1.1] mb-6">
              Great design is <span className="text-[#F59E0B]">invisible.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#94A3B8] mb-10 leading-relaxed max-w-lg">
              We create seamless digital experiences that empower your business to grow. No friction, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="group">
                Start a project 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View our work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#F59E0B]/10 border border-[#1E3A5F]"
          >
            <ImageWithSkeleton 
              src={images.hero} 
              alt="Digital interface design"
              className="absolute inset-0 w-full h-full"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B2A]/40 to-transparent"></div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[#F59E0B]/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
