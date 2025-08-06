import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Recommendation Engine",
      description: "Built a recommendation system for an e-commerce platform using collaborative filtering. Improved user engagement by 35% with personalized product suggestions.",
      tags: ["Python", "TensorFlow", "PostgreSQL"],
    },
    {
      title: "Text Sentiment Analyzer",
      description: "Real-time sentiment analysis tool for social media monitoring. Processes thousands of posts per minute using fine-tuned BERT models.",
      tags: ["NLP", "BERT", "FastAPI"],
    },
    {
      title: "Document Q&A Assistant",
      description: "RAG-based system that answers questions from uploaded documents. Uses vector embeddings and LLM integration for accurate responses.",
      tags: ["RAG", "FAISS", "OpenAI API"],
    },
    {
      title: "Emotion Detection App",
      description: "Web app that detects emotions from text and speech input. Built with React frontend and Python ML backend.",
      tags: ["React", "Audio Processing", "ML"],
    },
    {
      title: "Code Helper Extension",
      description: "VS Code extension that generates code snippets based on natural language descriptions. Uses GPT integration with context awareness.",
      tags: ["TypeScript", "VS Code API", "GPT"],
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive dashboard for data visualization and predictive analytics. Helps businesses understand their metrics better.",
      tags: ["React", "D3.js", "Express.js"],
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Recent Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 simple-hover bg-card border"
            >
              <h3 className="text-lg font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
                  <Github className="h-3 w-3" />
                  Code
                </button>
                <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" />
                  Demo
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;