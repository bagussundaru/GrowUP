import { Sparkles, Rocket } from "lucide-react";

const LogoBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden section-clean">
      {/* Subtle background effects only */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cosmic-purple/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cosmic-cyan/10 rounded-full blur-2xl animate-pulse animation-delay-1000" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Logo Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block group">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              <Sparkles className="w-6 h-6 text-cosmic-cyan animate-pulse" />
            </div>
            <div className="absolute -top-6 -right-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              <Rocket className="w-8 h-8 text-primary animate-bounce animation-delay-500" />
            </div>
            <div className="absolute -bottom-4 -left-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              <Sparkles className="w-4 h-4 text-cosmic-pink animate-pulse animation-delay-800" />
            </div>
            
            {/* Spectacular Cosmic Logo */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto group-hover:scale-105 transition-all duration-700">
              {/* Galaxy Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-cosmic-purple/20 via-cosmic-cyan/10 to-transparent animate-pulse"></div>
              
              {/* Orbital Rings */}
              <div className="absolute inset-8 rounded-full border border-cosmic-purple/30 animate-spin-slow"></div>
              <div className="absolute inset-12 rounded-full border border-cosmic-cyan/40 animate-spin-reverse"></div>
              <div className="absolute inset-16 rounded-full border border-cosmic-pink/30 animate-spin-slow animation-delay-1000"></div>
              
              {/* Central Logo */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-background via-cosmic-purple/10 to-background backdrop-blur-md border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-orbitron font-bold text-gradient-cosmic mb-2 animate-float-3d">
                    GROW UP
                  </div>
                  <div className="text-lg sm:text-xl text-cosmic-cyan font-orbitron tracking-widest animate-float animation-delay-400">
                    MUSIC
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wider animate-pulse animation-delay-800">
                    ENTERTAINMENT
                  </div>
                </div>
              </div>
              
              {/* Floating Stars */}
              <div className="absolute top-8 right-12 w-3 h-3 rounded-full bg-star-glow animate-twinkle"></div>
              <div className="absolute bottom-12 left-8 w-2 h-2 rounded-full bg-cosmic-pink animate-pulse"></div>
              <div className="absolute top-1/4 left-4 w-2 h-2 rounded-full bg-cosmic-cyan animate-twinkle animation-delay-600"></div>
              <div className="absolute bottom-1/3 right-4 w-3 h-3 rounded-full bg-cosmic-purple animate-pulse animation-delay-400"></div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          </div>
          
          {/* Futuristic Floating Text */}
          <div className="mt-8 space-y-6">
            {/* Main Title with 3D floating effect */}
            <div className="relative">
              <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-gradient-cosmic animate-float-3d animate-text-glow">
                Grow Up Music
              </h3>
              {/* Floating letters effect */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute -top-4 left-8 text-cosmic-cyan text-lg font-orbitron animate-orbit-text opacity-40">G</span>
                <span className="absolute -top-2 right-12 text-cosmic-pink text-sm font-orbitron animate-floating-letters animation-delay-400 opacity-50">R</span>
                <span className="absolute -top-6 left-1/3 text-cosmic-purple text-base font-orbitron animate-floating-letters animation-delay-800 opacity-45">O</span>
                <span className="absolute -top-3 right-1/4 text-cosmic-cyan text-xs font-orbitron animate-orbit-text animation-delay-600 opacity-40">W</span>
                <span className="absolute -top-5 left-1/2 text-star-glow text-sm font-orbitron animate-floating-letters animation-delay-1000 opacity-35">★</span>
                <span className="absolute -top-1 left-16 text-cosmic-pink text-xs font-orbitron animate-orbit-text animation-delay-200 opacity-30">♪</span>
              </div>
            </div>
            
            {/* Animated subtitle */}
            <div className="relative overflow-hidden">
              <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-200">
                <span className="inline-block animate-float animation-delay-200">Grow</span>{" "}
                <span className="inline-block animate-float animation-delay-400">Up</span>{" "}
                <span className="inline-block animate-float animation-delay-600">Music</span>{" "}
                <span className="inline-block animate-float animation-delay-800">Entertainment</span>{" "}
                <span className="inline-block animate-float animation-delay-1000">yang</span>{" "}
                <span className="inline-block animate-float animation-delay-200">menggambarkan</span>{" "}
                <span className="inline-block animate-float animation-delay-400">semangat</span>{" "}
                <span className="inline-block animate-float animation-delay-600">eksplorasi</span>{" "}
                <span className="inline-block animate-float animation-delay-800">musik</span>
                <br />
                <span className="inline-block animate-float animation-delay-1000">dengan</span>{" "}
                <span className="inline-block animate-float animation-delay-200">tema</span>{" "}
                <span className="inline-block animate-float animation-delay-400">cosmic</span>{" "}
                <span className="inline-block animate-float animation-delay-600">dan</span>{" "}
                <span className="inline-block animate-float animation-delay-800">futuristik,</span>{" "}
                <span className="inline-block animate-float animation-delay-1000">melambangkan</span>{" "}
                <span className="inline-block animate-float animation-delay-200">perjalanan</span>{" "}
                <span className="inline-block animate-float animation-delay-400">musikal</span>{" "}
                <span className="inline-block animate-float animation-delay-600">yang</span>{" "}
                <span className="inline-block animate-float animation-delay-800">tak</span>{" "}
                <span className="inline-block animate-float animation-delay-1000">terbatas.</span>
              </p>
            </div>
            
            {/* Brand Values */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                { icon: "🚀", label: "Inovasi" },
                { icon: "🎵", label: "Harmoni" },
                { icon: "⭐", label: "Kualitas" },
                { icon: "🌌", label: "Eksplorasi" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-full hover-glow transition-all duration-300"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;