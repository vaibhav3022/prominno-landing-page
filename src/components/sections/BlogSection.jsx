import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../constants/data';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ImageWithSkeleton } from '../ui/Skeleton';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function BlogSection() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="blog" className="py-20 lg:py-32 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] mb-6"
          >
            Latest <span className="text-[#F59E0B]">insights</span>
          </motion.h2>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="h-full flex flex-col group cursor-pointer border-[#1E3A5F]">
                <div className="h-56 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0D1B2A]/20 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                  <ImageWithSkeleton 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#F59E0B] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#94A3B8] mb-6 flex-grow line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                  <a href={post.link} className="inline-flex items-center text-[#F59E0B] font-semibold text-sm group-hover:text-[#D97706] transition-colors">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View all articles
          </Button>
        </div>

      </div>
    </section>
  );
}
