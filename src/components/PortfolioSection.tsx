import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tools: string[];
  image: string;
  link: string;
}

const PortfolioSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Sales Analysis",
      description: "Analyzed customer behavior and sales trends for a major e-commerce platform",
      problem: "The client needed to understand declining conversion rates and optimize their product recommendations",
      solution: "Created interactive dashboards tracking customer journeys and identified key drop-off points, resulting in a 15% increase in conversions",
      tools: ["Python", "SQL", "Tableau", "Excel"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://github.com",
    },
    {
      id: 2,
      title: "Healthcare Patient Outcomes",
      description: "Predictive analytics model for patient readmission risk",
      problem: "Hospital needed to reduce 30-day readmission rates and improve patient care coordination",
      solution: "Developed a predictive model with 85% accuracy that allowed for early intervention for high-risk patients",
      tools: ["Python", "Scikit-learn", "Power BI"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://github.com",
    },
    {
      id: 3,
      title: "Financial Market Analysis",
      description: "Time series analysis of market trends and investment opportunities",
      problem: "Investment firm needed better insight into market patterns to optimize portfolio allocations",
      solution: "Created interactive visualization tools that identified emerging market trends before competitors",
      tools: ["R", "Python", "D3.js", "Excel"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://github.com",
    },
    {
      id: 4,
      title: "Social Media Sentiment Analysis",
      description: "NLP-powered sentiment analysis for brand perception tracking",
      problem: "Company needed to understand public perception across social media platforms",
      solution: "Built a real-time dashboard tracking sentiment trends and key topics of discussion",
      tools: ["Python", "NLTK", "Tableau", "MongoDB"],
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://github.com",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 section-padding relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fly-up">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto fly-up">
            Explore some of my recent data analysis projects showcasing visualization, 
            insights, and problem-solving across different industries.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 fly-up"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-children">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#cc73f8]/30 group animate-on-scroll"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedProject(project)}
                      className="hover:text-[#cc73f8] hover:border-[#cc73f8]"
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[725px]">
                    <DialogHeader>
                      <DialogTitle>{selectedProject?.title}</DialogTitle>
                      <DialogDescription>{selectedProject?.description}</DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <img 
                        src={selectedProject?.image} 
                        alt={selectedProject?.title} 
                        className="w-full h-64 object-cover rounded-md mb-4" 
                      />
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">The Problem:</h3>
                          <p className="text-muted-foreground">{selectedProject?.problem}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">The Solution:</h3>
                          <p className="text-muted-foreground">{selectedProject?.solution}</p>
                        </div>
                        <div className="pt-2">
                          <h3 className="font-semibold text-lg mb-2">Tools Used:</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject?.tools.map((tool, index) => (
                              <Badge key={index} variant="secondary">{tool}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button asChild style={{backgroundColor: "#cc73f8"}}>
                        <a href={selectedProject?.link} target="_blank" rel="noopener noreferrer">
                          View Full Project
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button asChild variant="link" className="text-[#cc73f8]">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
