import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface PhotoProps {
  id: string;
  title: string;
  imgSrc: string;
  author: string;
  location: string;
  likes: number;
  tags: string[];
}

const PhotoCard = ({ photo }: { photo: PhotoProps }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(photo.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card className="overflow-hidden hover-scale transition-all duration-300">
      <CardContent className="p-0 relative">
        <img
          src={photo.imgSrc}
          alt={photo.title}
          className="w-full h-[280px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-medium truncate">{photo.title}</h3>
          <p className="text-white/80 text-sm">
            {photo.author} • {photo.location}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-3">
        <div className="flex flex-wrap gap-1 mb-2">
          {photo.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between w-full">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`gap-1 ${isLiked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500' : ''}`} />
            {likesCount}
          </Button>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PhotoCard;
