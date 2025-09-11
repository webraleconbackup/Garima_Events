import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 z-50">
    
      <div className="relative w-32 h-32">
      
        <div className="absolute rounded-full inset-0 border-[10px] border-pink-400 border-t-amber-300 animate-spin-square"></div>

       
      </div>

    
      <style>{`
        @keyframes spin-square {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-square {
          animation: spin-square 1.1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
