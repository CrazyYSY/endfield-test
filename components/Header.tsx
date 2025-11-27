import React from 'react';
import { HomeIcon, UserIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-start pointer-events-none">
      
      {/* Left Button - "Return Home" */}
      <a href="/" className="pointer-events-auto group">
        <div 
          className="bg-white h-12 flex items-center pr-8 pl-4 gap-3 text-black transition-transform transform active:scale-95"
          style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}
        >
          <HomeIcon className="w-5 h-5" />
          <div className="flex items-center gap-1 text-sm font-bold tracking-wide border-l border-gray-300 pl-3 h-6">
            <span className="text-gray-400 text-xs mr-1">|</span>
             返回首页 <span className="text-gray-300 text-[10px] ml-1 scale-75 transform origin-left">&lt;</span>
          </div>
        </div>
      </a>

      {/* Right Button - "Login" */}
      <button className="pointer-events-auto group">
        <div 
          className="bg-white h-12 flex items-center pl-8 pr-4 gap-3 text-black transition-transform transform active:scale-95"
          style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <div className="flex items-center gap-2 text-sm font-bold tracking-wide border-r border-gray-300 pr-3 h-6">
             <span className="text-gray-300 text-[10px] mr-1">|</span> 账号登录
          </div>
          <UserIcon className="w-5 h-5" />
        </div>
      </button>

    </header>
  );
};