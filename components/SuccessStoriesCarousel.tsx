'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  photo: string
  quote: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    quote: "The AWS bootcamp was a game-changer for my career. The hands-on experience was invaluable.",
    role: "Cloud Engineer at Tech Co."
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    quote: "I went from a complete beginner to passing my AWS certification in just 3 months!",
    role: "Cloud Architect"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    photo: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    quote: "The instructors were incredibly supportive and the community was amazing.",
    role: "Cloud Consultant"
  },
  // Add more testimonials as needed
]

const SuccessStoriesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Adjust for faster/slower scroll
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Success Stories
        </h2>
        <div 
          ref={scrollRef}
          className="mt-16 flex overflow-x-hidden"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <figure className="bg-white p-8 rounded-2xl shadow-lg">
                <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image 
                    src={testimonial.photo} 
                    alt={testimonial.name} 
                    width={40} 
                    height={40} 
                    className="rounded-full" 
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SuccessStoriesCarousel