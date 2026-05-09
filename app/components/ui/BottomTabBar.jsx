'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';

const tabs = [
  { href: '/user-dashboard', icon: 'home', activeIcon: 'home', label: 'Home' },
  { href: '#', icon: 'account_balance_wallet', activeIcon: 'account_balance_wallet', label: 'Payments' },
  { href: '#', icon: 'settings', activeIcon: 'settings', label: 'Settings' },
  { href: '#', icon: 'person_outline', activeIcon: 'person', label: 'Profile' },
];

/**
 * BottomTabBar — fixed mobile navigation for dashboard pages.
 * Visible only below `md` breakpoint.
 */
export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      {/* Frosted glass background */}
      <div className="bg-white/80 backdrop-blur-xl border-t border-gray-200/60 px-2 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around h-14 min-[360px]:h-16 max-w-md mx-auto">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-0.5 min-[360px]:gap-1 flex-1 py-1 transition-colors duration-200 ${
                  isActive ? 'text-[#5952e4]' : 'text-gray-400'
                }`}
              >
                <div className={`relative flex items-center justify-center w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-[#eef0ff]' : ''
                }`}>
                  <Icon
                    name={isActive ? tab.activeIcon : tab.icon}
                    className={`text-lg min-[360px]:text-xl transition-all duration-200 ${
                      isActive ? 'text-[#5952e4]' : 'text-gray-400'
                    }`}
                  />
                </div>
                <span className={`text-[9px] min-[360px]:text-[10px] font-medium leading-none hidden min-[300px]:block ${
                  isActive ? 'text-[#5952e4]' : 'text-gray-400'
                }`}>
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
