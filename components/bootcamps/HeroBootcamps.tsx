'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import awsTrainingHero from '@/app/assets/images/aws-training-hero.jpg'

const HeroBootcamps: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <Image
              src={awsTrainingHero} 
              alt="AWS Cloud Training"
              width={520}
              height={550}
              className="rounded-lg w-full h-auto shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 dark:text-white">
              AWS Certification Bootcamps
            </h2>
            <div className="space-y-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              <p>
                Transform your career with our comprehensive AWS certification bootcamps. 
                Whether you're starting your cloud journey or advancing to specialized roles, 
                our expert-led programs provide the perfect blend of theory and hands-on practice.
              </p>
              <p>
                From Cloud Practitioner to Solutions Architect, Developer, and specialized 
                certifications in Machine Learning and Data Engineering, we offer structured 
                learning paths tailored to your career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/register"
                  className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full border-2 border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300 text-center"
                >
                  Start Learning
                </Link>
                <Link
                  href="#features"
                  className="inline-block px-8 py-3 bg-transparent text-black dark:text-white rounded-full border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-center"
                >
                  Explore Bootcamps
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black dark:text-white">6+</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">AWS Certifications</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black dark:text-white">1000+</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Certified Students</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black dark:text-white">95%</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pass Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBootcamps