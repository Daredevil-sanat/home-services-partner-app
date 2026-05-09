'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './ui/Button';
import Icon from './ui/Icon';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white fixed top-0 w-full z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-blue-600 tracking-tight">Urban Partner</div>
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">For Professionals</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#benefits" className="hover:text-blue-600 transition-colors">Benefits</a>
          <a href="#how" className="hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#earnings" className="hover:text-blue-600 transition-colors">Earnings</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Success Stories</a>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => router.push('/register')}
          >
            Become a Partner
          </Button>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="menu" className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}