'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Icon from './Icon';

export default function CartDrawer({ isOpen, onClose }) {
  const router = useRouter();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[250] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[400px] bg-[#f8f9fa] z-[260] shadow-2xl transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 min-[360px]:p-5 bg-white border-b border-gray-100 shrink-0">
          <div>
            <h2 className="font-bold text-gray-900 text-sm min-[360px]:text-lg">Your Selection</h2>
            <p className="text-[10px] min-[360px]:text-xs text-gray-500 mt-0.5">Premium Home Services</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 min-[360px]:p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 active:scale-90 transition-all"
          >
            <Icon name="close" className="text-sm min-[360px]:text-base" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-3 min-[360px]:p-5 space-y-4 min-[360px]:space-y-6">
          
          {/* Added Services Section */}
          <div className="space-y-2 min-[360px]:space-y-3">
            <p className="text-[9px] min-[360px]:text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
              Added Services
            </p>
            
            {/* Item 1 */}
            <div className="bg-white rounded-xl p-3 min-[360px]:p-4 shadow-sm border border-gray-100 flex gap-3 min-[360px]:gap-4">
              <div className="relative w-10 h-10 min-[360px]:w-12 min-[360px]:h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                <Image src="/search_results/res_tap.png" alt="Tap Repair" fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xs min-[360px]:text-sm truncate">Tap & Mixer Repair</h3>
                    <p className="text-gray-500 text-[10px] min-[360px]:text-xs mt-0.5">Standard fixing • 45 mins</p>
                  </div>
                  <span className="font-bold text-gray-900 text-xs min-[360px]:text-sm shrink-0">₹149</span>
                </div>
                
                {/* Quantity Control */}
                <div className="flex items-center gap-2 mt-2">
                  <button className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 active:scale-95">
                    <Icon name="remove" className="text-[10px] min-[360px]:text-xs" />
                  </button>
                  <span className="text-xs min-[360px]:text-sm font-semibold w-3 min-[360px]:w-4 text-center">1</span>
                  <button className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#5952e4] hover:bg-blue-50 active:scale-95">
                    <Icon name="add" className="text-[10px] min-[360px]:text-xs" />
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl p-3 min-[360px]:p-4 shadow-sm border border-gray-100 flex gap-3 min-[360px]:gap-4">
              <div className="relative w-10 h-10 min-[360px]:w-12 min-[360px]:h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                <Image src="/search_results/res_leakage.png" alt="Leakage Repair" fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xs min-[360px]:text-sm truncate">Leakage Repair</h3>
                    <p className="text-gray-500 text-[10px] min-[360px]:text-xs mt-0.5">Premium service • 1 hr</p>
                  </div>
                  <span className="font-bold text-gray-900 text-xs min-[360px]:text-sm shrink-0">₹249</span>
                </div>
                
                {/* Quantity Control */}
                <div className="flex items-center gap-2 mt-2">
                  <button className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 active:scale-95">
                    <Icon name="remove" className="text-[10px] min-[360px]:text-xs" />
                  </button>
                  <span className="text-xs min-[360px]:text-sm font-semibold w-3 min-[360px]:w-4 text-center">1</span>
                  <button className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#5952e4] hover:bg-blue-50 active:scale-95">
                    <Icon name="add" className="text-[10px] min-[360px]:text-xs" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Upsell / Combos Section */}
          <div className="bg-white rounded-xl p-3 min-[360px]:p-5 shadow-sm border border-[#5952e4]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#eef1ff] text-[#5952e4] text-[8px] min-[360px]:text-[10px] font-bold px-2 py-1 min-[360px]:px-3 min-[360px]:py-1.5 rounded-bl-lg">
              Save 15%
            </div>
            
            <div className="flex items-center gap-1.5 min-[360px]:gap-2 mb-2 min-[360px]:mb-3">
              <Icon name="star" className="text-[#5952e4] text-[10px] min-[360px]:text-sm" />
              <h3 className="font-bold text-gray-900 text-xs min-[360px]:text-sm">Combo Packages</h3>
            </div>
            
            <h4 className="font-bold text-gray-800 text-[11px] min-[360px]:text-sm mb-1">Complete Bath Overhaul</h4>
            <p className="text-gray-500 text-[9px] min-[360px]:text-[11px] leading-relaxed mb-3 min-[360px]:mb-4">
              Add basin repair and deep cleaning to your current selection for a comprehensive refresh.
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-400 text-[10px] min-[360px]:text-xs line-through block">₹500</span>
                <span className="text-[#5952e4] font-bold text-sm min-[360px]:text-base block">₹399</span>
              </div>
              <button className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 min-[360px]:px-4 min-[360px]:py-2 rounded-lg text-[10px] min-[360px]:text-xs font-semibold hover:bg-gray-50 active:scale-95 transition-all">
                Add to Cart
              </button>
            </div>
          </div>

        </div>

        {/* Footer (Fixed Bottom) */}
        <div className="bg-white border-t border-gray-100 p-4 min-[360px]:p-5 shrink-0">
          <div className="space-y-1.5 min-[360px]:space-y-2 mb-3 min-[360px]:mb-4">
            <div className="flex justify-between text-[10px] min-[360px]:text-xs text-gray-500">
              <span>Subtotal</span>
              <span>₹398.00</span>
            </div>
            <div className="flex justify-between text-[10px] min-[360px]:text-xs text-gray-500">
              <span>Taxes & Fees</span>
              <span>₹32.00</span>
            </div>
            <div className="flex justify-between text-sm min-[360px]:text-base font-bold text-gray-900 pt-1.5 min-[360px]:pt-2 border-t border-gray-50">
              <span>Total</span>
              <span>₹430.00</span>
            </div>
          </div>
          
          <button 
            onClick={() => { onClose(); router.push('/checkout'); }}
            className="w-full bg-[#5952e4] hover:bg-[#4640c4] active:scale-[0.98] text-white font-bold py-3 min-[360px]:py-3.5 rounded-xl text-xs min-[360px]:text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            Proceed to Checkout
            <Icon name="arrow_forward" className="text-sm min-[360px]:text-base" />
          </button>
          
          <p className="text-center text-[8px] min-[360px]:text-[10px] text-gray-400 mt-2 min-[360px]:mt-3">
            Secure checkout powered by Stripe
          </p>
        </div>

      </div>
    </>
  );
}
