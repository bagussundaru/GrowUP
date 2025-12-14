import { Music, Guitar, Mic2, Users, Volume2, Headphones } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Full Band",
      description: "Formasi lengkap dengan semua instrumen untuk penampilan yang megah dan energik",
      image: "/band-3.jpg",
      features: ["Vocal", "Guitar", "Bass", "Drum", "Keyboard"],
    },
    {
      icon: Guitar,
      title: "Band Akustik",
      description: "Nuansa hangat dan intim dengan aransemen akustik yang menyentuh hati",
      image: "/acoustic.jpg",
      features: ["Acoustic Guitar", "Cajon", "Vocal", "Violin", "Keyboard"],
    },
    {
      icon: Mic2,
      title: "Solois Akustik",
      description: "Penampilan solo yang personal dan cocok untuk acara intimate",
      image: "/soloist.jpg",
      features: ["Vocal", "Guitar/Keyboard", "Backing Track"],
    },
  ];

  const additionalServices = [
    {
      icon: Volume2,
      title: "Sound System",
      description: "Penyewaan sound system profesional berkualitas tinggi",
    },
    {
      icon: Headphones,
      title: "Sound Engineer",
      description: "Tenaga ahli untuk mixing audio yang sempurna",
    },
    {
      icon: Music,
      title: "Instrumen Tambahan",
      description: "Biola, Saxophone, dan instrumen lainnya sesuai kebutuhan",
    },
  ];

  return (
    <section id="services" className="py-24 relative section-clean">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-orbitron text-sm text-primary mb-2 tracking-widest">
            LAYANAN KAMI
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cosmic">Format Musik</span>
            <br />
            <span className="text-foreground">Yang Kami Tawarkan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilih format penampilan yang sesuai dengan konsep dan kebutuhan acara Anda
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center hover-glow transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
