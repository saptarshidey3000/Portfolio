import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Saptarshi Dey</h3>
            <p className="text-muted-foreground">Full Stack Developer & AI Automation Specialist</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-surface hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right text-muted-foreground">
            <p className="flex items-center gap-2 justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 text-primary" fill="currentColor" /> by Saptarshi
            </p>
            <p className="text-sm mt-1">© 2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;