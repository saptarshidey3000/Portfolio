import { Code2, Bot, ShoppingCart, TrendingUp, Search } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web applications using React, Next.js, Node.js, and modern databases.",
    features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"]
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation solutions using OpenAI, LangChain, and custom AI models.",
    features: ["OpenAI Integration", "LangChain Workflows", "Custom AI Models", "Process Automation"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and analytics.",
    features: ["Custom E-commerce", "Payment Integration", "Inventory Systems", "Analytics Dashboard"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Growth-focused marketing strategies with automation and performance tracking.",
    features: ["Marketing Automation", "Campaign Management", "Performance Analytics", "Growth Strategies"]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Technical SEO, content optimization, and search engine ranking improvements.",
    features: ["Technical SEO", "Content Strategy", "Performance Optimization", "Analytics & Reporting"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the modern world.
          </p>
        </div>
        
        <div className="bento-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bento-item p-8 stagger-animate ${
                index === 0 ? 'md:col-span-2' : 
                index === 1 ? 'md:col-span-1' : 
                index === 2 ? 'md:col-span-1' : 
                'md:col-span-1'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;