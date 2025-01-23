// bootcampData.ts

import { StaticImageData } from 'next/image';
import cloudPractitionerImage from '@/app/assets/images/aws-certified-cloud-practitioner.jpeg';
import awsDeveloperAssociate from '@/app/assets/images/aws-developer-associate.jpeg';
import awsSolutionsArchitectAssociate from '@/app/assets/images/aws-solutions-architect-associate.jpg';
import awsSysOpsAdministratorAssociate from '@/app/assets/images/aws-certified-sysops-administrator.jpeg';
import awsDataEngineerAssociate from '@/app/assets/images/aws-data-engineer-associate.jpg';
import awsMachineLearningEngineerAssociate from '@/app/assets/images/aws-machine-learning-engineer-associate-2.jpeg';

export interface Bootcamp {
  id: number;
  name: string;
  code: string;
  href: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  duration: string;
  price: string;
  level: string;
  prerequisites: string[];
  keyTopics: string[];
  benefits: string[];
}

export const bootcamps: Bootcamp[] = [
  {
    id: 1,
    name: 'AWS Cloud Practitioner',
    code: 'CLF-C02',
    href: '/register',
    shortDescription: 'Learn about cloud concepts, billing, security, pricing and fundamental AWS cloud services.',
    fullDescription: 'The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology. This is a good starting point on the AWS Certification journey for individuals with no prior IT or cloud experience switching to a cloud career or for line-of-business employees looking for foundational cloud literacy.',
    imageSrc: cloudPractitionerImage,
    imageAlt: "AWS Cloud Practitioner bootcamp illustration",
    duration: '12 weeks',
    price: '$999',
    level: 'Foundational',
    prerequisites: [
      'Basic IT knowledge',
      'No prior AWS experience required',
      'Basic understanding of cloud computing concepts'
    ],
    keyTopics: [
      'Cloud Concepts',
      'Security and Compliance',
      'Technology',
      'Billing and Pricing',
      'AWS Global Infrastructure'
    ],
    benefits: [
      'Foundation for all AWS certifications',
      'Understanding of basic cloud concepts',
      'Knowledge of AWS core services',
      'Career advancement opportunities'
    ]
  },
  {
    id: 2,
    name: 'AWS Developer Associate',
    code: 'DVA-C02',
    href: '/register',
    shortDescription: 'Learn how to deploy, work with databases, serverless architecture and use AWS API.',
    fullDescription: 'AWS Certified Developer - Associate showcases skills and knowledge in developing, optimizing, packaging, and deploying applications, using CI/CD workflows, and identifying and resolving application issues. This certification is a good starting point on the AWS Certification journey for individuals in IT or cloud developer job roles.',
    imageSrc: awsDeveloperAssociate,
    imageAlt: "AWS Developer Associate bootcamp",
    duration: '16 weeks',
    price: '$1499',
    level: 'Associate',
    prerequisites: [
      'One or more years of hands-on experience developing and maintaining AWS applications',
      'In-depth knowledge of at least one high-level programming language',
      'Understanding of core AWS services'
    ],
    keyTopics: [
      'AWS SDK and CLI',
      'AWS Lambda and API Gateway',
      'DynamoDB and other AWS databases',
      'CI/CD Services',
      'Container Services'
    ],
    benefits: [
      'Advanced development skills on AWS',
      'Expertise in serverless architecture',
      'Proficiency in AWS development tools',
      'Higher salary potential'
    ]
  },
  {
    id: 3,
    name: 'AWS Solutions Architect Associate',
    code: 'SAA-C03',
    href: '/register',
    shortDescription: 'Learn how to architect the right combination of services to meet the technical scenario.',
    fullDescription: 'AWS Certified Solutions Architect - Associate is focused on the design of cost and performance optimized solutions. This is an ideal starting point for candidates with AWS Cloud or strong on-premises IT experience. This exam does not require deep hands-on coding experience, although familiarity with basic programming concepts would be an advantage.',
    imageSrc: awsSolutionsArchitectAssociate,
    imageAlt: "AWS Solutions Architect Associate bootcamp",
    duration: '16 weeks',
    price: '$1499',
    level: 'Associate',
    prerequisites: [
      'One year of hands-on experience with AWS',
      'Understanding of distributed systems',
      'Knowledge of networking concepts'
    ],
    keyTopics: [
      'AWS Architecture Best Practices',
      'High Availability and Scalability',
      'Storage Solutions',
      'Security Architecture',
      'Cost Optimization'
    ],
    benefits: [
      'Comprehensive understanding of AWS architecture',
      'Ability to design scalable solutions',
      'Enhanced problem-solving skills',
      'Industry recognition'
    ]
  },
  {
    id: 4,
    name: 'AWS SysOps Administrator Associate',
    code: 'SOA-C02',
    href: '/register',
    shortDescription: 'Learn how to scale and maintain AWS resources with a heavy focus on networking and deployment knowledge.',
    fullDescription: 'AWS Certified SysOps Administrator - Associate validates skills and knowledge in monitoring and maintaining AWS workloads, implementing security controls and networking concepts, performing business continuity procedures, and implementing cost and performance optimizations.',
    imageSrc: awsSysOpsAdministratorAssociate,
    imageAlt: "AWS SysOps Administrator Associate bootcamp",
    duration: '14 weeks',
    price: '$1399',
    level: 'Associate',
    prerequisites: [
      'One or more years of hands-on experience with AWS operations',
      'Experience with Linux or Windows administration',
      'Understanding of networking concepts'
    ],
    keyTopics: [
      'Monitoring and Logging',
      'High Availability',
      'Security and Compliance',
      'Automation and Optimization',
      'Disaster Recovery'
    ],
    benefits: [
      'Operational excellence expertise',
      'Advanced troubleshooting skills',
      'Security best practices knowledge',
      'Career advancement opportunities'
    ]
  },
  {
    id: 5,
    name: 'AWS Data Engineer Associate',
    code: 'DE1-C01',
    href: '/register',
    shortDescription: 'Learn the skills and knowledge required for the core data-related AWS services.',
    fullDescription: 'AWS Certified Data Engineer - Associate validates skills and knowledge in core data-related AWS services, ability to ingest and transform data, orchestrate data pipelines while applying programming concepts, design data models, manage data life cycles, and ensure data quality.',
    imageSrc: awsDataEngineerAssociate,
    imageAlt: "AWS Certified Data Engineer Associate bootcamp",
    duration: '16 weeks',
    price: '$1599',
    level: 'Associate',
    prerequisites: [
      'Experience with data engineering concepts',
      'Understanding of database systems',
      'Basic programming knowledge'
    ],
    keyTopics: [
      'Data Collection and Ingestion',
      'Data Storage and Management',
      'Data Processing and Analysis',
      'Data Security and Governance',
      'Data Pipeline Orchestration'
    ],
    benefits: [
      'Expertise in AWS data services',
      'Data pipeline development skills',
      'Data modeling proficiency',
      'Enhanced career opportunities'
    ]
  },
  {
    id: 6,
    name: 'AWS Machine Learning Engineer Associate',
    code: 'MLA-C01',
    href: '/register',
    shortDescription: 'Learn how to design, implement, deploy, and maintain machine learning (ML) solutions on AWS.',
    fullDescription: 'AWS Certified Machine Learning Engineer - Associate validates technical ability in implementing ML workloads in production and operationalizing them. Boost your career profile and credibility, and position yourself for in-demand machine learning job roles.',
    imageSrc: awsMachineLearningEngineerAssociate,
    imageAlt: "AWS Certified Machine Learning Engineer Associate bootcamp",
    duration: '20 weeks',
    price: '$1799',
    level: 'Associate',
    prerequisites: [
      'Experience with machine learning concepts',
      'Python programming skills',
      'Understanding of deep learning frameworks'
    ],
    keyTopics: [
      'Data Engineering for ML',
      'Exploratory Data Analysis',
      'Modeling',
      'ML Implementation and Operations',
      'Security and Compliance'
    ],
    benefits: [
      'ML implementation expertise',
      'AWS ML services proficiency',
      'Production deployment skills',
      'High-demand career path'
    ]
  }
];