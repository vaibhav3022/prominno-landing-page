import { MonitorSmartphone, Code2, Users, Layout, Hexagon, Triangle, Square, Circle } from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const trustChecklist = [
  { icon: MonitorSmartphone, text: 'Custom tailored digital experiences' },
  { icon: Code2, text: 'Clean, scalable, and modern architecture' },
  { icon: Layout, text: 'Pixel-perfect, responsive UI design' },
  { icon: Users, text: 'Dedicated support and collaboration' },
];

export const stats = [
  { label: 'Happy Clients', value: '500+' },
  { label: 'Annual Growth', value: '120%' },
  { label: 'Projects Done', value: '1.2k' },
  { label: 'Positive Ratings', value: '4.9/5' },
];

export const partners = [
  { name: 'Acme Corp', icon: Hexagon },
  { name: 'Global Tech', icon: Triangle },
  { name: 'Design Co', icon: Square },
  { name: 'Future Labs', icon: Circle },
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Mobile Interface Design',
    description: 'Explore the latest trends in mobile UI design and how to create engaging experiences.',
    image: '/assets/blog1_1785161397262.png',
    link: '#'
  },
  {
    id: 2,
    title: 'Collaborative Strategies for Remote Teams',
    description: 'How to maintain high productivity and creativity while working in a distributed team.',
    image: '/assets/blog2_1785161407670.png',
    link: '#'
  },
  {
    id: 3,
    title: 'Data Visualization Best Practices',
    description: 'Turning complex datasets into beautiful, easy-to-understand visual narratives.',
    image: '/assets/blog3_1785161418177.png',
    link: '#'
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Working with Prominno completely transformed our online presence. Their attention to detail and modern aesthetic is unmatched.",
    name: "Sarah Jenkins",
    role: "CMO at TechFlow",
    avatar: "/assets/avatar1_1785161437426.png"
  },
  {
    id: 2,
    quote: "The design system they delivered was exactly what we needed to scale our product across multiple platforms effortlessly.",
    name: "David Chen",
    role: "Lead Engineer at StartupX",
    avatar: "/assets/avatar2_1785161448336.png"
  },
  {
    id: 3,
    quote: "From start to finish, the communication was excellent. They understood our vision and executed it flawlessly.",
    name: "Elena Rodriguez",
    role: "Founder of CreativeStudio",
    avatar: "/assets/avatar3_1785161459933.png"
  },
  {
    id: 4,
    quote: "Prominno is by far the most professional design agency we've ever partnered with. Outstanding results.",
    name: "Marcus Thorne",
    role: "Director of Product",
    avatar: "/assets/avatar4_1785161490519.png"
  }
];

export const faqItems = [
  {
    question: "What is your typical project timeline?",
    answer: "Most landing page projects take between 2-4 weeks from initial kickoff to final deployment, depending on complexity and revision cycles."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes, we offer flexible retainer packages for ongoing design, development, and maintenance support."
  },
  {
    question: "How do you handle revisions?",
    answer: "We include two rounds of revisions in our standard contracts to ensure the final product perfectly aligns with your vision."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We primarily work with React, Next.js, Vite, Tailwind CSS, and Framer Motion for highly interactive web experiences."
  }
];

export const images = {
  hero: '/assets/hero_image_1785161307179.png',
  trustLarge: '/assets/trust_large_1785161318055.png',
  trustSmall1: '/assets/trust_small1_1785161347130.png',
  trustSmall2: '/assets/trust_small2_1785161359397.png',
  statsBg: '/assets/stats_bg_1785161329642.png',
  faq: '/assets/faq_img_1785161370677.png'
};
