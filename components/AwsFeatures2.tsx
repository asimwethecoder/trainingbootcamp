import React from 'react';
import { ArrowUpDown, Cloud, Fingerprint, Lock } from 'lucide-react';

interface Feature {
 name: string;
 description: string;
 icon: React.ElementType;
}

const features: Feature[] = [
 {
   name: 'Free and Inclusive',
   description:
     'Open to participants globally at no cost, breaking down barriers to education.',
   icon: Cloud,
 },
 {
   name: 'Interactive Learning',
   description:
     'Engage in live Q&A sessions, utilize AWS Sandbox accounts, and connect with peers on Discord.',
   icon: Lock,
 },
 {
   name: 'Real-World Focus',
   description:
     'Practical application of AWS concepts to prepare you for the challenges of modern cloud computing.',
   icon: ArrowUpDown,
 },
 {
   name: 'Proven Success',
   description:
     '90% completion rate and 50% achieving AWS certification within 60 days.',
   icon: Fingerprint,
 },
]

const AwsFeatures2: React.FC = () => {
 return (
   <div className="bg-white py-24 sm:py-32">
     <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="mx-auto max-w-2xl lg:text-center">
         <h2 className="text-base font-semibold leading-7 text-[#4361ee]">Accessible Learning for All</h2>
         <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
           What Sets Us Apart?
         </p>
         <p className="mt-6 text-lg leading-8 text-gray-600">
           We believe education should be inclusive and barrier-free. That's why all our services are online, free, and globally accessible. To enhance accessibility further, we are exploring physical learning hubs.
         </p>
       </div>
       <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
         <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
           {features.map((feature) => (
             <div key={feature.name} className="relative pl-16">
               <dt className="text-base font-semibold leading-7 text-gray-900">
                 <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4361ee]">
                   <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                 </div>
                 {feature.name}
               </dt>
               <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
             </div>
           ))}
         </dl>
       </div>
     </div>
   </div>
 )
}

export default AwsFeatures2;