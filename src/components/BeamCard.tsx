
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
      className="beam-card glass rounded-xl p-4"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `slide-up 0.5s ease-out ${delay}ms forwards` 
      }}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <img 
            src={avatar} 
            alt={username} 
            className="w-10 h-10 rounded-full object-cover border-2 border-white/50"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-sm truncate">{username}</h3>
            <span className="text-xs text-muted-foreground flex-shrink-0">{time}</span>
          </div>
          
          <p className="text-sm mb-2 line-clamp-2">{prompt}</p>
          
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="relative">
              <MapPin size={14} className="mr-1 text-primary" />
              <span className="radius-ping w-8 h-8 -left-3 -top-3"></span>
            </div>
            <span>Within {radius}m radius</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeamCard;
