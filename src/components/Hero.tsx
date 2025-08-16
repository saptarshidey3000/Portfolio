import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 stagger-animate">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase">Full Stack Developer & AI Automation</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Saptarshi</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                21-year-old developer crafting modern web experiences and intelligent automation solutions that drive business growth.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="default" className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-medium rounded-xl glow-primary">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 rounded-lg bg-surface hover:bg-primary/20 transition-colors group">
                <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-surface hover:bg-primary/20 transition-colors group">
                <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-surface hover:bg-primary/20 transition-colors group">
                <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src="/lovable-uploads/a0551d48-9e4f-40f4-8e55-46c7e49be237.png" 
                alt="Saptarshi Dey - Full Stack Developer"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl animate-glow" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;