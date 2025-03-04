
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { MapPin, Users, Clock, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How InstaBeam Works</h2>
              <p className="text-lg text-muted-foreground">
                Create and discover location-based beams to connect with people nearby
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MapPin size={24} className="text-primary" />,
                  title: "Location-Based",
                  description: "Set your radius and discover beams from people nearby in your selected area"
                },
                {
                  icon: <Users size={24} className="text-primary" />,
                  title: "Social Discovery",
                  description: "Find people with similar interests and activities in your proximity"
                },
                {
                  icon: <Clock size={24} className="text-primary" />,
                  title: "Real-Time",
                  description: "Beams are delivered instantly, perfect for spontaneous meetups"
                },
                {
                  icon: <Shield size={24} className="text-primary" />,
                  title: "Privacy First",
                  description: "Full control over your information and who can contact you"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Break the Ice, Make Connections</h2>
              <p className="text-lg text-muted-foreground">
                InstaBeam helps you connect with people in your vicinity who share similar interests
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Create a Beam",
                  description: "Post what you're looking for or interested in doing right now"
                },
                {
                  number: "02",
                  title: "Set Your Radius",
                  description: "Choose how far your beam should reach to find the right people"
                },
                {
                  number: "03",
                  title: "Connect & Meet",
                  description: "Chat with matches and turn digital connections into real-life meetups"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="relative bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="absolute -top-6 right-6 text-6xl font-bold text-primary/10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Download Section */}
        <section id="download" className="py-20 relative overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 -z-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-5"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl -z-5"></div>
          
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Break the Ice?</h2>
              <p className="text-xl text-white/80 mb-8">
                Download InstaBeam today and start connecting with people around you
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#" 
                  className="glass bg-white/20 hover:bg-white/30 px-8 py-4 rounded-xl flex items-center justify-center transition-colors"
                >
                  <div className="flex items-center">
                    <div className="mr-3 text-2xl">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5227 19.3662C16.9916 19.9133 16.3179 19.8766 15.6611 19.6602C14.9694 19.4354 14.3207 19.4005 13.5941 19.6602C12.684 19.9981 12.1876 19.9383 11.7087 19.3662C8.54956 15.9951 9.20549 10.8203 12.8648 10.6037C13.7233 10.656 14.3458 11.0901 14.8588 11.1332C15.6362 11.0318 16.3696 10.5846 17.1636 10.63C18.1338 10.6921 18.8507 11.0483 19.3307 11.7268C16.7271 13.2285 17.2735 16.6658 19.6557 17.5242C19.2794 18.1914 18.8006 18.8431 17.5244 19.3679L17.5227 19.3662ZM14.7575 10.5765C14.6225 8.94478 15.9548 7.58314 17.5244 7.41788C17.7492 9.29332 15.9215 10.7351 14.7575 10.5765Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-xl font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="glass bg-white/20 hover:bg-white/30 px-8 py-4 rounded-xl flex items-center justify-center transition-colors"
                >
                  <div className="flex items-center">
                    <div className="mr-3 text-2xl">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5227 19.3662C16.9916 19.9133 16.3179 19.8766 15.6611 19.6602C14.9694 19.4354 14.3207 19.4005 13.5941 19.6602C12.684 19.9981 12.1876 19.9383 11.7087 19.3662C8.54956 15.9951 9.20549 10.8203 12.8648 10.6037C13.7233 10.656 14.3458 11.0901 14.8588 11.1332C15.6362 11.0318 16.3696 10.5846 17.1636 10.63C18.1338 10.6921 18.8507 11.0483 19.3307 11.7268C16.7271 13.2285 17.2735 16.6658 19.6557 17.5242C19.2794 18.1914 18.8006 18.8431 17.5244 19.3679L17.5227 19.3662ZM14.7575 10.5765C14.6225 8.94478 15.9548 7.58314 17.5244 7.41788C17.7492 9.29332 15.9215 10.7351 14.7575 10.5765Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-xl font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
