import { ChevronDown, Play, Star } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-clean">
      {/* Background Cosmic Logo - Transparent */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="relative w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink animate-spin-slow"></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-8 rounded-full border-2 border-cosmic-cyan animate-pulse"></div>
          
          {/* Inner Ring */}
          <div className="absolute inset-16 rounded-full border border-cosmic-purple/50 animate-spin-reverse"></div>
          
          {/* Inner Circle */}
          <div className="absolute inset-24 rounded-full bg-gradient-to-br from-cosmic-purple/20 via-cosmic-cyan/10 to-cosmic-pink/20 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-orbitron font-bold text-gradient-cosmic mb-4">
                GU
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl text-cosmic-cyan font-orbitron tracking-widest">
                MUSIC
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-8 right-16 w-6 h-6 rounded-full bg-cosmic-pink animate-float"></div>
          <div className="absolute bottom-16 left-8 w-4 h-4 rounded-full bg-cosmic-cyan animate-twinkle"></div>
          <div className="absolute top-1/3 left-4 w-3 h-3 rounded-full bg-star-glow animate-pulse"></div>
          <div className="absolute bottom-1/4 right-4 w-5 h-5 rounded-full bg-cosmic-purple animate-twinkle animation-delay-800"></div>
          <div className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-cosmic-cyan animate-pulse animation-delay-400"></div>
          <div className="absolute bottom-1/3 right-12 w-3 h-3 rounded-full bg-cosmic-pink animate-twinkle animation-delay-600"></div>
        </div>
      </div>

      {/* Floating Music Elements - Hidden on mobile for better performance */}
      <div className="hidden md:block absolute top-1/4 left-10 animate-float animation-delay-200 z-20">
        <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center glow-primary">
          <span className="text-2xl">🎸</span>
        </div>
      </div>
      <div className="hidden md:block absolute top-1/3 right-16 animate-float animation-delay-600 z-20">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-secondary">
          <span className="text-xl">🎹</span>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-1/3 left-1/4 animate-float animation-delay-400 z-20">
        <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center glow-accent">
          <span className="text-2xl">🎷</span>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-1/4 right-1/4 animate-float animation-delay-800 z-20">
        <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center glow-primary">
          <span className="text-lg">🎻</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 animate-fade-in animation-delay-200">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Professional Music Entertainment
            </span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </div>

          {/* Title */}
          <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up animation-delay-400">
            <span className="text-gradient-cosmic">GROW UP</span>
            <br />
            <span className="text-foreground">MUSIC ENTERTAINMENT</span>
          </h1>

          {/* Subtitle */}
          <p className="font-exo text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-600">
            Menjelajahi Harmoni di Galaksi Musik
            <br />
            <span className="text-primary">Entertainment Profesional</span> untuk Setiap Momen Istimewa Anda
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-800 px-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <Play className="w-5 h-5" />
                Pesan Sekarang
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#gallery">Lihat Galeri</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-in animation-delay-600">
            {[
              { value: "50+", label: "Klien Puas" },
              { value: "100+", label: "Event Sukses" },
              { value: "10+", label: "Tahun Pengalaman" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-orbitron text-3xl font-bold text-gradient-cosmic">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
