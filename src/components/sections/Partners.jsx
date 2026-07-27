import React from 'react';
import { motion } from 'framer-motion';
import { partners } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Partners() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 bg-[#112236] border-y border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          <h3 className="text-[#94A3B8] font-semibold tracking-widest uppercase mb-10 text-sm">
            Trusted by innovative companies worldwide
          </h3>
          
          <div className="flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div key={index} className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#F59E0B]" />
                  <span className="text-xl font-bold text-[#F8FAFC] tracking-tight">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
