const SkillsSection = () => {
  const skills = [
    "Python", "JavaScript", "React", "FastAPI", "TensorFlow", "PyTorch", 
    "NLP", "Machine Learning", "PostgreSQL", "MongoDB", "FAISS", "LangChain",
    "Express.js", "Node.js", "Git", "Docker", "AWS", "RAG Systems"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I work with modern tools and frameworks to build scalable AI/ML applications. 
            Always learning and adapting to new technologies as the field evolves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;