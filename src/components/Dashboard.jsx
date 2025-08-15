import  { useState } from 'react';



const ImagePlaceholderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const SkullIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    <path d="M10 2a1.5 1.5 0 00-1.5 1.5v1.28a1 1 0 00.707.948l.43-.143a1.5 1.5 0 011.726 0l.43.143a1 1 0 00.707-.948V3.5A1.5 1.5 0 0010 2z" />
    <path d="M7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" />
    <path d="M5.07 9.43a1 1 0 00-1.54.858 5.95 5.95 0 004.243 4.242 1 1 0 00.858-1.54l-.43-.143a3.95 3.95 0 01-2.988-2.988l-.143-.43z" />
    <path d="M14.93 9.43a1 1 0 011.54.858 5.95 5.95 0 01-4.243 4.242 1 1 0 01-.858-1.54l.43-.143a3.95 3.95 0 002.988-2.988l.143-.43z" />
  </svg>
);


const leagueData = [
  { id: 1, logo: 'https://via.placeholder.com/48?text=R', name: 'REALTECH', score: 17, price: 30 },
  { id: 2, logo: 'https://via.placeholder.com/48?text=AZ', name: 'PSYCHO AZOO', score: 15, price: 30 },
  { id: 3, logo: 'https://via.placeholder.com/48?text=S', name: 'SSTS', score: 8, price: 25 },
  { id: 4, logo: 'https://via.placeholder.com/48?text=38', name: '38TH ARMA', score: 11, price: 25 },
];

export default function Dashboard() {
  const cryptoPrices = ['0.002 BTC', '250 USDT', '0.05 ETH', '20 SOL', '15 ADA', '3 AVAX', '100 XRP', '10 MATIC'];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredPrice, setHoveredPrice] = useState('');

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 font-mono">
      <div className="container mx-auto px-4 py-6">

      
        <header className="flex justify-between items-center text-sm font-semibold tracking-wider">
          <div className="text-2xl font-bold">EXYZ</div>
          <div className="hidden md:flex gap-10 text-gray-500">
            <span>NEW COLLECTION</span>
            <span>NEW COLLECTION</span>
            <span>NEW COLLECTION</span>
            <span>NEW COLLECTION</span>
          </div>
          <button className="border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            CONNECT WALLET
          </button>
        </header>

        
        <section className="my-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="relative aspect-square bg-[#21262D] border border-gray-700 rounded-lg flex items-center justify-center group hover:cursor-pointer"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  const random = cryptoPrices[Math.floor(Math.random() * cryptoPrices.length)];
                  setHoveredPrice(random);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <ImagePlaceholderIcon />

                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-xl font-bold rounded-lg transition-all duration-300">
                    {hoveredPrice}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        
        <section className="my-16">
          <h2 className="text-5xl font-league font-extrabold text-center mb-12 tracking-widest uppercase">
            The League
          </h2>

          <div className="max-w-5xl mx-auto bg-[#001A00] border border-white/30 rounded-xl p-8">
            <div className="space-y-6">
              {leagueData.map((team, index) => (
                <div
                  key={team.id}
                  className={`flex justify-between items-center py-6 px-4 ${
                    index < leagueData.length - 1 ? 'border-t-4 border-[#FF5E5E]' : ''
                  }`}
                >
                  
                  <div className="flex items-center gap-6">
                    <img src={team.logo} alt={team.name} className="w-12 h-12 rounded-md object-contain" />
                    <span className="text-2xl font-bold tracking-widest uppercase">{team.name}</span>
                  </div>

                  
                  <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3 text-2xl font-bold">
                      <span>{team.score}</span>
                      <SkullIcon />
                    </div>
                    <span className="text-2xl font-bold tracking-wider">{team.price} SOL</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
