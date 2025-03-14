"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://web-assets.same.dev/432854307/2004338848.jpeg',
    title: 'Welcome to Knot N Threads',
    subtitle: 'a SAREE FOR EVERY OCCASION',
    cta: 'EXPLORE NOW',
    link: '/collections/chettinad-cotton'
  },
  // You can add more slides here when you have them
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30">
              <div className="container-custom h-full flex flex-col justify-center items-center text-center text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-6 uppercase tracking-wider">{slide.subtitle}</p>
                <Link href={slide.link}>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/20"
                  >
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/40 hover:bg-black/60"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/40 hover:bg-black/60"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
