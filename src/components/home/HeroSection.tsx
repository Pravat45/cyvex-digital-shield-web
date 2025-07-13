import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import First from "../../assets/First.webp";
import Second from "../../assets/second.webp";
import Third from "../../assets/third.webp";
import { Link } from "react-router-dom";

// Image slider for the hero section

// const images = [First, Second, Third];

const images = [
  {
    avif: "https://ik.imagekit.io/ruvozwl79/First.avif?updatedAt=1747163384602",
    webp: "https://ik.imagekit.io/ruvozwl79/First.webp?updatedAt=1747163548624",
  },
  {
    avif: "https://ik.imagekit.io/ruvozwl79/second.avif?updatedAt=1747163384462",
    webp: "https://ik.imagekit.io/ruvozwl79/second.webp?updatedAt=1747163548524",
  },
  {
    avif: "https://ik.imagekit.io/ruvozwl79/third.avif?updatedAt=1747163384027",
    webp: "https://ik.imagekit.io/ruvozwl79/second.webp?updatedAt=1747163548524",
  },
];

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
      {/* 🔁 Sliding Image Track */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out z-0"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentImage * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <picture>
              <source srcSet={image.avif} type="image/avif" />
              <source srcSet={image.webp} type="image/webp" />
              <img
                src={image.webp}
                loading={index === 0 ? "eager" : "lazy"}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
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
                asChild
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-600 border border-red-600 hover:bg-cyber-red/90 hover:text-white rounded-full px-8 transition-colors duration-300"
                asChild
              >
                <Link to="/technologies">Learn More</Link>
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
