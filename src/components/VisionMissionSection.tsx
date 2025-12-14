import { Eye, Target, Sparkles, Heart, TrendingUp, Users } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section id="vision" className="py-24 relative bg-nebula">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-orbitron text-sm text-primary mb-2 tracking-widest">
            VISI & MISI
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
            <span className="text-gradient-cosmic">Komitmen</span>
            <span className="text-foreground"> Kami</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="glass-card rounded-2xl p-8 md:p-10 hover-glow transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cosmic-cyan flex items-center justify-center glow-primary">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-gradient-cosmic">
                Visi
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kami akan terus menjadi tim band yang mempunyai 
              <span className="text-primary font-semibold"> energi positif</span> dan 
              membangun suasana yang nyaman untuk para pendengar kami.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Kami juga akan selalu mengikuti perkembangan zaman dan terus mengupdate 
              penampilan, list lagu, dan konsep demi kepuasan para pendengar kami.
            </p>
            
            {/* Vision Points */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Sparkles, label: "Energi Positif" },
                { icon: TrendingUp, label: "Terus Berkembang" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="glass-card rounded-2xl p-8 md:p-10 hover-glow transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-pink to-accent flex items-center justify-center glow-accent">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-gradient-warm">
                Misi
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Membuat outlet dan para pendengar kami 
              <span className="text-accent font-semibold"> senang</span> serta 
              <span className="text-accent font-semibold"> nyaman</span> dengan 
              sajian musik yang kami suguhkan dan penampilan kami yang unik.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Memberikan pengalaman musik yang berkesan dan menciptakan momen-momen 
              berharga di setiap acara yang kami tampil.
            </p>
            
            {/* Mission Points */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Heart, label: "Kepuasan Klien" },
                { icon: Users, label: "Penampilan Unik" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <item.icon className="w-5 h-5 text-accent" />
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

export default VisionMissionSection;
