
import BeamCard from './BeamCard';

const beams = [
  {
    username: "JaneDoe",
    prompt: "Anyone up for tennis?",
    radius: 100,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    time: "2 min ago"
  },
  {
    username: "JohnSmith",
    prompt: "Coffee buddy needed at Starbucks on Main St!",
    radius: 200,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    time: "5 min ago"
  },
  {
    username: "AlexWong",
    prompt: "Need help moving a couch, will buy pizza after!",
    radius: 500,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    time: "10 min ago"
  },
  {
    username: "SarahJames",
    prompt: "Looking for study buddy at university library",
    radius: 300,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    time: "15 min ago"
  },
  {
    username: "MikeJohnson",
    prompt: "Dog walking partner? My retriever loves company!",
    radius: 400,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    time: "22 min ago"
  }
];

const BeamList = () => {
  return (
    <div className="py-4">
      <div className="mb-6">
        <h2 className="font-semibold text-xl mb-1">Nearby Beams</h2>
        <p className="text-sm text-muted-foreground">Connect with people around you</p>
      </div>
      
      <div>
        {beams.map((beam, index) => (
          <BeamCard 
            key={index} 
            username={beam.username}
            prompt={beam.prompt}
            radius={beam.radius}
            avatar={beam.avatar}
            time={beam.time}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default BeamList;
