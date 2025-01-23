'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { bootcamps } from '../../data/bootcampData' // Move data to separate file

interface BootcampCardProps {
  bootcamp: typeof bootcamps[0]
}

const BootcampCard: React.FC<BootcampCardProps> = ({ bootcamp }) => {
  const router = useRouter()

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-[400px] bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
        <Image
          src={bootcamp.imageSrc}
          alt={bootcamp.imageAlt}
          className="w-full h-full object-contain p-4"
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-medium text-white">
          {bootcamp.name}
        </h3>
        <p className="mt-2 text-base text-gray-300">{bootcamp.shortDescription}</p>
        <p className="mt-2 text-base text-gray-300">{bootcamp.fullDescription}</p>
        <button
          onClick={() => router.push('/register')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Register Now
        </button>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 transition-colors duration-300">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
          {bootcamp.name}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
          {bootcamp.shortDescription}
        </p>
      </div>
    </div>
  )
}

const FeaturesBootcamps: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {bootcamps.map((bootcamp) => (
            <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesBootcamps