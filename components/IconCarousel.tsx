import { useState } from 'react';
import { FaCode, FaServer, FaDatabase, FaCloud, FaRobot, FaLaptopCode, FaNetworkWired, FaMobileAlt, FaMicrochip, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const icons = [
  { icon: FaCode, label: 'Code' },
  { icon: FaServer, label: 'Server' },
  { icon: FaDatabase, label: 'Database' },
  { icon: FaCloud, label: 'Cloud' },
  { icon: FaRobot, label: 'AI' },
  { icon: FaLaptopCode, label: 'Laptop Code' },
  { icon: FaNetworkWired, label: 'Network' },
  { icon: FaMobileAlt, label: 'Mobile' },
  { icon: FaMicrochip, label: 'Microchip' },
  { icon: FaShieldAlt, label: 'Security' },
];

const IconCarousel = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative flex justify-center items-center h-64 overflow-hidden bg-pink-50 dark:bg-gray-900">
      <motion.div
        className="flex space-x-32"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', width: '200%' }} // Ensure the container is wide enough
      >
        {[...icons, ...icons].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className="relative mx-8 text-9xl text-indigo-600 dark:text-indigo-400"
              animate={{
                y: [0, -10, 0], // Bouncing effect
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}
            >
              <IconComponent />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default IconCarousel;