import { Phone, Instagram, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Halo Grow Up Music!%0A%0ANama: ${formData.name}%0ANo. HP: ${formData.phone}%0AJenis Acara: ${formData.eventType}%0ATanggal: ${formData.date}%0A%0APesan:%0A${formData.message}`;
    
    window.open(`https://wa.me/6285888679147?text=${message}`, "_blank");
    toast.success("Mengarahkan ke WhatsApp...");
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon / WhatsApp",
      value: "0858-8867-9147",
      href: "https://wa.me/6285888679147",
      color: "text-secondary",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@growupmusicofficial",
      href: "https://instagram.com/growupmusicofficial",
      color: "text-cosmic-pink",
    },
    {
      icon: MapPin,
      label: "Area Layanan",
      value: "Jakarta & Bekasi",
      href: null,
      color: "text-primary",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "09:00 - 21:00 WIB",
      href: null,
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-orbitron text-sm text-primary mb-2 tracking-widest">
            HUBUNGI KAMI
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cosmic">Booking</span>
            <span className="text-foreground"> Sekarang</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Siap membuat acara Anda lebih berkesan? Hubungi kami untuk konsultasi dan pemesanan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="cosmic"
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href="https://wa.me/6285888679147"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href="https://instagram.com/growupmusicofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-orbitron text-xl font-bold text-foreground mb-6">
              Form Pemesanan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Nomor HP / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Jenis Acara
                  </label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  >
                    <option value="">Pilih...</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Cafe/Restaurant">Cafe/Restaurant</option>
                    <option value="Private Event">Private Event</option>
                    <option value="Other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Tanggal Acara
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Pesan / Kebutuhan Khusus
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground resize-none"
                  placeholder="Ceritakan detail acara Anda..."
                />
              </div>
              <Button type="submit" variant="hero" className="w-full">
                <Send className="w-5 h-5" />
                Kirim Pemesanan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
