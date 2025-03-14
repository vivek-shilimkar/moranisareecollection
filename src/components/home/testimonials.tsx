"use client";

import React, { useState, useEffect } from 'react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Ananya Nair",
    date: "2025-03-10",
    rating: 5,
    text: "This saree is gorgeous. The quality and color are exactly as shown in the pictures."
  },
  {
    id: 2,
    name: "Meena",
    date: "2025-02-20",
    rating: 5,
    text: "Good Color combo"
  },
  {
    id: 3,
    name: "Amrita Anandh",
    date: "2025-01-27",
    rating: 5,
    text: "Nice saree. I liked the colour in person very much. Different combination in Sungudi sarees."
  },
  {
    id: 4,
    name: "Rita Lal",
    date: "2025-01-09",
    rating: 5,
    text: "This Sungudi saree is a must-have in every girl's wardrobe. I love its golden Checks."
  },
  {
    id: 5,
    name: "Krishna veni",
    date: "2025-03-05",
    rating: 5,
    text: "Searching for this sungudi color for longtime. Color was bright and quality of sungudi was good."
  },
  {
    id: 6,
    name: "Asha",
    date: "2025-02-18",
    rating: 5,
    text: "Loved the saree."
  },
  {
    id: 7,
    name: "MRIDULA KANNAN",
    date: "2025-01-22",
    rating: 5,
    text: "Good quality sari. First time I get sungudi sari, I get many good comments. Must buy for very lady. You keep blouse also please Knotnthreads company."
  },
  {
    id: 8,
    name: "Swati Mihra",
    date: "2025-01-07",
    rating: 5,
    text: "This is my third time buying saree, color is same as the image. love your product. Thank you for the great service."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 4; // Number of testimonials visible at once

  // Calculate average rating
  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - visibleTestimonials
          ? 0
          : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <div className="text-5xl font-light text-primary">{averageRating.toFixed(2)}</div>
          </div>

          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-6 h-6 ${index < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-600">{totalReviews} reviews</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4"
              >
                <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-primary">{testimonial.name}</h3>
                    <span className="text-xs text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm flex-grow">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: testimonials.length - visibleTestimonials + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-secondary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
