import React from 'react';
import Icon from './ui/Icon';

export default function DifferenceSection() {
  const points = [
    {
      icon: 'shield',
      title: '100% Secure & Trusted',
      description: 'Every booking is protected by our comprehensive insurance guarantee and secure payment system.',
    },
    {
      icon: 'military_tech',
      title: 'Vetted Professionals',
      description: 'We run rigorous background checks and continuous training for all our service partners.',
    },
    {
      icon: 'workspace_premium',
      title: 'Luxury Quality Standards',
      description: 'Experience boutique-level service quality in the comfort of your own home, every single time.',
    }
  ];

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">The Urban Company Difference</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Icon name={point.icon} className="text-xl md:text-2xl text-gray-700" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{point.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
