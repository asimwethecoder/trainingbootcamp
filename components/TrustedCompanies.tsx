import React, { useEffect, useRef, useState } from 'react';

const TrustedCompanies: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const companies = [
    'AWS', 'Google Cloud', 'Microsoft Azure', 'IBM Cloud', 'Oracle Cloud',
    'AWS', 'Google Cloud', 'Microsoft Azure', 'IBM Cloud', 'Oracle Cloud' // Duplicated for seamless loop
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (isHovered) return;

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
  }, [isHovered]);

  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 mb-8">
          Trusted by Leading Cloud Innovators
        </h2>
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {companies.map((company, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 flex items-center justify-center h-16 w-48 mx-4 bg-gray-100 rounded-lg shadow-sm transition-all duration-300 ${isHovered ? 'hover:scale-105 hover:shadow-md animate-wiggle' : ''}`}
            >
              <span className="text-lg font-semibold text-[#4361ee]">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;