/**
 * NYA HeroCarousel — MOYASA-style full-width carousel
 * Multiple hero images with smooth transitions
 */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_IMAGES = [
  "/manus-storage/WhatsAppImage2026-05-17at13.32.13_d280202e.jpeg", // Professional team photo
  "/manus-storage/extracted_image_2_759fd824.png",  // Community service
  "/manus-storage/extracted_image_3_43a49aae.png",  // Leadership
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-16">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Welcome Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center px-4">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nandi Youth
              <br />
              <span style={{ color: "oklch(0.88 0.12 75)" }}>Assembly</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Uniting Voices, Driving Impact
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all hover:bg-white/20"
          style={{ background: "rgba(255,255,255,0.1)" }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all hover:bg-white/20"
          style={{ background: "rgba(255,255,255,0.1)" }}
          aria-label="Next slide"
        >
          <ChevronRight size={32} className="text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8" : "w-2"
              }`}
              style={{
                background: index === currentSlide ? "white" : "rgba(255,255,255,0.5)",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
