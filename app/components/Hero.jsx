import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import Icon from './ui/Icon';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-12 md:pb-24">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Left Column: Content */}
        <div className="flex-1 space-y-4 md:space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
            Premium Housekeeping
          </div>
          
          <h1 className="text-2xl md:text-[48px] leading-tight font-bold text-[#0c1a30] tracking-tight">
            Reliable Housekeeping<br />Services at Your Fingertips
          </h1>
          
          <p className="text-text-secondary text-sm md:text-lg max-w-md leading-relaxed">
            Experience the gold standard of professional cleaning. Verified experts, seamless booking, and a spotless home guaranteed, every single time.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2 md:pt-4">
            <Link href="/search">
              <Button variant="primary" size="lg" className="bg-[#125BCE]">
                Book Service
              </Button>
            </Link>
            <Button variant="secondary" size="lg">
              Shop Materials
            </Button>
          </div>
        </div>

        {/* Right Column: Image & Badge */}
        <div className="flex-1 relative w-full aspect-[4/3] max-h-[400px]">
          {/* Main Image */}
          <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-lg">
             <Image 
               src="/image.png" 
               alt="Modern Couch" 
               fill 
               className="object-cover"
               priority
             />
          </div>

          {/* Floating Verified Badge */}
          <div className="absolute -bottom-6 left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-fade-in-up">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
              <Icon name="verified_user" className="text-green-600 text-xl" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Verified Staff</div>
              <div className="text-xs text-gray-500">100% background checked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
