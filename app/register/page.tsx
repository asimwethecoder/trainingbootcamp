'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface RegisterFormData {
  fullName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  experience: string
}

export default function RegisterPage() {
  const [formData, setFormData] = React.useState<RegisterFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    experience: 'beginner'
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - reduced height */}
      <nav className="bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 h-12 flex items-center">
          <Link 
            href="/bootcamp" 
            className="flex items-center text-gray-600 hover:text-gray-900 text-sm"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Schedule
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Register for AWS Bootcamp
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>
              
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className="w-full p-1.5 text-sm border border-gray-300 rounded"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-1.5 text-sm border border-gray-300 rounded"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-1.5 text-sm border border-gray-300 rounded"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-3 pt-3 border-t">
              <h2 className="text-base font-semibold text-gray-900">Professional Information</h2>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full p-1.5 text-sm border border-gray-300 rounded"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="w-full p-1.5 text-sm border border-gray-300 rounded"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  AWS Experience Level *
                </label>
                <select
                  id="experience"
                  required
                  className="w-full p-1.5 text-sm border border-gray-300 rounded"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="beginner">Beginner - No AWS Experience</option>
                  <option value="intermediate">Intermediate - Some AWS Experience</option>
                  <option value="advanced">Advanced - Experienced AWS User</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#4361ee] text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}