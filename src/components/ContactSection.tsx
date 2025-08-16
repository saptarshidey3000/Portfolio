import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and challenging projects. 
                Whether you need a full-stack developer, AI automation expert, or digital growth partner, 
                I'm here to help your business succeed.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "saptarshidey3000@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 7890789697" },
                { icon: MapPin, label: "Location", value: "India" }
              ].map((contact, index) => (
                <div
                  key={contact.label}
                  className="flex items-center gap-4 p-4 rounded-lg bg-surface/50 hover:bg-surface transition-colors stagger-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Availability */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting new clients . Let's discuss your project timeline and requirements.
              </p>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 bg-surface/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full p-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none">
                  <option value="">Select a service</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="ai">AI Automation</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="seo">SEO Optimization</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and requirements..."
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground py-6 text-lg font-medium glow-primary">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;