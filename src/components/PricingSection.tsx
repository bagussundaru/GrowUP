import { Check, Star, Mic2, Users, Music } from "lucide-react";
import { Button } from "./ui/button";

const PricingSection = () => {
  const packages = [
    {
      name: "Solois Akustik",
      icon: Mic2,
      description: "Penampilan solo yang intim dan personal",
      features: [
        "1 Penampil (Vokal + Gitar/Keyboard)",
        "2 Jam penampilan",
        "Request lagu",
        "Sound system standar",
        "Cocok untuk acara intimate",
      ],
      popular: false,
      gradient: "from-secondary/20 to-cosmic-blue/20",
      borderColor: "border-secondary/30",
    },
    {
      name: "Band Akustik",
      icon: Music,
      description: "Nuansa hangat dengan aransemen akustik",
      features: [
        "3-4 Personil",
        "3 Jam penampilan",
        "Request lagu unlimited",
        "Sound system lengkap",
        "Sound engineer",
        "Instrumen tambahan (Violin/Saxo)",
      ],
      popular: true,
      gradient: "from-primary/30 to-cosmic-purple/30",
      borderColor: "border-primary/50",
    },
    {
      name: "Full Band",
      icon: Users,
      description: "Penampilan megah dengan formasi lengkap",
      features: [
        "5-7 Personil lengkap",
        "4 Jam penampilan",
        "Request lagu unlimited",
        "Sound system premium",
        "Sound & Lighting engineer",
        "Semua instrumen tersedia",
        "Custom setlist",
      ],
      popular: false,
      gradient: "from-accent/20 to-cosmic-pink/20",
      borderColor: "border-accent/30",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-nebula">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-orbitron text-sm text-primary mb-2 tracking-widest">
            PAKET HARGA
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cosmic">Pilih Paket</span>
            <br />
            <span className="text-foreground">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami menawarkan berbagai paket yang dapat disesuaikan dengan budget dan kebutuhan acara Anda
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular ? "glow-primary" : "hover-glow"
              } border ${pkg.borderColor}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-primary to-cosmic-cyan px-4 py-1.5 rounded-full text-sm font-bold text-primary-foreground">
                    <Star className="w-4 h-4 fill-current" />
                    Paling Populer
                  </div>
                </div>
              )}

              {/* Icon & Header */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6`}>
                <pkg.icon className="w-8 h-8 text-foreground" />
              </div>
              
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-2">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground mb-6">{pkg.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-muted-foreground text-sm">Mulai dari</span>
                <div className="font-orbitron text-2xl font-bold text-gradient-cosmic">
                  Hubungi Kami
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? "cosmic" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Pesan Sekarang</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          * Harga dapat disesuaikan berdasarkan lokasi acara, durasi penampilan, dan kebutuhan khusus lainnya. 
          Hubungi kami untuk penawaran terbaik.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
