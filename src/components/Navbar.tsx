import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Resume', id: 'resume' },
    { title: 'Portfolio', id: 'portfolio' },
    { title: 'Contact', id: 'contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/30 backdrop-blur-md shadow-md py-3 mx-6 md:mx-12 lg:mx-24 mt-2 rounded-full' 
          : 'bg-transparent py-4 mx-6 md:mx-12 lg:mx-24 mt-2 rounded-full'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-display text-xl font-bold text-primary">
          Pranav Sathyan
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </Button>
        </div>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.title}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className="transition-colors duration-300 hover:text-primary text-foreground font-medium cursor-pointer"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-md rounded-lg mt-2 mx-6">
          <ul className="pt-2 pb-4">
            {menuItems.map((item) => (
              <li key={item.title} className="block px-6 py-2">
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="block text-foreground hover:text-primary w-full text-left"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
