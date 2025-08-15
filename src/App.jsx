
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NeonBackground from "./components/NeonBackground";

function App() {
  return (
    <>
      <Header />
      <NeonBackground>
        <HeroSection />
      </NeonBackground>
      <Dashboard/>
    </>
  );
}

export default App;
