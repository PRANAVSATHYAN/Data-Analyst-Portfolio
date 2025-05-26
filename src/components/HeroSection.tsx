import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

const HeroSection = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const titles = ["Data Analyst", "Business Analyst", "Data Visualizer", "SQL Developer", "Python Programmer"];
  
  const handleTyping = useCallback(() => {
    const current = titles[currentIndex];
    
    if (!isDeleting && jobTitle.length < current.length) {
      // Still typing
      setJobTitle(current.substring(0, jobTitle.length + 1));
      setTypingSpeed(100);
    } else if (!isDeleting && jobTitle.length === current.length) {
      // Finished typing, pause before deleting
      setIsDeleting(true);
      setTypingSpeed(1500);
    } else if (isDeleting && jobTitle.length > 0) {
      // Deleting
      setJobTitle(current.substring(0, jobTitle.length - 1));
      setTypingSpeed(50);
    } else if (isDeleting && jobTitle.length === 0) {
      // Finished deleting, move to next title
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setTypingSpeed(500);
    }
  }, [jobTitle, currentIndex, isDeleting, titles]);
  
  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  // Add useEffect for animation
  useEffect(() => {
    const elements = document.querySelectorAll('.fly-up');
    
    elements.forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.animationDelay = `${index * 0.15}s`;
    });
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-2 text-muted-foreground fly-up">Hi, Hope you are doing well...</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 fly-up">
              I am <span className="text-primary">Pranav Sathyan</span>
            </h1>
            <div className="h-14 mb-2 fly-up">
              <h2 className="text-2xl md:text-3xl text-primary-foreground font-semibold">
                {jobTitle}<span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-xl mb-6 text-muted-foreground fly-up">An Aspiring Data Analyst</p>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg fly-up">
              I'm a business analyst and an aspiring data engineer passionate about using data to solve real-world problems. 
              With expertise in Python, SQL, and visualization tools, I transform complex datasets into actionable insights.
            </p>
            <div className="flex flex-wrap gap-4 fly-up">
              <Button asChild size="lg" className="rounded-md" style={{backgroundColor: "#cc73f8"}}>
                <a href="https://github.com/PRANAVSATHYAN" target="_blank" rel="noopener noreferrer">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-md" onClick={scrollToContact}>
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center fly-up">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-72 h-72 bg-accent rounded-full filter blur-3xl opacity-40"></div>
              <div className="absolute -right-6 -bottom-6 w-72 h-72 bg-data-blue rounded-full filter blur-3xl opacity-30"></div>
              <div className="rounded-lg overflow-hidden border-8 border-background/20 shadow-xl relative z-10">
                <img
                  src="https://i.imgur.com/sRrQSG6.jpeg"
                  alt="Profile"
                  className="w-[300px] h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
