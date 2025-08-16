const techCategories = [
  {
    category: "Frontend",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "Django", "GraphQL"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    category: "Database",
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    color: "from-purple-500/20 to-violet-500/20"
  },
  {
    category: "DevOps",
    technologies: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    category: "AI/ML",
    technologies: ["OpenAI", "LangChain", "Hugging Face", "TensorFlow"],
    color: "from-primary/20 to-primary-glow/20"
  },
  {
    category: "Tools",
    technologies: ["WebSockets", "n8n", "Git", "Figma"],
    color: "from-pink-500/20 to-rose-500/20"
  }
];

const TechStack = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies I use to build scalable and performant solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bento-item p-6 stagger-animate"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 rounded-xl`} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 hover:bg-surface transition-colors group"
                      style={{ animationDelay: `${(categoryIndex * 4 + techIndex) * 0.05}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Technologies Mastered", value: "20+" },
            { label: "Happy Clients", value: "30+" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-surface/50 stagger-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;