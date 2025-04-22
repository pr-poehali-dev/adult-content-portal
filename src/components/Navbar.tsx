import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Camera, Image, Compass, Home, Info } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full py-4 px-6 border-b flex items-center justify-between bg-secondary/40 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Camera className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl">ПОРНО</span>
        <span className="text-xs text-muted-foreground max-w-[180px] hidden sm:block">
          Прекрасные Образы Родной Натуральной Обстановки
        </span>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Home className="h-4 w-4 mr-2" />
                Главная
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Image className="h-4 w-4 mr-2" />
              Галерея
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4">
                {categories.map((category) => (
                  <li key={category.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={category.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{category.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {category.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/trips">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Compass className="h-4 w-4 mr-2" />
                Путешествия
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Info className="h-4 w-4 mr-2" />
                О проекте
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const categories = [
  {
    title: "Горные пейзажи",
    description: "Величественные виды гор и скал в различных уголках страны",
    href: "/gallery/mountains",
  },
  {
    title: "Лесные тропы",
    description: "Таинственная красота лесов и заповедников",
    href: "/gallery/forests",
  },
  {
    title: "Водные просторы",
    description: "Озера, реки, водопады и морские пейзажи",
    href: "/gallery/water",
  },
];

export default Navbar;
