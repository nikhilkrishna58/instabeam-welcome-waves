
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="relative inline-block w-8 h-8">
              <span className="absolute inset-0 rounded-full bg-primary opacity-20 animate-pulse-subtle"></span>
              <span className="absolute inset-[2px] rounded-full bg-primary"></span>
            </span>
            <span className="font-bold text-xl tracking-tight">InstaBeam</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              How It Works
            </a>
            <a href="#download" className="text-sm font-medium transition-colors hover:text-primary">
              Download
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg">
              Get Started
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border/50 animate-scale-in mt-2">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#download" 
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
