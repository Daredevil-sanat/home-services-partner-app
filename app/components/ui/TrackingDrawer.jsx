'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Icon from './Icon';

/**
 * TrackingDrawer — slides in from the right to show professional tracking info.
 * Props: isOpen, onClose
 */
export default function TrackingDrawer({ isOpen, onClose }) {
  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const timeline = [
    { status: "Booking Confirmed", time: "8:00 AM", done: true },
    { status: "Professional Assigned", time: "8:15 AM", done: true },
    { status: "On the way", time: "9:45 AM", done: true, active: true },
    { status: "Service Started", time: "", done: false },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[250] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[90vw] max-w-[420px] bg-[#fafafa] z-[260] shadow-2xl transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* ─── Header (Close) ─── */}
        <div className="flex items-center justify-end p-2 min-[360px]:p-4 shrink-0">
          <button
            onClick={onClose}
            className="p-1 min-[360px]:p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 active:scale-90 transition-all"
          >
            <Icon name="close" className="text-base min-[360px]:text-xl" />
          </button>
        </div>

        {/* ─── Scrollable Content ─── */}
        <div className="flex-1 overflow-y-auto px-3 min-[360px]:px-5 pb-4 min-[360px]:pb-6 space-y-4 min-[360px]:space-y-6">

          {/* Professional Profile */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-12 h-12 min-[360px]:w-20 min-[360px]:h-20 rounded-full overflow-hidden ring-2 min-[360px]:ring-3 ring-gray-100 shadow-md mb-2 min-[360px]:mb-3">
              <Image src="https://i.pravatar.cc/200?img=11" alt="David M." fill className="object-cover" />
              {/* Rating badge */}
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 bg-[#5952e4] text-white text-[7px] min-[360px]:text-[9px] font-bold px-1 min-[360px]:px-1.5 py-0 min-[360px]:py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
                ⭐ 4.9
              </div>
            </div>
            <h2 className="font-bold text-sm min-[360px]:text-lg text-gray-900">David M.</h2>
            <p className="text-[9px] min-[360px]:text-xs text-gray-500 mt-0.5">Senior Cleaning Specialist</p>
            <p className="text-[8px] min-[360px]:text-[11px] text-gray-400 mt-0.5 flex items-center gap-1">
              <Icon name="work_outline" className="text-[9px] min-[360px]:text-[11px]" /> 242 jobs completed
            </p>
          </div>

          {/* Call / Message Buttons */}
          <div className="flex gap-2 min-[360px]:gap-3">
            <button className="flex-1 bg-white border border-gray-200 py-1.5 min-[360px]:py-3 rounded-lg min-[360px]:rounded-xl font-medium flex items-center justify-center gap-1.5 min-[360px]:gap-2 hover:bg-gray-50 active:scale-[0.97] transition-all text-[9px] min-[360px]:text-sm text-gray-700">
              <Icon name="phone" className="text-[#5952e4] text-[11px] min-[360px]:text-base" />
              Call
            </button>
            <button className="flex-1 bg-white border border-gray-200 py-1.5 min-[360px]:py-3 rounded-lg min-[360px]:rounded-xl font-medium flex items-center justify-center gap-1.5 min-[360px]:gap-2 hover:bg-gray-50 active:scale-[0.97] transition-all text-[9px] min-[360px]:text-sm text-gray-700">
              <Icon name="chat_bubble_outline" className="text-[#5952e4] text-[11px] min-[360px]:text-base" />
              Message
            </button>
          </div>

          {/* Safety Code */}
          <div className="bg-white rounded-xl min-[360px]:rounded-2xl p-3 min-[360px]:p-5 shadow-sm border border-emerald-100/80">
            <div className="flex items-center justify-between mb-1.5 min-[360px]:mb-2">
              <div className="flex items-center gap-1 min-[360px]:gap-1.5">
                <Icon name="verified_user" className="text-emerald-500 text-[11px] min-[360px]:text-base" />
                <span className="font-bold text-emerald-700 text-[9px] min-[360px]:text-xs uppercase tracking-wide">Safety First</span>
              </div>
              <span className="bg-emerald-50 text-emerald-600 text-[7px] min-[360px]:text-[9px] font-bold px-1.5 min-[360px]:px-2 py-0.5 rounded-full">Background Checked</span>
            </div>
            <p className="text-[8px] min-[360px]:text-xs text-gray-500 mb-2 min-[360px]:mb-3">
              Share this code with David when he arrives to start the service.
            </p>
            <div className="bg-gray-50 border border-gray-100 text-gray-900 text-lg min-[360px]:text-3xl font-mono tracking-[0.3em] min-[360px]:tracking-[0.4em] text-center py-2 min-[360px]:py-4 rounded-lg min-[360px]:rounded-xl font-bold">
              4 8 2 9
            </div>
          </div>

          {/* Job Status Timeline */}
          <div className="bg-white rounded-xl min-[360px]:rounded-2xl p-3 min-[360px]:p-5 shadow-sm">
            <h3 className="font-bold text-xs min-[360px]:text-[15px] text-gray-900 mb-3 min-[360px]:mb-4">Job Status</h3>
            <div className="space-y-0">
              {timeline.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 min-[360px]:gap-3 relative">
                  {/* Vertical line */}
                  {i < timeline.length - 1 && (
                    <div className={`absolute left-[7px] min-[360px]:left-[13px] top-4 min-[360px]:top-6 w-[1.5px] min-[360px]:w-0.5 h-full ${step.done ? 'bg-[#5952e4]' : 'bg-gray-200'}`}></div>
                  )}
                  {/* Dot */}
                  <div className={`w-4 h-4 min-[360px]:w-7 min-[360px]:h-7 rounded-full shrink-0 flex items-center justify-center z-10 ${
                    step.done
                      ? 'bg-[#5952e4] text-white'
                      : 'bg-white border-[1.5px] min-[360px]:border-2 border-gray-200'
                  }`}>
                    {step.done && <Icon name="check" className="text-[8px] min-[360px]:text-xs" />}
                  </div>
                  {/* Content */}
                  <div className={`pb-4 min-[360px]:pb-6 ${i === timeline.length - 1 ? 'pb-0' : ''}`}>
                    <p className={`font-semibold text-[10px] min-[360px]:text-sm ${step.done ? 'text-gray-900' : 'text-gray-400'} leading-tight min-[360px]:leading-normal`}>
                      {step.status}
                    </p>
                    {step.time && (
                      <p className="text-[8px] min-[360px]:text-[11px] text-gray-400 mt-0.5">{step.time}</p>
                    )}
                    {/* Active step — show map preview */}
                    {step.active && (
                      <div className="mt-1.5 min-[360px]:mt-2 bg-emerald-50 rounded-lg p-2 min-[360px]:p-3 border border-emerald-100/60">
                        <p className="text-emerald-700 text-[8px] min-[360px]:text-[11px] font-semibold">On the way</p>
                        <p className="text-[7px] min-[360px]:text-[10px] text-emerald-600/70 mt-0.5">Estimated arrival: ~10 mins</p>
                        <div className="mt-1.5 min-[360px]:mt-2 bg-emerald-100/50 rounded-lg h-12 min-[360px]:h-24 flex items-center justify-center text-emerald-500">
                          <Icon name="map" className="text-lg min-[360px]:text-3xl" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ─── Sticky Footer ─── */}
        <div className="px-3 min-[360px]:px-5 py-2 min-[360px]:py-4 border-t border-gray-100 bg-white shrink-0">
          <button className="w-full bg-white border border-red-200 text-red-500 font-semibold py-2 min-[360px]:py-3 rounded-xl text-[10px] min-[360px]:text-sm hover:bg-red-50 active:scale-[0.97] transition-all">
            Cancel Service
          </button>
        </div>
      </div>
    </>
  );
}
