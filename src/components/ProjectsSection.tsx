import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
   const projects = [
   {
     title: "PONG AI - Adaptive Single-Agent Pong Game",
     description: "Developed and deployed a web-based Pong game where users can play against an adaptive AI opponent trained using Reinforcement Learning. Designed a retro-themed UI with CSS animations for an engaging user experience.",
     tags: ["Python", "Reinforcement Learning", "HTML", "CSS"],
   },
   {
     title: "Perflect - Code Analysis & Optimization",
     description: "Engineered a web-based Python coding assistant with a LeetCode-style interface for live code execution and real-time feedback. Integrated a Retrieval-Augmented Generation (RAG) system using FAISS to provide optimal solutions and complexity analysis.",
     tags: ["Streamlit", "RAG", "FAISS", "Python"],
   },
   {
     title: "GitSage - GitHub Code Summarizer",
     description: "Built a full-stack AI Code Summarizer with a React.js frontend. It uses a RAG pipeline with Langchain and FAISS to dynamically index a repository and answer natural language queries about the codebase.",
     tags: ["React", "FastAPI", "RAG", "Langchain"],
   },
   {
     title: "Career-Kraft - AI Resume Evaluator",
     description: "Developed an advanced resume evaluation tool using a fine-tuned BERT model for semantic analysis and a custom career-path recommendation model. It provides actionable feedback on resume content and suggests career trajectories.",
     tags: ["Python", "BERT", "NLP", "Machine Learning"],
   },
   {
     title: "Multi-Emotion Detection Model",
     description: "Fine-tuned a BERT+CapsuleNet on RoBERTa model for multi-label emotion analysis. The model parses text to detect nuanced emotions, achieving an F1-score of 80% and demonstrating strong contextual understanding.",
     tags: ["PyTorch", "BERT", "CapsuleNet", "NLP"],
   },
    {
      title: "Book Recommendation Engine",
      description: "Built a book recommendation system for suggesting similar books for readers using K nearest neighbors approach",
      tags: ["Python", "KNN", "Streamlit", "ML"]
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
                <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1" onClick={()=>window.open("https://github.com/prnv007-rgb?tab=repositories")}>
                  <Github className="h-3 w-3" />
                  Code
                </button>
                <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1" onClick={()=>window.open("https://main-page-hazel.vercel.app/")}>
                  <ExternalLink className="h-3 w-3" />
                  Play(Demo)
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