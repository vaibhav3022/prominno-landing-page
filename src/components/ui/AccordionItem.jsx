import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#1E3A5F] last:border-b-0">
      <button 
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-sm"
        onClick={onClick}
      >
        <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-[#F59E0B]' : 'text-[#F8FAFC]'}`}>
          {question}
        </span>
        <span className="flex-shrink-0 ml-4 text-[#F59E0B]">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-[#94A3B8] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
