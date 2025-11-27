import React from 'react';
import { BilibiliIcon, WeiboIcon, TapTapIcon, DouyinIcon, XiaohongshuIcon } from './Icons';

export const ResultCard: React.FC = () => {
  return (
    <div className="w-full max-w-5xl bg-white shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
      
      {/* Top Decoration Line */}
      <div className="absolute top-0 right-0 p-6 flex flex-col items-end gap-1 opacity-20">
        <div className="w-12 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-4 h-1 bg-black"></div>
      </div>

      <div className="p-10 md:p-20 flex flex-col items-center text-center">
        
        {/* Main Text */}
        <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight mb-8">
          你没资格啊，你没资格
        </h1>

        {/* Decorative Color Bar */}
        <div className="flex w-32 h-1.5 mb-8">
          <div className="w-1/3 bg-[#D93BE0]"></div> {/* Pink/Purple */}
          <div className="w-1/3 bg-[#F1F41F]"></div> {/* Yellow */}
          <div className="w-1/3 bg-[#00E5C2]"></div> {/* Cyan */}
        </div>

        {/* Subtext */}
        <div className="flex items-center gap-4 text-gray-800 text-lg md:text-xl font-medium tracking-wide mb-24">
          <span className="text-gray-300 text-2xl font-light">|</span>
          <span>正因为如此你没资格啊，你没有资格</span>
          <span className="text-gray-300 text-2xl font-light">|</span>
        </div>

        {/* Footer Area with Socials */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8 mt-auto">
          
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="text-gray-400 font-bold text-lg tracking-wider border-r border-gray-200 pr-6 mr-2">
              关注我们
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6 text-black">
              <a href="#" className="hover:text-[#FB7299] transition-colors"><BilibiliIcon className="w-8 h-8" /></a>
              <a href="#" className="hover:text-[#E6162D] transition-colors"><WeiboIcon className="w-8 h-8" /></a>
              <a href="#" className="hover:text-[#00CCBF] transition-colors"><TapTapIcon className="w-8 h-8" /></a>
              <a href="#" className="hover:text-black transition-colors"><DouyinIcon className="w-7 h-7" /></a>
              <a href="#" className="hover:text-[#FF2442] transition-colors"><XiaohongshuIcon className="w-8 h-8" /></a>
            </div>
          </div>

          <div className="text-right">
             <div className="bg-gray-300 text-white text-[10px] px-1 inline-block mb-1">2025</div>
             <div className="text-gray-500 text-xs tracking-widest font-bold">ARKNIGHTS: ENDFIELD</div>
          </div>

        </div>
      </div>
    </div>
  );
};
