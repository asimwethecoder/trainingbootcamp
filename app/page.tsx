'use client'

import Link from 'next/link'
import { Calendar, Cloud, Star, ArrowUp, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "6 Live Sessions",
      description: "Interactive training with AWS experts over 3 weeks"
    },
    {
      icon: Cloud,
      title: "Hands-on Labs",
      description: "Practice with real AWS services and infrastructure"
    },
    {
      icon: Star,
      title: "Expert Support",
      description: "Get guidance from certified AWS professionals"
    }
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center
                      transition-all duration-1000 transform
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="floating text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Master AWS Cloud Computing
          <span className="block text-[#4361ee] mt-2">Become AWS Certified</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
          Join our comprehensive AWS Cloud Practitioner bootcamp and start your
          cloud journey with hands-on experience.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/register" className="btn-primary">
            Register Now
          </Link>
          <Link href="/bootcamp" className="btn-secondary">
            View Schedule
          </Link>
        </div>

        <ChevronDown 
          className="w-6 h-6 mx-auto mt-16 text-gray-400 animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group ${hoveredCard === index ? 'z-10' : 'z-0'}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <feature.icon className={`feature-icon ${hoveredCard === index ? 'pulsing' : ''}`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#4361ee]">
                {feature.title}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-[#4361ee] text-white p-4 rounded-full 
                   shadow-lg hover:shadow-xl transition-all duration-300 
                   hover:scale-110 hover:rotate-12 
                   ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </main>
  )
}