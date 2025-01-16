// AwsFeatures.tsx

import React from 'react';
import { Cloud, Lock, Server } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    name: 'Hands-on AWS Experience',
    description:
      'Get practical experience with real AWS services. Deploy and manage cloud infrastructure in guided lab sessions.',
    icon: Cloud,
  },
  {
    name: 'AWS Security Best Practices',
    description: 'Learn how to implement robust security measures in AWS, including identity management and encryption.',
    icon: Lock,
  },
  {
    name: 'Scalable Architecture Design',
    description: 'Master the art of designing scalable and resilient cloud architectures using AWS services.',
    icon: Server,
  },
]

const AwsFeatures: React.FC = () => {
  return (
    <div className="aws-features-wrapper bg-gradient-to-b from-white to-white-100">
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-[#4361ee]">Learn AWS Cloud</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Accelerate Your Cloud Career
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our AWS Cloud Practitioner bootcamp equips you with the skills and knowledge to excel in cloud computing. Here's what sets our program apart:
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#4361ee]" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="aws-features-image-container">
              <Image
                alt="AWS Cloud Services Diagram"
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=2432&ixlib=rb-4.0.3"
                width={2432}
                height={1442}
                className="aws-features-image rounded-xl shadow-2xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwsFeatures;