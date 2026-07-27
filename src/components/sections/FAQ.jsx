import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { faqItems, images } from '../../constants/data';
import { AccordionItem } from '../ui/AccordionItem';
import { ImageWithSkeleton } from '../ui/Skeleton';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
            className="sticky top-32 rounded-2xl overflow-hidden border border-[#1E3A5F] h-[400px] lg:h-[600px] w-full"
          >
            <ImageWithSkeleton src={images.faq} alt="FAQ Abstract" className="w-full h-full" />
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={controls}
            variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } } }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] mb-10">
              Frequently asked <span className="text-[#F59E0B]">questions</span>
            </h2>
            
            <div className="border-t border-[#1E3A5F]">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
