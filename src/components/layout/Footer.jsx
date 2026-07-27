import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-[#1E3A5F] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-[#F8FAFC] tracking-tight mb-4 inline-block">
              Prominno<span className="text-[#F59E0B]">.</span>
            </a>
            <p className="text-[#94A3B8] max-w-sm mb-6 leading-relaxed">
              Great design is invisible. We build digital experiences that feel completely natural, helping your business grow globally.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">Partners</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">Web Development</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">App Development</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">Brand Strategy</a></li>
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-6">Connect with us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#112236] flex items-center justify-center text-[#94A3B8] hover:bg-[#F59E0B] hover:text-[#0D1B2A] transition-all duration-300">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#112236] flex items-center justify-center text-[#94A3B8] hover:bg-[#F59E0B] hover:text-[#0D1B2A] transition-all duration-300">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#112236] flex items-center justify-center text-[#94A3B8] hover:bg-[#F59E0B] hover:text-[#0D1B2A] transition-all duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#112236] flex items-center justify-center text-[#94A3B8] hover:bg-[#F59E0B] hover:text-[#0D1B2A] transition-all duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E3A5F] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#94A3B8]">
          <p>&copy; {new Date().getFullYear()} Prominno. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F8FAFC] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F8FAFC] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
