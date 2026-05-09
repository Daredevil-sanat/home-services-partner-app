import React from 'react';
import Icon from './ui/Icon';

export default function Footer() {
  return (
    <footer className="bg-white pt-8 md:pt-16 pb-6 md:pb-8 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-8 mb-8 md:mb-16">
          <div>
            <h4 className="text-[10px] md:text-xs font-bold tracking-wider text-gray-900 uppercase mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Press</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Ethics & Compliance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] md:text-xs font-bold tracking-wider text-gray-900 uppercase mb-3 md:mb-4">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Beauty & Wellness</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Home Repairs</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Cleaning & Pest</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Appliance Repair</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] md:text-xs font-bold tracking-wider text-gray-900 uppercase mb-3 md:mb-4">For Professionals</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Join as a Partner</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Partner Community</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Training Programs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] md:text-xs font-bold tracking-wider text-gray-900 uppercase mb-3 md:mb-4">Support</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors">Safety</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-4">
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
             <button className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 hover:text-gray-900">
               <Icon name="language" className="text-base md:text-lg" />
               India (English)
             </button>
             <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 text-[10px] md:text-xs text-gray-400">
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Sales and Refunds</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Legal</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Site Map</a>
             </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Icon name="share" className="text-lg md:text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Icon name="photo_camera" className="text-lg md:text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Icon name="play_circle" className="text-lg md:text-xl" />
            </a>
          </div>
        </div>

        <div className="mt-6 md:mt-8 text-center md:text-left text-[10px] md:text-xs text-gray-400">
          © 2024 Urban Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
