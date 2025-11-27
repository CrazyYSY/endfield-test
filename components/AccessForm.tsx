import React, { useEffect, useState } from 'react';

interface AccessFormProps {
  onCheck: () => void;
  onClose: () => void;
}

export const AccessForm: React.FC<AccessFormProps> = ({ onCheck, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className={`bg-white max-w-lg w-full relative z-10 shadow-2xl border-l-8 border-endfield-yellow transform transition-all duration-500 ease-out ${mounted ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}>
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M18 6L6 18M6 6l12 12" />
            </svg>
        </button>

        <div className="p-10">
            <h2 className="text-3xl font-black mb-1 text-gray-900 font-sans tracking-wide leading-none flex items-center gap-2">
                <div className="w-3 h-8 bg-black"></div>
                技术测试资格查询
            </h2>
            <span className="block text-xs font-bold text-gray-400 mb-8 ml-5 uppercase tracking-[0.2em] font-mono">Technical Test Access Check</span>

            <div className="space-y-6">
                <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">
                    手机号 / Phone Number
                </label>
                <div className="relative group">
                    <input 
                    type="text" 
                    className="w-full bg-[#F5F5F5] border border-transparent focus:bg-white focus:border-black outline-none h-14 px-4 text-lg transition-all font-bold tracking-wide placeholder:font-normal placeholder:text-gray-400"
                    placeholder="请输入手机号"
                    />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-300 group-focus-within:bg-endfield-yellow transition-colors"></div>
                </div>
                </div>

                <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">
                    验证码 / Captcha
                </label>
                <div className="flex gap-2 group">
                    <div className="relative flex-grow">
                    <input 
                        type="text" 
                        className="w-full bg-[#F5F5F5] border border-transparent focus:bg-white focus:border-black outline-none h-14 px-4 text-lg transition-all font-bold tracking-wide placeholder:font-normal placeholder:text-gray-400"
                        placeholder="请输入验证码"
                    />
                    </div>
                    <button className="h-14 px-6 bg-gray-200 text-gray-600 font-bold whitespace-nowrap hover:bg-black hover:text-white transition-colors uppercase text-sm tracking-wider">
                    获取验证码
                    </button>
                </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                <input type="checkbox" id="terms" className="w-5 h-5 rounded-none border-2 border-gray-300 checked:bg-black checked:border-black cursor-pointer accent-black" />
                <label htmlFor="terms" className="text-sm text-gray-500 font-medium select-none cursor-pointer">
                    我已阅读并同意 <span className="underline decoration-1 underline-offset-4 hover:text-black transition-colors">《测试协议》</span>
                </label>
                </div>

                <button 
                onClick={onCheck}
                className="w-full h-16 bg-black text-white font-black text-xl uppercase tracking-[0.15em] hover:bg-endfield-yellow hover:text-black transition-all duration-300 mt-6 flex items-center justify-center gap-4 group relative overflow-hidden"
                >
                <span className="relative z-10">立即查询</span>
                <span className="group-hover:translate-x-2 transition-transform relative z-10">→</span>
                <div className="absolute inset-0 bg-endfield-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 origin-left ease-out"></div>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};