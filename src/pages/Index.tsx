import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServicesSection />
      <TechStack />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;