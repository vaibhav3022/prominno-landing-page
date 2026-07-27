import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function CTABanner() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="contact" className="bg-[#112236] border-y border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
              Ready to build something <span className="text-[#F59E0B]">amazing?</span>
            </h2>
            <p className="text-lg text-[#94A3B8]">
              Let's turn your vision into reality. Reach out today and start the conversation.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Button variant="primary" size="lg" className="group text-lg px-10 py-5">
              Get in touch
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
