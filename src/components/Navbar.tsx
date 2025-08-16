import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, Phone, Copy, ExternalLink } from "lucide-react";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = {
    github: "https://github.com/saptarshidey3000",
    linkedin: "https://www.linkedin.com/in/saptarshi-dey-6286a51b3/"
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">SD</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors story-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-6"
                onClick={() => setShowContactModal(true)}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="hover:bg-primary/20"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                  <a 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/20 transition-colors group"
                  >
                    <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/20 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </a>
                  <Button 
                    variant="default" 
                    className="bg-primary hover:bg-primary-glow text-primary-foreground px-6"
                    onClick={() => {
                      setShowContactModal(true);
                      setIsOpen(false);
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </>
  );
};

export default Navbar;