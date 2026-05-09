import React from 'react';
import Image from 'next/image';

export default function MostBookedServices() {
  const services = [
    { title: 'Full Home Cleaning', image: '/most_booked_services/Immaculate Cleaning.png' },
    { title: 'Appliance Repair', image: '/most_booked_services/Precision Repair.png' },
    { title: 'Pest Control', image: '/most_booked_services/Landscape Design.png' },
    { title: 'Home Painting', image: '/most_booked_services/Bespoke Concierge.png' },
    { title: 'Spa for Women', image: '/most_booked_services/Spa & Wellness.png' },
    { title: 'Massage for Men', image: '/most_booked_services/Gourmet Dining.png' },
    { title: 'Electricians', image: '/most_booked_services/Private Security.png' },
    { title: 'Plumbers', image: '/most_booked_services/Personal Shopping.png' }
  ];

  return (
    <section className="bg-[#fcf8ff] py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-8">Most booked services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative h-[100px] md:h-[120px] rounded-xl overflow-hidden group cursor-pointer bg-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none"></div>
              
              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 z-20 pointer-events-none">
                <h3 className="text-white text-xs md:text-sm font-semibold leading-tight">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
