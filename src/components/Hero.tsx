import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Phone, Copy, ExternalLink, X } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState("");

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  const contactDetails = {
    email: "saptarshidey3000@gmail.com",
    phone: "7890789697",
    linkedin: "https://www.linkedin.com/in/saptarshi-dey-6286a51b3/",
    github: "https://github.com/saptarshidey3000"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background border border-border rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl animate-scale-in">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 hover:bg-primary/20"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold gradient-text mb-2">Get In Touch</h3>
          <p className="text-muted-foreground">Let's connect and discuss opportunities</p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border/50">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{contactDetails.email}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(contactDetails.email, "email")}
              className="hover:bg-primary/20"
            >
              {copiedField === "email" ? (
                <span className="text-xs text-green-500">Copied!</span>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border/50">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{contactDetails.phone}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(contactDetails.phone, "phone")}
              className="hover:bg-primary/20"
            >
              {copiedField === "phone" ? (
                <span className="text-xs text-green-500">Copied!</span>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border/50">
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium">Saptarshi Dey</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(contactDetails.linkedin, '_blank')}
              className="hover:bg-primary/20"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border/50">
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-medium">saptarshidey3000</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(contactDetails.github, '_blank')}
              className="hover:bg-primary/20"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <Button
            variant="default"
            className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground"
            onClick={() => window.open(`mailto:${contactDetails.email}`, '_blank')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => window.open(contactDetails.linkedin, '_blank')}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const socialLinks = {
    github: "https://github.com/saptarshidey3000",
    linkedin: "https://www.linkedin.com/in/saptarshi-dey-6286a51b3/",
    email: "saptarshidey3000@gmail.com"
  };

  const downloadCV = () => {
    // Create a link element to download the PDF from public folder
    const link = document.createElement('a');
    link.href = '/saptarshideyresume (1) (1).pdf'; // Path relative to public folder
    link.download = 'Saptarshi_Dey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
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
                <Button 
                  variant="default" 
                  className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-medium rounded-xl glow-primary"
                  onClick={() => setShowContactModal(true)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl"
                  onClick={downloadCV}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface hover:bg-primary/20 transition-colors group"
                >
                  <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface hover:bg-primary/20 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="p-3 rounded-lg bg-surface hover:bg-primary/20 transition-colors group"
                >
                  <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
                </button>
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

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </>
  );
};

export default Hero;