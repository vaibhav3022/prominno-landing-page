import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustSection } from './components/sections/TrustSection';
import { StatsSection } from './components/sections/StatsSection';
import { Partners } from './components/sections/Partners';
import { BlogSection } from './components/sections/BlogSection';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { CTABanner } from './components/sections/CTABanner';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-[#F8FAFC]">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <StatsSection />
        <Partners />
        <BlogSection />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
