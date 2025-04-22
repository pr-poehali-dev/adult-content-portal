import Navbar from "@/components/Navbar";
import PhotoCard, { PhotoProps } from "@/components/PhotoCard";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img 
          src="/placeholder.svg" 
          alt="Красивый природный пейзаж" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ПОРНО: Прекрасные Образы Родной Натуральной Обстановки
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Исследуйте нашу коллекцию потрясающих пейзажей, запечатлевших 
              уникальную красоту родной природы в разных уголках страны.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Смотреть галерею
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                О проекте
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeatureSection />

      {/* Gallery Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Популярные фотографии</h2>
          <Button variant="outline">Смотреть все</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPhotos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Подпишитесь на новые фотографии</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Получайте уведомления о новых фотографиях и маршрутах,
            чтобы не пропустить ничего интересного
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-grow rounded-l-md border px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="rounded-l-none">Подписаться</Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-bold">ПОРНО</span>
              <span className="text-xs text-muted-foreground">© 2024</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm hover:text-primary">Условия использования</a>
              <a href="#" className="text-sm hover:text-primary">Политика конфиденциальности</a>
              <a href="#" className="text-sm hover:text-primary">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const featuredPhotos: PhotoProps[] = [
  {
    id: "1",
    title: "Утро в горах",
    imgSrc: "/placeholder.svg",
    author: "Андрей Петров",
    location: "Алтай",
    likes: 124,
    tags: ["горы", "рассвет", "туман"]
  },
  {
    id: "2",
    title: "Лесное озеро",
    imgSrc: "/placeholder.svg",
    author: "Мария Иванова",
    location: "Карелия",
    likes: 98,
    tags: ["озеро", "отражение", "лес"]
  },
  {
    id: "3",
    title: "Полет над водопадом",
    imgSrc: "/placeholder.svg",
    author: "Дмитрий Соколов",
    location: "Приморье",
    likes: 145,
    tags: ["водопад", "птицы", "природа"]
  }
];

export default Index;
