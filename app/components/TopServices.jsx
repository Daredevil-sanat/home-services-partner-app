import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './ui/Icon';

export default function TopServices() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className="flex items-end justify-between mb-4 md:mb-8 gap-4">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Top Services</h2>
          <p className="text-gray-500 text-xs md:text-sm">Curated experts for your everyday needs</p>
        </div>
        <Link href="/search" className="text-primary text-xs md:text-sm font-semibold hover:underline flex items-center gap-1 whitespace-nowrap shrink-0 pb-1">
          See all <Icon name="arrow_forward" className="text-sm md:text-base" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Deep Home Cleaning (Spans 2 columns) */}
        <div className="md:col-span-2 relative h-[180px] md:h-[240px] rounded-2xl overflow-hidden group cursor-pointer">
          <Image 
            src="/top_services/Home Cleaning.png" 
            alt="Deep Home Cleaning" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
            <div className="bg-white/20 backdrop-blur-md text-white text-[9px] md:text-[10px] uppercase font-bold px-2 py-1 rounded-sm mb-1 md:mb-2 w-max">Bestseller</div>
            <h3 className="text-white text-lg md:text-xl font-bold mb-1">Deep Home Cleaning</h3>
            <p className="text-gray-200 text-xs md:text-sm">Intensive cleaning for every corner</p>
          </div>
        </div>

        {/* Salon for Women (Spans 1 column) */}
        <div className="relative h-[180px] md:h-[240px] rounded-2xl overflow-hidden group cursor-pointer bg-[#1A111A]">
          <Image 
            src="/top_services/Salon at Home.png" 
            alt="Salon for Women" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
            <h3 className="text-white text-lg md:text-xl font-bold mb-1">Salon for Women</h3>
            <p className="text-gray-300 text-xs md:text-sm">Premium beauty services at home</p>
          </div>
        </div>

        {/* AC Service & Repair (Spans 1 column) */}
        <div className="relative h-[180px] md:h-[240px] rounded-2xl overflow-hidden group cursor-pointer">
          <Image 
            src="/top_services/AC Repair.png" 
            alt="AC Service & Repair" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-[8px] md:text-[10px] text-center leading-tight mb-2 transform -rotate-12 border-2 border-white">SAVE<br/>MORE</div>
            <h3 className="text-white text-lg md:text-xl font-bold mb-1">AC Service & Repair</h3>
            <p className="text-gray-200 text-xs md:text-sm">Expert cooling solutions</p>
          </div>
        </div>

        {/* Men's Grooming (Spans 2 columns) */}
        <div className="md:col-span-2 relative min-h-[200px] md:min-h-[240px] rounded-2xl overflow-hidden group cursor-pointer bg-white border border-gray-200 flex flex-col md:flex-row items-stretch">
          {/* Image */}
          <div className="relative h-40 md:h-auto w-full md:w-1/2 overflow-hidden">
             <Image 
               src="/top_services/Men's Grooming.png" 
               alt="Men's Grooming" 
               fill 
               className="object-cover transition-transform duration-500 group-hover:scale-105"
             />
          </div>
          {/* Text */}
          <div className="relative z-10 p-4 md:p-8 w-full md:w-1/2 bg-white flex flex-col justify-center">
            <h3 className="text-gray-900 text-xl md:text-2xl font-bold mb-2 md:mb-3 tracking-tight">Men's Grooming</h3>
            <p className="text-gray-500 text-[13px] md:text-[15px] mb-4 md:mb-6 leading-relaxed">Precision haircuts, beard styling, and relaxing massages from top-rated professionals.</p>
            <a href="#" className="text-primary text-xs md:text-sm font-semibold hover:underline flex items-center gap-1 mt-auto md:mt-0">
              Book now <Icon name="arrow_forward" className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
