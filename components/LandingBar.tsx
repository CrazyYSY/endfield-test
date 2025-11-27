import React from 'react';
import { Logo } from './Icons';

interface LandingBarProps {
  onQuery: () => void;
}

export const LandingBar: React.FC<LandingBarProps> = ({ onQuery }) => {
  return (
    <div className="w-full bg-white relative z-40 shadow-2xl h-[220px] md:h-[260px] flex flex-col mt-auto">
      
      {/* Top Gradient Line */}
      <div className="w-full h-1.5 flex">
        <div className="flex-[0.4] bg-[#D93BE0]"></div> {/* Pink */}
        <div className="flex-[1.2] bg-[#F1F41F]"></div> {/* Yellow */}
        <div className="flex-[0.4] bg-[#00E5C2]"></div> {/* Cyan */}
      </div>

      <div className="flex-grow flex items-center justify-between px-6 md:px-12 lg:px-20 relative overflow-hidden">
        
        {/* Background "ENDFIELD" Watermark */}
        <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] md:text-[200px] font-black text-transparent stroke-text pointer-events-none select-none opacity-5 leading-none tracking-widest italic"
            style={{ WebkitTextStroke: '2px #E0E0E0' }}
        >
            ENDFIELD
        </div>

        {/* Left: Logo */}
        <div className="relative z-10 w-32 md:w-48 flex-shrink-0">
          <Logo className="w-full text-black" />
          <div className="absolute -right-4 -top-4 w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="absolute -left-4 -bottom-4 w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>

        {/* Center: Typography */}
        <div className="relative z-10 hidden md:flex flex-col items-center justify-center">
            <div className="flex items-center gap-8 mb-2">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-500">2025</span>
                <div className="w-12 h-[2px] bg-gray-300 skew-x-[-45deg]"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-gray-500">// ARKNIGHTS: ENDFIELD</span>
            </div>
            
            <div className="flex items-baseline">
                <h2 className="text-6xl lg:text-8xl font-black text-black tracking-tighter italic mr-4" style={{ fontFamily: '"Noto Sans SC", sans-serif' }}>
                    全面测试
                </h2>
                <div className="relative">
                    <span className="text-sm font-bold absolute -top-4 left-0 bg-black text-white px-1 rounded-sm">III</span>
                    <div className="text-4xl lg:text-6xl font-black text-gray-800 tracking-tight border-2 border-black px-4 py-1 flex items-center gap-2">
                        <span className="text-gray-400 font-light">[</span>
                        资格查询
                        <span className="text-gray-400 font-light">]</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right: Action Button */}
        <div className="relative z-10 w-auto flex-shrink-0 pl-10">
            <button 
                onClick={onQuery}
                className="group relative w-64 h-32 flex items-center justify-center transition-transform active:scale-95 focus:outline-none"
            >
                {/* Yellow Triangle Background */}
                <div className="absolute inset-0 bg-endfield-yellow clip-triangle drop-shadow-xl group-hover:bg-[#E5E910] transition-colors"></div>
                
                {/* Inner Content */}
                <div className="relative z-10 flex flex-col items-center text-black">
                    <div className="text-sm font-bold tracking-[0.3em] mb-1 opacity-60">
                        [ ACCESS CHECK ]
                    </div>
                    <div className="text-4xl font-black tracking-widest border-b-2 border-black pb-1 mb-1">
                        立即查询
                    </div>
                    {/* Decorative bits */}
                    <div className="flex gap-1 mt-1">
                        <div className="w-8 h-1 bg-black"></div>
                        <div className="w-2 h-1 bg-black"></div>
                        <div className="w-2 h-1 bg-black"></div>
                    </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-2 right-12 w-2 h-2 bg-white/50"></div>
                <div className="absolute bottom-2 left-12 w-2 h-2 bg-black/10"></div>
            </button>
        </div>

      </div>
    </div>
  );
};