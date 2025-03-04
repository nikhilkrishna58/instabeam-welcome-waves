
import { MapPin } from 'lucide-react';

interface BeamCardProps {
  username: string;
  prompt: string;
  radius: number;
  avatar: string;
  time: string;
  delay?: number;
}

const BeamCard = ({ username, prompt, radius, avatar, time, delay = 0 }: BeamCardProps) => {
  return (
    <div 
      className="beam-card glass rounded-2xl p-5 mb-4"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `slide-up 0.5s ease-out ${delay}ms forwards` 
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 flex-shrink-0">
          <img 
            src={avatar} 
            alt={username} 
            className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-base">{username}</h3>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
          
          <p className="text-base mb-3">{prompt}</p>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="relative">
              <MapPin size={16} className="mr-1 text-primary" />
              <span className="radius-ping w-12 h-12 -left-4 -top-4"></span>
            </div>
            <span>Within {radius}m radius</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeamCard;
