import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm an AI/ML developer who loves building things that work. I've spent the last few years 
            working on recommendation systems, NLP pipelines, and web applications that bring AI 
            capabilities to real users.
          </p>
          
          <p>
            My background spans from Python and machine learning to modern web development with React 
            and FastAPI. I'm particularly interested in RAG systems, embedding-based search, and 
            making complex AI models accessible through clean interfaces.
          </p>

          <p>
            When I'm not coding, I'm usually exploring new ML papers, experimenting with the latest 
            models, or working on side projects that solve problems I actually have.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-semibold text-primary mb-2">AI/ML Focus</h3>
            <p className="text-sm text-muted-foreground">
              Recommendation systems, NLP, and practical machine learning applications
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-primary mb-2">Web Development</h3>
            <p className="text-sm text-muted-foreground">
              React, FastAPI, and full-stack applications with AI integration
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-primary mb-2">Tools & Tech</h3>
            <p className="text-sm text-muted-foreground">
              Python, JavaScript, FAISS, LLMs, and modern development workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;