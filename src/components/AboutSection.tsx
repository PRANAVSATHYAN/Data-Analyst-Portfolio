import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const AboutSection = () => {
  const skills = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-blue transition-transform duration-300 hover:rotate-6 hover:scale-110"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M22 8a2 2 0 0 0-2-2h-8L9 3H4a2 2 0 0 0-2 2"/></svg>
      )
    },
    {
      category: "Data Analysis",
      items: ["Pandas", "NumPy", "Statistics", "Excel"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-green transition-transform duration-300 hover:rotate-6 hover:scale-110"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      )
    },
    {
      category: "Visualization",
      items: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-orange transition-transform duration-300 hover:rotate-6 hover:scale-110"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"/><path d="M12 3v3"/><path d="M12 21v-3"/></svg>
      )
    },
  ];
  
  return (
    <section id="about" className="py-24 section-padding bg-secondary relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full opacity-5">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#cc73f8] rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9b30e2] rounded-full filter blur-[150px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fly-up">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto fly-up"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 fly-up">My Background</h3>
            <p className="mb-4 text-muted-foreground fly-up">
              As a data analyst with 3+ years of experience, I specialize in transforming raw data into meaningful business insights. 
              My journey in data analysis began with a degree in Statistics, and I've since expanded my expertise across various industries.
            </p>
            <p className="mb-6 text-muted-foreground fly-up">
              I'm passionate about using data to tell stories and drive decision-making. Whether it's optimizing business processes, 
              identifying market trends, or solving complex problems, I approach each project with curiosity and analytical rigor.
            </p>
            <h3 className="text-2xl font-bold mb-4 fly-up">My Interests</h3>
            <p className="text-muted-foreground fly-up">
              Beyond working with data, I enjoy exploring new visualization techniques, contributing to open-source data projects, 
              and staying current with emerging technologies in data science. I believe in the power of data to transform organizations 
              and create positive change in the world.
            </p>
          </div>
          
          <div className="space-y-6 animate-on-scroll stagger-children">
            <h3 className="text-2xl font-bold mb-6 fly-up">Skills & Tools</h3>
            
            {skills.map((skill, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#cc73f8]/40 backdrop-blur-sm bg-background/40 fly-up">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{skill.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span 
                            key={i} 
                            className="bg-background text-foreground px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
