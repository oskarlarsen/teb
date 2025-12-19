import { useEffect } from 'react';
import DarkVeil from '../components/reactbits/DarkVeil';
import Header from '../components/Header';

export default function FlappyGame() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Fixed DarkVeil background - same as Home */}
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>
      
      {/* Header - on top */}
      <Header />
      
      {/* Game container - responsive */}
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-[400px] aspect-[2/3]">
          <iframe 
            src="/games/flappy-teb/index.html"
            className="w-full h-full border-0 rounded-lg shadow-2xl"
            title="Flappy TEBONSMA Game"
          />
        </div>
      </main>
    </div>
  );
}