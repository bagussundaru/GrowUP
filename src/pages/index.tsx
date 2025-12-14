import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBanner from "@/components/LogoBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServiceSection";
import GallerySection from "@/components/GallerySection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ClientsSection from "@/components/ClientSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Star Background */}
      <StarField />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Logo Banner Section */}
      <LogoBanner />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Vision & Mission Section */}
      <VisionMissionSection />
      
      {/* Clients Section */}
      <ClientsSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
