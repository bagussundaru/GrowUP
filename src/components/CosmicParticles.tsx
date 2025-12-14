import React from 'react';

const CosmicParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Cosmic Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full animate-cosmic-float glow-intense`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: [
              'hsl(280 100% 70%)', // cosmic-purple
              'hsl(195 100% 50%)', // cosmic-cyan  
              'hsl(330 100% 65%)', // cosmic-pink
              'hsl(45 100% 80%)',  // star-glow
            ][i % 4],
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${8 + (i % 4) * 2}s`,
          }}
        />
      ))}
      
      {/* Floating Musical Notes */}
      {['♪', '♫', '♬', '♩', '♭', '♯'].map((note, i) => (
        <div
          key={`note-${i}`}
          className="absolute text-2xl font-bold animate-cosmic-float animate-glow-pulse-intense opacity-30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            color: [
              'hsl(280 100% 70%)',
              'hsl(195 100% 50%)', 
              'hsl(330 100% 65%)',
              'hsl(45 100% 80%)',
            ][i % 4],
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${10 + i}s`,
          }}
        >
          {note}
        </div>
      ))}
      
      {/* Orbiting Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-cosmic-cyan animate-orbit-glow opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full bg-cosmic-pink animate-orbit-glow animation-delay-400 opacity-60"></div>
      <div className="absolute top-1/2 left-1/6 w-1 h-1 rounded-full bg-star-glow animate-orbit-glow animation-delay-800 opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/6 w-1 h-1 rounded-full bg-cosmic-purple animate-orbit-glow animation-delay-600 opacity-60"></div>
    </div>
  );
};

export default CosmicParticles;