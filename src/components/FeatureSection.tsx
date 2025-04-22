import { Camera, Mountain, Compass } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Исследуйте красоту нашей родной природы
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Высокое качество",
    description: "Все фотографии представлены в высоком разрешении, чтобы вы могли насладиться каждой деталью пейзажа",
    icon: <Camera className="h-7 w-7 text-primary" />,
  },
  {
    title: "Уникальные локации",
    description: "Открывайте для себя малоизвестные, но потрясающе красивые природные локации нашей страны",
    icon: <Mountain className="h-7 w-7 text-primary" />,
  },
  {
    title: "Исследуйте маршруты",
    description: "Получайте информацию о маршрутах, которые помогут вам самостоятельно добраться до этих удивительных мест",
    icon: <Compass className="h-7 w-7 text-primary" />,
  },
];

export default FeatureSection;
