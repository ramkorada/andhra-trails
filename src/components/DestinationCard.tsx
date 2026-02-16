import { type Destination } from "@/data/destinations";
import { MapPin, Star } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

const categoryStyles: Record<string, string> = {
  Eco: "category-eco",
  Cultural: "category-cultural",
  Coastal: "category-coastal",
};

const DestinationCard = ({ destination, index }: DestinationCardProps) => {
  return (
    <div
      className="card-hover group rounded-xl overflow-hidden bg-card border border-border shadow-sm opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`${categoryStyles[destination.category]} px-3 py-1 rounded-full text-xs font-semibold tracking-wide`}
          >
            {destination.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star className="h-3.5 w-3.5 text-accent fill-accent" />
          <span className="text-xs font-semibold text-foreground">
            {destination.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-card-foreground mb-1">
          {destination.name}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">{destination.district}</span>
          <span className="text-xs">
            · {destination.reviewCount.toLocaleString()} reviews
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {destination.description}
        </p>
        <a
          href={destination.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <MapPin className="h-4 w-4" />
          View on Map
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
