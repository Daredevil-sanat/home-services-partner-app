import React from 'react';
import Icon from './ui/Icon';

export default function SeamlessExperience() {
  const steps = [
    {
      icon: 'touch_app',
      title: '1. Choose a Service',
      description: 'Select from our curated list of premium home services and pick a convenient time slot.',
    },
    {
      icon: 'verified',
      title: '2. Expert Arrives',
      description: 'A background-verified, highly trained professional arrives at your doorstep equipped for the job.',
    },
    {
      icon: 'task_alt',
      title: '3. Hassle-free Payment',
      description: 'Pay securely online after the service is completed to your satisfaction.',
    }
  ];

  return (
    <section className="bg-white py-10 md:py-20 border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Seamless Experience</h2>
          <p className="text-gray-500 text-sm md:text-base">From booking to completion, designed for your peace of mind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Icon name={step.icon} className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{step.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
