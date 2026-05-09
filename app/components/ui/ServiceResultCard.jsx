import Image from 'next/image';
import Icon from './Icon';

/**
 * ServiceResultCard — responsive service listing card.
 * Below 300px: full-width image stacked on top, time hidden.
 * Above 300px: thumbnail side-by-side with details.
 * Price + Book Now always on a full-width bottom row.
 */
export default function ServiceResultCard({ title, rating, reviews, time, price, image, onClick }) {
  return (
    <div
      className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >

      {/* Card Body — stacks vertically below 300px, side-by-side above */}
      <div className="flex flex-col min-[300px]:flex-row min-[300px]:gap-3 min-[300px]:p-3 md:gap-5 md:p-5">

        {/* Image: full-width on tiny, thumbnail on 300px+ */}
        <div className="relative w-full h-36 min-[300px]:w-[80px] min-[300px]:h-[80px] md:w-[140px] md:h-[120px] min-[300px]:rounded-lg md:rounded-xl overflow-hidden shrink-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col min-w-0 px-3 pt-2 pb-0 min-[300px]:px-0 min-[300px]:pt-0">
          <h2 className="text-sm md:text-lg font-bold text-gray-900 leading-tight mb-1">{title}</h2>

          <div className="flex items-center gap-1 md:gap-2 mb-1">
            <div className="flex items-center gap-0.5 text-xs font-bold text-gray-800">
              <Icon name="star" className="text-orange-400 text-xs" /> {rating}
            </div>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-gray-500 text-xs">{reviews}</span>
          </div>

          {/* Time — hidden below 300px */}
          <div className="hidden min-[300px]:flex items-center gap-1 text-gray-500 text-xs">
            <Icon name="schedule" className="text-xs" /> Takes {time}
          </div>
        </div>

        {/* Favorite — desktop only */}
        <button className="text-gray-300 hover:text-red-500 transition-colors hidden md:block shrink-0 self-start">
          <Icon name="favorite_border" />
        </button>
      </div>

      {/* Bottom Row: Price + Book Now — always full width */}
      <div className="flex items-center justify-between px-3 py-2.5 min-[300px]:mx-3 min-[300px]:px-0 md:mx-5 border-t border-gray-100">
        <div>
          <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Starting From</div>
          <div className="text-lg md:text-xl font-bold text-gray-900">{price}</div>
        </div>
        <button className="bg-[#5952e4] hover:bg-[#4640c4] active:scale-95 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shrink-0">
          Book Now
        </button>
      </div>

    </div>
  );
}
