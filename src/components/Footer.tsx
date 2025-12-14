import { Music, Sparkles, Instagram, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cosmic-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cosmic-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Music className="w-8 h-8 text-primary" />
                <Sparkles className="w-4 h-4 text-cosmic-cyan absolute -top-1 -right-1" />
              </div>
              <span className="font-orbitron font-bold text-xl text-gradient-cosmic">
                GROW UP MUSIC
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Grow Up Music Entertainment - Mitra musik profesional untuk setiap momen spesial Anda. 
              Fullband, Akustik, Solois, dan Sound System.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/growupmusicofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://wa.me/6285888679147"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-secondary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-4">
              Menu
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "Tentang Kami" },
                { href: "#services", label: "Layanan" },
                { href: "#gallery", label: "Galeri" },
                { href: "#pricing", label: "Harga" },
                { href: "#contact", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-4">
              Layanan
            </h4>
            <ul className="space-y-3">
              {[
                "Full Band",
                "Band Akustik",
                "Solois Akustik",
                "Sound System",
                "Sound Engineer",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Grow Up Music Entertainment. Made with 
            <Heart className="w-4 h-4 text-cosmic-pink fill-cosmic-pink" /> 
            in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
