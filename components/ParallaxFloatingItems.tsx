import React from 'react';

interface ParallaxProps {
  x: number;
  y: number;
}

export const ParallaxFloatingItems: React.FC<ParallaxProps> = ({ x, y }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 1. Film Strip (Far background, slow movement) */}
      <div 
        className="absolute top-[-50px] -left-10 md:left-10 w-24 h-[120%] opacity-10 transform rotate-12 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${x * 0.01}px, ${y * 0.01}px) rotate(12deg)` }}
      >
         <div className="w-full h-full bg-black border-x-4 border-dashed border-gray-700 flex flex-col gap-4 py-4">
           {[...Array(12)].map((_, i) => (
             <div key={i} className="mx-2 h-32 bg-gray-800 rounded opacity-50"></div>
           ))}
         </div>
      </div>

      {/* 2. Microphone (Mid-ground, moderate movement) - Left side */}
      <div 
        className="hidden md:block absolute top-[20%] left-[5%] opacity-30 transition-transform duration-200 ease-out"
        style={{ transform: `translate(${x * -0.015}px, ${y * -0.015}px) rotate(-15deg)` }}
      >
         {/* Mic Head */}
         <div className="w-16 h-32 bg-gradient-to-r from-gray-800 to-black rounded-full border border-gray-600 relative overflow-hidden shadow-xl">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
            {/* Shine */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/10 to-transparent"></div>
         </div>
         {/* Mic Body/Handle connection */}
         <div className="mx-auto w-6 h-40 bg-gray-900 -mt-2 border-x border-gray-700"></div>
      </div>

      {/* 3. Clapperboard (Foreground, faster movement) - Right side */}
      <div 
        className="hidden md:block absolute bottom-[15%] right-[5%] w-56 opacity-80 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${x * 0.03}px, ${y * 0.03}px) rotate(10deg)` }}
      >
        <div className="relative transform origin-bottom-right hover:scale-105 transition-transform duration-500">
            {/* Top Bar (Animated) */}
            <div className="absolute -top-7 left-0 w-full h-8 bg-white border-2 border-black transform -rotate-[15deg] origin-bottom-left animate-[pulse_4s_infinite]" 
                style={{
                    backgroundImage: 'linear-gradient(110deg, #1a1a1a 25%, transparent 25%, transparent 50%, #1a1a1a 50%, #1a1a1a 75%, transparent 75%, transparent)',
                    backgroundSize: '36px 36px'
                }}>
            </div>
            
            {/* Bottom Bar (Static attached) */}
            <div className="w-full h-8 bg-white border-2 border-black"
                style={{
                    backgroundImage: 'linear-gradient(110deg, #1a1a1a 25%, transparent 25%, transparent 50%, #1a1a1a 50%, #1a1a1a 75%, transparent 75%, transparent)',
                    backgroundSize: '36px 36px'
                }}>
            </div>

            {/* Board Body */}
            <div className="w-full h-40 bg-[#1a1a1a] p-4 flex flex-col justify-between border-2 border-white/20 shadow-2xl rounded-b-md">
                <div className="flex justify-between text-white font-mono text-xs opacity-60 tracking-wider">
                    <span>PROD. ADMOX</span>
                    <span>DIR. CREATIVE</span>
                </div>
                
                {/* Timecode */}
                <div className="text-center">
                    <div className="text-admox-yellow font-mono text-xs mb-1">TIMECODE</div>
                    <div className="text-white font-mono text-3xl font-bold tracking-widest bg-black/50 rounded px-2 py-1 inline-block border border-white/10">
                        00:01:24:12
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-white font-mono mt-2">
                    <div className="border border-white/20 p-1 rounded bg-black/30">
                        <div className="text-[8px] uppercase text-admox-green">Scene</div>
                        <div className="text-lg font-bold">24</div>
                    </div>
                    <div className="border border-white/20 p-1 rounded bg-black/30">
                        <div className="text-[8px] uppercase text-admox-green">Take</div>
                        <div className="text-lg font-bold">3</div>
                    </div>
                    <div className="border border-white/20 p-1 rounded bg-black/30">
                        <div className="text-[8px] uppercase text-admox-green">Cam</div>
                        <div className="text-lg font-bold">A</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

       {/* 4. Abstract "Focus" Elements / UI Overlay */}
       <div 
         className="absolute top-1/3 left-1/3 w-24 h-24 border border-admox-green/20 rounded-full flex items-center justify-center opacity-40 transition-transform duration-500 pointer-events-none"
         style={{ transform: `translate(${x * 0.01}px, ${y * 0.01}px)` }}
       >
         <div className="w-full h-[1px] bg-admox-green/20"></div>
         <div className="h-full w-[1px] bg-admox-green/20 absolute"></div>
         <div className="absolute top-0 right-0 text-[8px] text-admox-green font-mono">AF-C</div>
       </div>
       
       {/* 5. Floating Lens Element (Small) */}
       <div 
         className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-xl transition-transform duration-300 pointer-events-none"
         style={{ transform: `translate(${x * -0.04}px, ${y * -0.02}px)` }}
       ></div>

    </div>
  );
};