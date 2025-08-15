import React from "react";

const NeonBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
   
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent"></div>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYEnd slice"
        >
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#00ff88"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="relative">
              <div className="w-16 h-8 bg-red-600/20 border border-red-500/40 backdrop-blur-sm"></div>
              <div
                className="absolute -top-1 left-0 right-0 h-1 bg-red-500"
                style={{
                  boxShadow:
                    "0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444",
                }}
              ></div>
              <div className="absolute -top-2 left-0 right-0 h-2 bg-gradient-to-b from-red-500/60 to-transparent blur-sm"></div>
            </div>
          </div>
        ))}
      </div>

      {children}
    </div>
  );
};

export default NeonBackground;
