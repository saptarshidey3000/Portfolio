import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#contact", label: "Contact" },
  ];

  return (
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
            <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-colors group">
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-colors group">
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <Button variant="default" className="bg-primary hover:bg-primary-glow text-primary-foreground px-6">
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
                <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-colors group">
                  <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-colors group">
                  <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
                <Button variant="default" className="bg-primary hover:bg-primary-glow text-primary-foreground px-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;