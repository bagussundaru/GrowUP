import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground/80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 2}px hsl(var(--star-glow))`,
          }}
        />
      ))}
      
      {/* Nebula gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cosmic-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cosmic-pink/15 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default StarField;
