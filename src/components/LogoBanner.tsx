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
            
            {/* Logo */}
            <img 
              src="/grow-up-logo.ico" 
              alt="Grow Up Music Entertainment - Official Logo" 
              className="w-64 h-64 sm:w-72 sm:h-72 mx-auto object-contain group-hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          </div>
          
          {/* Caption */}
          <div className="mt-8 space-y-4">
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-gradient-cosmic">
              Official Brand Identity
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Logo resmi Grow Up Music Entertainment yang menggambarkan semangat eksplorasi musik 
              dengan tema cosmic dan futuristik, melambangkan perjalanan musikal yang tak terbatas.
            </p>
            
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