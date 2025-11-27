import React, { useState } from 'react';
import { Header } from './components/Header';
import { LandingBar } from './components/LandingBar';
import { AccessForm } from './components/AccessForm';
import { ResultCard } from './components/ResultCard';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<'LANDING' | 'FORM' | 'RESULT'>('LANDING');

  const handleQuery = () => {
    setViewState('FORM');
  };

  const handleCheck = () => {
    setViewState('RESULT');
  };

  const handleCloseForm = () => {
    setViewState('LANDING');
  };

  return (
    <div className="h-screen w-full relative overflow-hidden flex flex-col font-sans bg-[#DCE52B]">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <picture>
          <source 
            media="(orientation: portrait)" 
            srcSet="https://web.hycdn.cn/endfield/official-v4/_next/static/media/hero_mobile.09495022.jpg" 
          />
          <img 
            src="https://web.hycdn.cn/endfield/official-v4/_next/static/media/hero.10abc0b7.jpg" 
            alt="Endfield Hero" 
            className="w-full h-full object-cover object-top opacity-100"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>

      <Header />

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 relative z-20 w-full">
        {viewState === 'RESULT' && (
          <div className="animate-in fade-in zoom-in duration-500 w-full flex justify-center">
             <ResultCard />
          </div>
        )}
      </main>
      
      {/* Bottom Bar - Only visible on Landing or Form (dimmed) */}
      {(viewState === 'LANDING' || viewState === 'FORM') && (
        <LandingBar onQuery={handleQuery} />
      )}

      {/* Form Overlay */}
      {viewState === 'FORM' && (
        <AccessForm onCheck={handleCheck} onClose={handleCloseForm} />
      )}
      
    </div>
  );
};

export default App;