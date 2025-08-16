import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="tech">
        <TechStack />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;