'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

interface Topic {
  title: string
  points: string[]
}

interface SessionDetails {
  id: number
  date: string
  title: string
  time: string
  sessionName: string
  sessionWeight: string
  summary: string
  topics: Topic[]
  skills: string[]
  objectives: string[]
  insights: string
}

const sessions: SessionDetails[] = [
  {
    id: 1,
    date: "Tuesday, November 12",
    title: "Session 1: Cloud Concepts",
    time: "19:00 - 21:00 SAST",
    sessionName: "Session 1",
    sessionWeight: "24% of scored content",
    summary: "This session covers the benefits of AWS Cloud, cloud migration strategies, and cloud economics. Key concepts include cost-saving mechanisms, global infrastructure benefits, and the AWS Well-Architected Framework.",
    topics: [
      {
        title: "Benefits of AWS Cloud",
        points: [
          "Value proposition of the AWS Cloud",
          "Economies of scale and cost savings",
          "Global infrastructure benefits",
          "High availability, elasticity, and agility advantages",
          "AWS Well-Architected Framework pillars"
        ]
      },
      {
        title: "Cloud Migration Strategies",
        points: [
          "AWS Cloud Adoption Framework (AWS CAF)",
          "Migration benefits and strategies",
          "Reduced business risk approaches",
          "ESG performance improvements",
          "Operational efficiency gains"
        ]
      },
      {
        title: "Cloud Economics",
        points: [
          "Fixed costs vs. variable costs",
          "On-premises vs. cloud costs",
          "Licensing strategies (BYOL)",
          "Right-sizing concepts",
          "Automation benefits with AWS CloudFormation"
        ]
      }
    ],
    skills: [
      "Evaluate cloud vs. on-premises costs",
      "Identify appropriate migration strategies",
      "Apply Well-Architected Framework principles",
      "Understand global infrastructure benefits"
    ],
    objectives: [
      "Define AWS Cloud value proposition",
      "Understand cloud economics principles",
      "Identify design principles of AWS Cloud",
      "Comprehend migration strategies"
    ],
    insights: "Provides foundational AWS Cloud knowledge, introducing critical concepts for migration, cost optimization, and operational improvements."
  },
  {
    id: 2,
    date: "Thursday, November 14",
    title: "Session 2: Security and Compliance",
    time: "19:00 - 21:00 SAST",
    sessionName: "Session 2",
    sessionWeight: "30% of scored content",
    summary: "This session focuses on the AWS Shared Responsibility Model, security best practices, and compliance requirements. Attendees learn about IAM, MFA, encryption, and monitoring tools.",
    topics: [
      {
        title: "AWS Shared Responsibility Model",
        points: [
          "Customer responsibilities on AWS",
          "AWS responsibilities",
          "Shared responsibilities",
          "Service-dependent responsibility shifts",
          "Security best practices"
        ]
      },
      {
        title: "Security Services and Features",
        points: [
          "IAM fundamentals and best practices",
          "Root account protection",
          "MFA implementation",
          "Security groups and network ACLs",
          "AWS WAF and Shield protection"
        ]
      },
      {
        title: "Compliance and Governance",
        points: [
          "AWS Artifact and compliance documentation",
          "Geographic compliance considerations",
          "Industry-specific compliance needs",
          "Encryption options (at rest and in transit)",
          "Monitoring and auditing tools"
        ]
      }
    ],
    skills: [
      "Implement AWS shared responsibility model",
      "Configure basic security settings",
      "Understand compliance requirements",
      "Protect AWS resources"
    ],
    objectives: [
      "Master shared responsibility concepts",
      "Implement security best practices",
      "Understand compliance frameworks",
      "Configure access management"
    ],
    insights: "Equips attendees with essential security knowledge and compliance frameworks for managing AWS environments securely and responsibly."
  },
  {
    id: 3,
    date: "Tuesday, November 19",
    title: "Session 3: Cloud Technology and Services",
    time: "19:00 - 21:00 SAST",
    sessionName: "Session 3",
    sessionWeight: "34% of scored content",
    summary: "This session provides an overview of core and advanced AWS services for compute, storage, and networking, along with guidance on selecting the right services for specific use cases.",
    topics: [
      {
        title: "Core AWS Services",
        points: [
          "Compute services (EC2, Lambda, ECS)",
          "Storage solutions (S3, EBS, EFS)",
          "Database services (RDS, DynamoDB)",
          "Networking components (VPC, Route 53)",
          "Global infrastructure elements"
        ]
      },
      {
        title: "Advanced Services",
        points: [
          "Application integration services",
          "Analytics and ML services",
          "Management and monitoring tools",
          "Security and identity services",
          "Developer tools and capabilities"
        ]
      },
      {
        title: "Service Selection",
        points: [
          "Choosing appropriate compute options",
          "Selecting storage solutions",
          "Database service selection criteria",
          "Networking service options",
          "Integration service choices"
        ]
      }
    ],
    skills: [
      "Deploy basic AWS services",
      "Select appropriate service options",
      "Understand service integration",
      "Implement basic architectures"
    ],
    objectives: [
      "Identify core AWS services",
      "Understand service categories",
      "Select appropriate services",
      "Define AWS infrastructure"
    ],
    insights: "Builds technical knowledge of AWS’s core and advanced services, enabling informed decisions when designing cloud architectures."
  },
  {
    id: 4,
    date: "Thursday, November 21",
    title: "Session 4: Billing, Pricing, and Support",
    time: "19:00 - 21:00 SAST",
    sessionName: "Session 4",
    sessionWeight: "12% of scored content",
    summary: "Covers AWS pricing options, cost management tools, and support plans, equipping participants with insights to optimize cloud expenses and navigate AWS support resources.",
    topics: [
      {
        title: "AWS Pricing Models",
        points: [
          "On-Demand vs Reserved Instances",
          "Spot Instances and Savings Plans",
          "Data transfer pricing",
          "Storage pricing tiers",
          "Support plan options"
        ]
      },
      {
        title: "Cost Management",
        points: [
          "AWS Cost Explorer usage",
          "AWS Budgets implementation",
          "Cost allocation tags",
          "AWS Organizations billing",
          "AWS Pricing Calculator"
        ]
      },
      {
        title: "Support and Resources",
        points: [
          "AWS Support plans comparison",
          "Technical documentation access",
          "AWS Trusted Advisor usage",
          "AWS Partner Network benefits",
          "AWS Professional Services"
        ]
      }
    ],
    skills: [
      "Calculate AWS costs",
      "Implement budgeting tools",
      "Use AWS support resources",
      "Manage AWS accounts"
    ],
    objectives: [
      "Understand AWS pricing models",
      "Implement cost management",
      "Access AWS resources",
      "Choose appropriate support"
    ],
    insights: "Provides financial insights on AWS pricing and support, essential for maximizing value and controlling cloud expenses."
  },
  {
    id: 5,
    date: "Tuesday, November 26",
    title: "Session 5: Exam Preparation I - Review and Practice",
    time: "19:00 - 21:00 SAST",
    sessionName: "Session 5",
    sessionWeight: "100% coverage",
    summary: "A comprehensive review session covering all AWS domains and providing practice questions to consolidate knowledge and prepare for the exam.",
    topics: [
      {
        title: "Comprehensive Domain Review",
        points: [
          "Cloud Concepts (24%)",
          "Security and Compliance (30%)",
          "Cloud Technology and Services (34%)",
          "Billing, Pricing, and Support (12%)"
        ]
      },
      {
        title: "Practice Question Strategies",
        points: [
          "Multiple choice question techniques",
          "Multiple response question approaches",
          "Time management strategies",
          "Question analysis methods",
          "Common question patterns"
        ]
      }
    ],
    skills: [
      "Apply exam techniques",
      "Practice time management",
      "Review key concepts",
      "Identify knowledge gaps"
    ],
    objectives: [
      "Master exam strategies",
      "Practice sample questions",
      "Review core concepts",
      "Build exam confidence"
    ],
    insights: "Reinforces key concepts and provides practical strategies for approaching the exam confidently."
  },
  {
    id: 6,
    date: "Thursday, November 28",
    title: "Session 6: Exam Preparation II - Final Review",
    time: "19:00 - 21:00 SAST",
    sessionName: "Session 6",
    sessionWeight: "100% coverage",
    summary: "A final review session with a mock exam, answer explanations, and exam-day preparation strategies to ensure readiness.",
    topics: [
      {
        title: "Mock Exam and Analysis",
        points: [
          "Full practice exam simulation",
          "Question analysis and review",
          "Answer explanation discussion",
          "Final concept clarification",
          "Last-minute tips and tricks"
        ]
      },
      {
        title: "Exam Day Preparation",
        points: [
          "Exam environment requirements",
          "Time management strategies",
          "Question handling techniques",
          "Common pitfalls to avoid",
          "Success strategies"
        ]
      }
    ],
    skills: [
      "Complete practice exams",
      "Review wrong answers",
      "Apply exam strategies",
      "Manage exam time"
    ],
    objectives: [
      "Final concept review",
      "Practice exam completion",
      "Strategy refinement",
      "Exam readiness confirmation"
    ],
    insights: "Prepares participants with a mock exam experience and last-minute guidance, setting them up for success on the actual test."
  }
];

