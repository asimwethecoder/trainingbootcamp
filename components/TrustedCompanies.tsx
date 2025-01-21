import React, { useEffect, useRef, useState } from 'react';
import { FaAws, FaGoogle, FaMicrosoft, FaLinux, FaGithub } from 'react-icons/fa';
import { SiOracle, SiSalesforce, SiAdobe, SiSlack, SiDropbox, SiReact, SiVercel, SiPrisma, SiTerraform, SiRedhat } from 'react-icons/si';

const TrustedCompanies: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const companies = [
    { name: 'AWS', icon: FaAws },
    { name: 'Google Cloud', icon: FaGoogle },
    { name: 'Microsoft Azure', icon: FaMicrosoft },
    { name: 'Oracle Cloud', icon: SiOracle },
    { name: 'Salesforce', icon: SiSalesforce },
    { name: 'Adobe', icon: SiAdobe },
    { name: 'Slack', icon: SiSlack },
    { name: 'Dropbox', icon: SiDropbox },
    { name: 'React', icon: SiReact },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'Terraform', icon: SiTerraform },
    { name: 'Linux', icon: FaLinux },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Red Hat', icon: SiRedhat }
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

    const startScrolling = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    startScrolling();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  return (
    <div className="bg-white dark:bg-gray-900 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 dark:text-white mb-8">
          Trusted by Leading Cloud Innovators @
        </h2>
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...companies, ...companies].map((company, index) => {
            const IconComponent = company.icon;
            return (
              <div 
                key={index} 
                className={`flex-shrink-0 flex items-center justify-center h-16 w-48 mx-4 bg-white dark:bg-gray-900 rounded-full shadow-sm transition-all duration-300 ${isHovered ? 'hover:scale-105 hover:shadow-md animate-wiggle' : ''}`}
              >
                <IconComponent className="text-3xl text-[#4361ee] dark:text-[#6d86f1] mr-2" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{company.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;