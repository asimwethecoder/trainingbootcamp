'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import cloudPractitionerImage from '@/app/assets/images/aws-certified-cloud-practitioner.jpeg'
import awsDeveloperAssociate from '@/app/assets/images/aws-developer-associate.jpeg'
import awsSolutionsArchitectAssociate from '@/app/assets/images/aws-solutions-architect-associate.jpg'
import awsSysOpsAdministratorAssociate from '@/app/assets/images/aws-certified-sysops-administrator.jpeg'
import awsDataEngineerAssociate from '@/app/assets/images/aws-data-engineer-associate.jpg'
import awsMachineLearningEngineerAssociate from '@/app/assets/images/aws-machine-learning-engineer-associate-2.jpeg'

interface Bootcamp {
  id: number;
  name: string;
  href: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const bootcamps: Bootcamp[] = [
  {
    id: 1,
    name: 'AWS Cloud Practitioner (CLF-C02)',
    href: '#',
    description: 'Learn about cloud concepts, billing, security, pricing and fundamental AWS cloud services.',
    imageSrc: cloudPractitionerImage,
    imageAlt: "AWS Cloud Practitioner bootcamp illustration",
  },
  {
    id: 2,
    name: 'AWS Developer Associate (DVA-C02)',
    href: '#',
    description: 'Learn how to deploy, work with databases, serverless architecture and use AWS API.',
    imageSrc: awsDeveloperAssociate,
    imageAlt: "AWS Developer Associate bootcamp",
  },
  {
    id: 3,
    name: 'AWS Solutions Architect Associate (SAA-C03)',
    href: '#',
    description: 'Learn how to architect the right combination of services to meet the technical scenario.',
    imageSrc: awsSolutionsArchitectAssociate,
    imageAlt: "AWS Solutions Architect Associate bootcamp",
  },
  {
    id: 4,
    name: 'AWS SysOps Administrator Associate (SOA-C02)',
    href: '#',
    description: 'Learn how to scale and maintain AWS resources with a heavy focus on networking and deployment knowledge.',
    imageSrc: awsSysOpsAdministratorAssociate,
    imageAlt: "AWS SysOps Administrator Associate bootcamp",
  },
  {
    id: 5,
    name: 'AWS Data Engineer Associate (DE1-C01)',
    href: '#',
    description: 'Learn the skills and knowledge required for the core data-related AWS services.',
    imageSrc: awsDataEngineerAssociate,
    imageAlt: "AWS Certified Data Engineer Associate bootcamp",
  },
  {
    id: 6,
    name: 'AWS Machine Learning Engineer Associate (MLA-C01)',
    href: '#',
    description: 'Learn how to design, implement, deploy, and maintain machine learning (ML) solutions on AWS.',
    imageSrc: awsMachineLearningEngineerAssociate,
    imageAlt: "AWS Certified Machine Learning Engineer Associate bootcamp illustration",
  },
]

interface BootcampCardProps {
  bootcamp: Bootcamp;
}

const BootcampCard: React.FC<BootcampCardProps> = ({ bootcamp }) => (
  <div className="group relative overflow-hidden rounded-lg">
    <div className="relative w-full h-[400px] bg-gray-200 dark:bg-gray-700 transition-all duration-300 ease-in-out group-hover:opacity-75">
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
        <a href={bootcamp.href}>
          <span className="absolute inset-0" />
          {bootcamp.name}
        </a>
      </h3>
      <p className="mt-2 text-base text-gray-300">{bootcamp.description}</p>
    </div>
  </div>
)

const BootCamp: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">Our AWS Bootcamps</h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {bootcamps.map((bootcamp) => (
            <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BootCamp