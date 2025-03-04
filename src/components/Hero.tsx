
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import AppTransition from './AppTransition';

const Hero = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              Connect with people nearby, instantly
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <span className="text-primary">InstaBeam</span> <br />
              <span>Break the Ice</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
              Create location-based "beams" that connect you with people nearby. 
              Whether it's finding a tennis partner, study buddy, or coffee chat - InstaBeam helps you connect in real life.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-6 shadow-lg">
                Download App
              </Button>
              <Button variant="outline" className="h-12 px-6 group">
                How it works 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="relative animate-float max-w-[280px] mx-auto">
              <AppTransition />
              
              {/* Highlight circles */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-yellow-400/30 rounded-full blur-md"></div>
              <div className="absolute bottom-1/3 -right-4 w-10 h-10 bg-primary/30 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
