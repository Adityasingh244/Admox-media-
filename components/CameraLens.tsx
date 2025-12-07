import React from 'react';

export const CameraLens: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center animate-float">
      {/* Outer Body / Matte Box Hint */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-3xl transform rotate-3 shadow-2xl border border-gray-700 opacity-80 z-0"></div>
      
      {/* Main Lens Barrel */}
      <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-b from-gray-900 to-black shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center border-4 border-gray-800">
        
        {/* Grip Rings */}
        <div className="absolute inset-2 rounded-full border-2 border-dashed border-gray-700 opacity-30 animate-spin-slow"></div>
        
        {/* Middle Element - Green Tint (Brand Color) */}
        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-gray-800 via-admox-green/20 to-black shadow-inner border border-gray-700 flex items-center justify-center">
          
          {/* Inner Element - Glass Reflection */}
          <div className="w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-gray-900 via-black to-gray-800 border-8 border-gray-900 shadow-2xl flex items-center justify-center relative overflow-hidden">
             
             {/* Aperture Blades */}
             <div className="absolute inset-0 bg-black opacity-60">
                <div className="absolute top-0 left-1/2 w-full h-full border-l-2 border-gray-800 transform origin-bottom-left rotate-0"></div>
                <div className="absolute top-0 left-1/2 w-full h-full border-l-2 border-gray-800 transform origin-bottom-left rotate-60"></div>
                <div className="absolute top-0 left-1/2 w-full h-full border-l-2 border-gray-800 transform origin-bottom-left rotate-120"></div>
                <div className="absolute top-0 left-1/2 w-full h-full border-l-2 border-gray-800 transform origin-bottom-left rotate-180"></div>
                <div className="absolute top-0 left-1/2 w-full h-full border-l-2 border-gray-800 transform origin-bottom-left rotate-240"></div>
                <div className="absolute top-0 left-1/2 w-full h-full border-l-2 border-gray-800 transform origin-bottom-left rotate-300"></div>
             </div>

             {/* The "Eye" / Sensor Reflection - Gold Tint (Brand Color) */}
             <div className="relative z-20 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-admox-yellow/40 to-black animate-pulse-glow shadow-[0_0_20px_rgba(253,197,0,0.4)]"></div>
             
             {/* Glare */}
             <div className="absolute top-10 left-10 w-8 h-4 bg-white opacity-10 rounded-full transform -rotate-45 blur-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative Floating UI Elements */}
      <div className="absolute -right-4 top-1/4 bg-admox-yellow text-black text-xs font-bold px-2 py-1 rounded shadow-lg transform rotate-12">
        REC
      </div>
      <div className="absolute -left-4 bottom-1/4 bg-admox-green text-white text-xs font-bold px-2 py-1 rounded shadow-lg transform -rotate-12">
        4K HDR
      </div>
    </div>
  );
};