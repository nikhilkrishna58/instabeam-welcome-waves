
import { useState, useEffect } from 'react';
import BeamList from './BeamList';

const AppTransition = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Show splash screen for 2 seconds, then fade out
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    
    // Start showing content after splash begins to fade
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2300);
    
    return () => {
      clearTimeout(splashTimer);
      clearTimeout(contentTimer);
    };
  }, []);
  
  return (
    <div className="iphone-frame">
      {/* App Content */}
      <div className="relative w-full h-full bg-secondary overflow-hidden">
        {/* Status Bar */}
        <div className="h-7 bg-white flex justify-between items-center px-4 text-xs">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-3 bg-black/80 rounded-sm"></div>
            <div className="w-3 h-3 bg-black/80 rounded-full"></div>
            <div className="w-3 h-3 bg-black/80 rounded-full"></div>
          </div>
        </div>
        
        {/* Splash Screen */}
        {showSplash && (
          <div className={`absolute inset-0 bg-primary flex flex-col items-center justify-center z-20 ${showSplash ? 'animate-fade-in' : 'animate-fade-out'}`}>
            <div className="w-24 h-24 rounded-2xl bg-white mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary animate-pulse-subtle"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-1.5 bg-white rounded-full transform -rotate-45"></div>
                  <div className="w-10 h-1.5 bg-white rounded-full transform rotate-45"></div>
                </div>
              </div>
            </div>
            <h1 className="text-white text-2xl font-bold tracking-tight">InstaBeam</h1>
            <p className="text-white/80 text-sm mt-2">Break the Ice</p>
          </div>
        )}
        
        {/* App Content */}
        {showContent && (
          <div className={`h-full overflow-y-auto pt-2 px-4 pb-12 ${showContent ? 'animate-fade-in' : ''}`}>
            <BeamList />
          </div>
        )}
        
        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-16 glass-dark border-t border-white/10 flex items-center justify-around px-6">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-sm bg-white"></div>
          </button>
          <button className="w-14 h-14 rounded-full bg-primary -mt-6 flex items-center justify-center shadow-lg">
            <div className="w-8 h-2 bg-white rounded-full"></div>
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-white"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppTransition;
