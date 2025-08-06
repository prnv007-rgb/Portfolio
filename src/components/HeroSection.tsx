import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-card">
      {/* Hero content */}
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Pranav
        </h1>
        
        <h2 className="text-xl md:text-2xl text-primary mb-6">
          AI/ML Developer & Web App Builder
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I build intelligent systems and web applications using modern AI/ML technologies. 
          Currently focused on recommendation systems, NLP, and creating tools that actually solve problems.
        </p>
        
        <Button onClick={scrollToProjects} className="cta-button">
          Check out my work
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;