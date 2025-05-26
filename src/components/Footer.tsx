import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full opacity-5">
          {[...Array(96)].map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
        <div className="absolute -left-6 -top-6 w-72 h-72 bg-accent rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute -right-6 -bottom-6 w-72 h-72 bg-data-blue rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="font-display text-xl font-bold text-primary">
              Pranav Sathyan
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Data-driven insights that make a difference
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-muted/20 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pranav Sathyan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
