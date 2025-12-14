import { Rocket, Target, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative section-clean">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden glow-primary hover-glow">
              <img
                src="/band-1.jpg"
                alt="Grow Up Music Band"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden border-4 border-background glow-secondary z-20 hidden md:block">
              <img
                src="/band-2.jpg"
                alt="Grow Up Music Performance"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-8 w-32 h-32 bg-cosmic-purple/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block font-orbitron text-sm text-primary mb-2 tracking-widest">
                TENTANG KAMI
              </span>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/grow-up-logo-new.png" 
                  alt="Grow Up Music Logo" 
                  className="w-14 h-14 rounded-full object-cover shadow-lg border-2 border-primary/30"
                  loading="lazy"
                />
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
                  <span className="text-gradient-cosmic">Grow Up Music</span>
                  <br />
                  <span className="text-foreground">Entertainment</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Grow Up Music Entertainment menyediakan beberapa format musik seperti 
                <span className="text-primary font-semibold"> Fullband</span>, 
                <span className="text-secondary font-semibold"> Akustik</span>, dan 
                <span className="text-accent font-semibold"> Solois</span> dengan berbagai instrumen musik seperti 
                Vocal, Guitar, Bass, Drum, Biola, Saxo, dan lainnya.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Kami juga menyediakan jasa penyewaan soundsystem beserta sound engineer profesional untuk memastikan kualitas audio terbaik di setiap penampilan.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Terus Bertumbuh",
                  description: "Selalu berkembang di dunia entertainment musik",
                },
                {
                  icon: Target,
                  title: "Profesional",
                  description: "Tim yang terlatih dan berpengalaman",
                },
                {
                  icon: Users,
                  title: "All Genre",
                  description: "Menguasai Top40 dan berbagai genre musik",
                },
                {
                  icon: Zap,
                  title: "Energi Positif",
                  description: "Menciptakan suasana yang nyaman dan menyenangkan",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl hover-glow transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-orbitron font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
