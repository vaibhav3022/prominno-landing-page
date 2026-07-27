import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../constants/data';
import { useCarousel } from '../../hooks/useCarousel';
import { Card } from '../ui/Card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Testimonials() {
  const { currentIndex, next, prev } = useCarousel(testimonials.length);
  const { ref, controls } = useScrollAnimation();

  // Show 2 items on desktop, 1 on mobile. For simplicity, we'll map through two logical indices
  const getVisibleTestimonials = () => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    const nextIndex = (currentIndex + 1) % testimonials.length;
    return [testimonials[currentIndex], testimonials[nextIndex]];
  };

  return (
    <section className="py-20 lg:py-32 bg-[#112236] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] mb-6">
            Our happy <span className="text-[#F59E0B]">clients</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((testimonial, i) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${i}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <Card hover={false} className="p-8 sm:p-10 h-full flex flex-col bg-[#0D1B2A]/50">
                    <Quote className="w-10 h-10 text-[#F59E0B]/20 mb-6" />
                    <p className="text-lg sm:text-xl text-[#F8FAFC] leading-relaxed mb-8 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#1E3A5F]"
                      />
                      <div className="ml-4">
                        <div className="font-bold text-[#F8FAFC]">{testimonial.name}</div>
                        <div className="text-sm text-[#94A3B8]">{testimonial.role}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#1E3A5F] flex items-center justify-center text-[#F8FAFC] hover:bg-[#F59E0B] hover:text-[#0D1B2A] hover:border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 focus:ring-offset-[#112236]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#1E3A5F] flex items-center justify-center text-[#F8FAFC] hover:bg-[#F59E0B] hover:text-[#0D1B2A] hover:border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 focus:ring-offset-[#112236]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
