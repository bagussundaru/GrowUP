import { Building2 } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    "Old Shanghai Sedayu City (Home Band)",
    "Suite Life Sedayu City",
    "Omma Cafe & Resto Bekasi",
    "Nat Cafe & Resto Bekasi",
    "Temu Kamu Coffee Bekasi",
    "Klopsi Coffee Pulo Gebang",
    "Muyen Coffee Gandaria",
    "Plangi Sky Dinning",
    "Jenless Coffee & Bread Bekasi",
    "Double V Coffee Rawamangun",
    "Good Friends Coffee Bekasi",
    "Anak Kemang Coffee Jakarta Selatan",
    "Pizza Hut Indonesia Area Jakarta - Bekasi",
    "Bonvoy Kelapa Gading",
    "Uncle Bens Sunter",
    "VIP Space Coffee Bekasi",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-orbitron text-sm text-primary mb-2 tracking-widest">
            KLIEN KAMI
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cosmic">Dipercaya Oleh</span>
            <br />
            <span className="text-foreground">Brand Terkemuka</span>
          </h2>
        </div>

        {/* Clients Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling Container */}
          <div className="flex gap-6 overflow-hidden py-4">
            <div className="flex gap-6 animate-[slide-left_30s_linear_infinite]">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 whitespace-nowrap hover-glow transition-all duration-300 min-w-fit"
                >
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">{client}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`dup-${index}`}
                  className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 whitespace-nowrap hover-glow transition-all duration-300 min-w-fit"
                >
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