export default function BootcampSchedule() {
  const [selectedSession, setSelectedSession] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-gray-600 border-2 border-transparent hover:border-[#4361ee] px-4 py-2 rounded-lg 
                     transition-all duration-300 hover:text-[#4361ee] flex items-center"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            <span className="ml-2">Back to Home</span>
          </Link>
          

          <Link
            href="/register"
            className="text-[#4361ee] border-2 border-[#4361ee] px-6 py-2 rounded-lg
                     transition-all duration-300 hover:shadow-lg hover:scale-105
                     hover:bg-blue-50"
          >
            Register Now
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Bootcamp Schedule</h1>
          <p className="text-gray-600 flex items-center">
            <Clock className="h-5 w-5 text-gray-400 mr-2" />
            All sessions run from 19:00 to 21:00 SAST. Make sure to complete the pre-session materials before each class.
          </p>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {sessions.map((session) => (
            <div 
              key={session.id}
              className="border rounded-lg p-4 hover:border-[#4361ee] transition-all duration-300"
            >
              <div className="flex items-center text-[#4361ee] mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{session.date}</span>
              </div>
              <h2 className="text-xl font-semibold">{session.title}</h2>
              <p className="text-gray-600">{session.time}</p>
              <p className="text-gray-600">{session.sessionName} - {session.sessionWeight}</p>
              
              <button
                onClick={() => setSelectedSession(
                  selectedSession === session.id ? null : session.id
                )}
                className="text-[#4361ee] hover:text-blue-700 mt-2 transition-colors"
              >
                {selectedSession === session.id ? 'Show less' : 'Show more'}
              </button>

              {selectedSession === session.id && (
                <div className="mt-4 pt-4 border-t">
                  <h3 className="font-medium mb-2">Session Summary</h3>
                  <p className="text-gray-600 mb-4">{session.summary}</p>

                  <h4 className="font-medium mt-4">Key Objectives:</h4>
                  <ul className="list-disc ml-6">
                    {session.objectives.map((objective, index) => (
                      <li key={index} className="text-gray-600">{objective}</li>
                    ))}
                  </ul>

                  <h4 className="font-medium mt-4">Insights:</h4>
                  <p className="text-gray-600">{session.insights}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
