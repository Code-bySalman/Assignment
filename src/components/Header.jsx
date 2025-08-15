
import { Wallet } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-30 flex items-center justify-between p-6 lg:p-8">
      <div className="text-2xl font-bold tracking-wider text-green-400">
        EYYZ
      </div>

      <nav className="hidden md:block">
        <span className="text-3xl font-bold tracking-wider">
          Leaderboard
        </span>
      </nav>

      <button className="group relative">
        <div className="absolute inset-0 border border-green-400 skew-x-12 group-hover:bg-green-400/10 transition-colors duration-300"></div>
        <div className="relative px-6 py-2 flex items-center gap-2 tracking-wider text-sm font-semibold">
          <Wallet size={16} />
          CONNECT WALLET
        </div>
      </button>
    </header>
  );
};

export default Header;
