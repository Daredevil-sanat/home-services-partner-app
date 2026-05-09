'use client';
import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function AuthModal({ isOpen, onClose, onSuccess }) {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContinue = () => {
    if (phone.trim().length >= 6) {
      onSuccess?.();
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal container — tight padding on tiny screens */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Login or Signup"
        className="fixed inset-0 z-[210] flex items-center justify-center px-3 py-6"
      >
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[400px] mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button — top right, outside content flow */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 active:scale-90"
          >
            <Icon name="close" className="text-base" />
          </button>

          {/* Scrollable content area for very small screens */}
          <div className="max-h-[85vh] overflow-y-auto px-5 py-5 min-[360px]:px-7 min-[360px]:py-7">

            {/* Header — padded away from X button */}
            <div className="mb-4 pr-6">
              <h2 className="text-xl min-[360px]:text-2xl font-bold text-gray-900 mb-1 tracking-tight leading-tight">
                Login or Signup
              </h2>
              {/* Subtitle hidden on very small screens */}
              <p className="hidden min-[360px]:block text-gray-500 text-sm leading-relaxed">
                Enter your details to access professional services tailored for your home.
              </p>
            </div>

            {/* Phone Input Row */}
            <div className="flex items-stretch rounded-xl border border-gray-200 bg-gray-50 overflow-hidden mb-3 focus-within:ring-2 focus-within:ring-[#5952e4]/30 focus-within:border-[#5952e4] transition-all">
              {/* Static India code */}
              <div className="flex items-center px-3 border-r border-gray-200 shrink-0">
                <span className="text-xs font-semibold text-gray-500">+91</span>
              </div>

              {/* Phone Number Field */}
              <input
                id="auth-phone-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleContinue(); }}
                placeholder="Phone Number"
                className="flex-1 min-w-0 bg-transparent px-3 py-3 text-xs min-[360px]:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={phone.trim().length < 6}
              className="w-full bg-[#5952e4] hover:bg-[#4640c4] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 min-[360px]:py-3 rounded-xl text-xs min-[360px]:text-sm transition-all duration-200 active:scale-[0.98] mb-3 min-[360px]:mb-4"
            >
              Continue
            </button>

            {/* OR Divider */}
            <div className="flex items-center gap-3 mb-3 min-[360px]:mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => { onSuccess?.(); onClose(); }}
                className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-semibold py-2 min-[360px]:py-2.5 rounded-xl text-[11px] min-[360px]:text-sm transition-all duration-200 active:scale-[0.98]"
              >
                <svg className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 shrink-0 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="whitespace-nowrap">Continue with Apple</span>
              </button>

              <button
                onClick={() => { onSuccess?.(); onClose(); }}
                className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-semibold py-2 min-[360px]:py-2.5 rounded-xl text-[11px] min-[360px]:text-sm transition-all duration-200 active:scale-[0.98]"
              >
                <svg className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="whitespace-nowrap">Continue with Google</span>
              </button>
            </div>

            {/* Terms */}
            <p className="text-center text-gray-400 text-[10px] mt-4 leading-relaxed">
              By continuing, you agree to our{' '}
              <a href="#" className="text-[#5952e4] hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-[#5952e4] hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
