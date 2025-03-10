"use client"

import React, { useEffect, useState, useMemo, useRef } from 'react'

const links = [
  { name: 'Upcoming Hackathons', href: '#upcoming' },
  { name: 'Past Projects', href: '#past-projects' },
  { name: 'Preparation Tips', href: '#tips' },
  { name: 'AWS Resources', href: '#resources' },
]

const stats = [
  { name: 'Hackathons per year', value: 4 },
  { name: 'Participants', value: 500 },
  { name: 'AWS services explored', value: 30 },
  { name: 'Projects completed', value: 100 },
]

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  isVisible: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0)
  
  const animationConfig = useMemo(() => {
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60 FPS
    const totalFrames = duration / frameDuration
    const valueIncrement = value / totalFrames
    return { frameDuration, totalFrames, valueIncrement }
  }, [value])

  useEffect(() => {
    if (!isVisible) return;

    setCount(0)
    
    let currentCount = 0
    let frame = 0
    
    const timer = setInterval(() => {
      frame++
      currentCount = Math.min(currentCount + animationConfig.valueIncrement, value)
      
      setCount(Math.round(currentCount))
      
      if (frame === animationConfig.totalFrames) {
        clearInterval(timer)
      }
    }, animationConfig.frameDuration)

    return () => clearInterval(timer)
  }, [value, animationConfig, isVisible])

  return <span aria-live="polite">{count}{suffix}</span>
}

export default function Hackathon() {
  const [isVisible, setIsVisible] = useState(false)
  const hackathonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (hackathonRef.current) {
      observer.observe(hackathonRef.current)
    }

    return () => {
      if (hackathonRef.current) {
        observer.unobserve(hackathonRef.current)
      }
    }
  }, [])

  return (
    <div ref={hackathonRef} className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Hackathons</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            Ignite your AWS and coding skills through our high-energy, collaborative hackathons. Learn by doing, boost your portfolio, and connect with like-minded developers and AWS experts.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href} aria-label={`Navigate to ${link.name}`}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  <AnimatedNumber 
                    value={stat.value} 
                    suffix={stat.value >= 100 ? '+' : ''} 
                    isVisible={isVisible}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}