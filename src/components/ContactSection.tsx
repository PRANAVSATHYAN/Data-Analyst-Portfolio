import { Card } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 section-padding relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fly-up">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto fly-up">
            Have a project in mind or want to discuss data analysis opportunities? 
            Feel free to reach out and I'll get back to you as soon as possible.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 fly-up"></div>
        </div>
        
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <Card className="p-8 bg-accent/30 border-none shadow-lg w-full backdrop-blur-sm fly-up">
            <div className="flex flex-col items-center justify-center space-y-10 py-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full stagger-children">
                <div className="flex flex-col items-center text-center fly-up">
                  <div className="bg-accent p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Email</h4>
                  <a href="mailto:info@dataanalyst.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@dataanalyst.com
                  </a>
                </div>
                
                <div className="flex flex-col items-center text-center fly-up">
                  <div className="bg-accent p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">LinkedIn</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/dataanalyst
                  </a>
                </div>
                
                <div className="flex flex-col items-center text-center fly-up">
                  <div className="bg-accent p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">GitHub</h4>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    github.com/dataanalyst
                  </a>
                </div>
              </div>
              
              <div className="w-full pt-8 border-t border-muted/20 fly-up">
                <h4 className="font-bold text-xl mb-4 text-center">Let's work together</h4>
                <p className="text-muted-foreground text-center">
                  I'm currently available for freelance work and permanent positions. 
                  If you have a project that needs data analysis expertise, let's discuss how I can help!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
