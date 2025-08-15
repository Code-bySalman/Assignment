

const HeroSection = () => {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-52">
      
      <div className="absolute top-32 left-6 text-xs text-green-400 space-y-1 z-10">
        <div className="border border-green-400/30 p-2 bg-black/50">
          <div>GSD PRT-X ENG</div>
          <div className="text-white">PREV 63,140</div>
        </div>
      </div>

      <div className="absolute top-32 right-6 text-xs text-green-400 space-y-1 z-10">
        <div className="border border-green-400/30 p-2 bg-black/50 text-right">
          <div>34.158.20485 GRPTS</div>
          <div className="text-white">MTG48.55 TOE</div>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-wider">
        <span
          className="inline-block text-white drop-shadow-lg"
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
          }}
        >
          EXPLORE NFT COLLECTION
        </span>
      </h1>

      <div className="max-w-4xl mb-12">
        <p className="text-lg md:text-xl text-white leading-relaxed tracking-wide italic">
          A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
          Unique,
          <br className="hidden md:block" />
          metaverse-ready, and designed to benefit their holders.
        </p>
      </div>

      <button className="group relative mb-16">
        <div className="absolute inset-0 border-2 border-yellow-400 bg-black skew-x-6 group-hover:bg-gray-900 transition-all duration-300 group-hover:scale-105"></div>
        <div className="relative px-12 py-4 text-lg font-bold tracking-wider text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
          START GAME
        </div>
      </button>

   
      <div className="flex space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 border border-green-400 ${
              i === 2 ? "bg-green-400" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>

    
      <div className="absolute bottom-8 left-6 text-xs text-green-400 z-20">
        <div className="border border-green-400/30 p-2 bg-black/50">
          <div>EVD: ALPHA</div>
          <div className="text-white">VERS: 21.01.04</div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 text-xs text-green-400 z-20">
        <div className="border border-green-400/30 p-2 bg-black/50 text-right">
          <div>34.156 LOG</div>
          <div className="text-white">WAN Chrome 120.0.0.0 SYS</div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
