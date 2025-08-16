import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mentorly",
      description: "A comprehensive mentorship platform connecting mentors and mentees with advanced matching algorithms and real-time communication.",
      tech: ["React.js", "Node.js", "MongoDB", "WebSockets"],
      link: "https://github.com/saptarshidey3000/Mentorly",
      type: "github",
      featured: true,
    },
    {
      title: "Ichamati Hospital",
      description: "Modern healthcare website with appointment booking, patient management, and digital health records system.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      link: "https://ichamatihospital.com/",
      type: "website",
      featured: true,
    },
    {
      title: "Medikaasha Hospital",
      description: "Advanced hospital management system with patient portal, doctor scheduling, and medical record management.",
      tech: ["React.js", "Express.js", "MySQL", "Docker"],
      link: "https://medikaashospital.com",
      type: "website",
      featured: false,
    },
    {
      title: "Kantsi Platform",
      description: "E-commerce platform with AI-powered recommendations, inventory management, and analytics dashboard.",
      tech: ["Next.js", "Django", "PostgreSQL", "AI/ML"],
      link: "https://kantsi.in",
      type: "website",
      featured: false,
    },
    {
      title: "Jaipuri Stitch",
      description: "Fashion e-commerce website with custom design configurator, order tracking, and payment integration.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
      link: "https://jaipuristitch.com/",
      type: "website",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 stagger-animate">
          <p className="text-primary font-medium tracking-wide uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work in web development, AI automation, and digital solutions that drive real business impact.
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bento-item p-6 group cursor-pointer hover-scale ${
                project.featured && index === 0 
                  ? "md:col-span-2 lg:col-span-2" 
                  : project.featured && index === 1
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    {project.type === "github" ? (
                      <Github className="w-5 h-5 text-primary" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-sm text-primary font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-surface rounded-full text-muted-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.type === "github" ? (
                      <>
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </>
                    )}
                  </a>
                </Button>
                
                <div className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.type === "github" ? "Open Source" : "Live Website"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-3"
            asChild
          >
            <a href="https://github.com/saptarshidey3000" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;