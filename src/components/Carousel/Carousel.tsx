import { useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
  arrowClassName?: string;
  dotClassName?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Carousel({
  items,
  className = "",
  arrowClassName = "",
  dotClassName = "",
  ...props
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`relative bg-carousel-background rounded-lg shadow-lg overflow-hidden ${className}`} {...props}>
      <div className="w-full h-64 overflow-hidden flex items-center justify-center">
        {items[currentIndex]}
      </div>
      <button onClick={prevItem} className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-carousel-arrow text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-colors z-10 ${arrowClassName}`}>
        {"<"}
      </button>
      <button onClick={nextItem} className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-carousel-arrow text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-colors z-10 ${arrowClassName}`}>
        {">"}
      </button>
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ${dotClassName}`}>
        {items.map((_, index) => (
          <span key={index} className={`block w-3 h-3 rounded-full ${index === currentIndex ? "bg-carousel-dotActive" : "bg-carousel-dotInactive"} transition-all duration-300`}></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;