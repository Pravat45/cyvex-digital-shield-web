import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import First from '../../assets/first.jpg';
import Second from '../../assets/second.jpg';
import Third from '../../assets/third.jpg';

// Image slider for the hero section

const images = [First, Second, Third];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-play image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0">
  {images.map((image, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === currentImage ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Removed: <div className="absolute inset-0 bg-black/40" /> */}
    </div>
  ))}
</div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Securing Your Business in the Digital Age
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-cyber-red text-white rounded-full px-8"
                variant="outline"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-600 border border-red-600 hover:bg-cyber-red/90 hover:text-white rounded-full px-8 transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImage ? "bg-cyber-red w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
