import Image from 'next/image';
import Icon from './Icon';

/**
 * CategoryCard — small card with image, label, and arrow icon.
 * Used in /search page categories grid.
 */
export default function CategoryCard({ src, alt, label }) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-gray-100 flex flex-col h-[120px] md:h-[190px]">
      <div className="relative h-2/3 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-2 md:p-4 flex items-center justify-between mt-auto">
        <span className="font-bold text-gray-900 text-[10px] md:text-base">{label}</span>
        <Icon name="arrow_forward" className="text-gray-400 text-xs md:text-sm group-hover:text-primary transition-colors" />
      </div>
    </div>
  );
}
