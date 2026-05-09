'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Icon from './Icon';

/**
 * ServiceDetailModal — reusable bottom-sheet style modal for service details.
 * Props: isOpen, onClose, onBook, service { title, price, rating, image, description, included[] }
 */
export default function ServiceDetailModal({ isOpen, onClose, onBook, service }) {
  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal — centered with max width, scrollable */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
        className="fixed inset-0 z-[210] flex items-center justify-center px-3 py-6"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[480px] mx-auto overflow-hidden max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Image */}
          <div className="relative w-full h-28 min-[360px]:h-48 md:h-64 shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 p-2 rounded-full shadow-md active:scale-90 transition-all"
            >
              <Icon name="close" className="text-base" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-3 py-2 min-[360px]:px-6 min-[360px]:py-5">

              {/* Title + Rating */}
              <div className="flex items-start justify-between gap-2 min-[360px]:gap-3 mb-1">
                <h2 className="text-base min-[360px]:text-xl font-bold text-gray-900 leading-tight flex-1">
                  {service.title}
                </h2>
                <div className="flex items-center gap-1 shrink-0 bg-orange-50 px-2 py-1 rounded-lg">
                  <Icon name="star" className="text-orange-400 text-sm" />
                  <span className="text-sm font-bold text-gray-800">{service.rating}</span>
                </div>
              </div>

              {/* Price */}
              <p className="text-[#5952e4] font-bold text-xs min-[360px]:text-base mb-2 min-[360px]:mb-4">
                Starting from {service.price}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-[10px] min-[360px]:text-sm leading-relaxed mb-3 min-[360px]:mb-5">
                {service.description}
              </p>

              {/* What's Included */}
              {service.included?.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-2.5 min-[360px]:p-4 mb-3 min-[360px]:mb-5">
                  <p className="text-[9px] min-[360px]:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 min-[360px]:mb-3">
                    What's Included
                  </p>
                  <ul className="space-y-1.5 min-[360px]:space-y-2">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 min-[360px]:gap-2.5">
                        <Icon name="check" className="text-[#5952e4] text-[10px] min-[360px]:text-[14px] mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-[10px] min-[360px]:text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Customer Reviews Link */}
              <button className="flex items-center gap-1.5 min-[360px]:gap-2.5 text-gray-600 hover:text-[#5952e4] transition-colors mb-1 min-[360px]:mb-2 w-full">
                <Icon name="chat_bubble_outline" className="text-gray-400 text-[14px] min-[360px]:text-base shrink-0" />
                <span className="text-[11px] min-[360px]:text-sm font-medium">Customer Reviews</span>
                <Icon name="chevron_right" className="text-gray-400 text-[14px] min-[360px]:text-base ml-auto shrink-0" />
              </button>

            </div>
          </div>

          {/* Sticky Book Now Button */}
          <div className="px-3 py-2.5 min-[360px]:px-6 min-[360px]:py-4 border-t border-gray-100 bg-white shrink-0">
            <button
              onClick={() => { onBook?.(); onClose(); }}
              className="w-full bg-[#5952e4] hover:bg-[#4640c4] active:scale-[0.98] text-white font-bold py-2 min-[360px]:py-3.5 rounded-xl text-xs min-[360px]:text-base transition-all duration-200 flex items-center justify-center gap-2"
            >
              Add
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
