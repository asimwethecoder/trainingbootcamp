'use client'

import Link from 'next/link'
import { Calendar, Cloud, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Master AWS Cloud Computing
          <span className="block text-[#4361ee] mt-2">Become AWS Certified</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
          Join our comprehensive AWS Cloud Practitioner bootcamp and start your
          cloud journey with hands-on experience.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="bg-[#4361ee] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Register Now
          </Link>
          <Link
            href="/bootcamp"
            className="bg-white text-[#4361ee] px-8 py-3 rounded-lg border-2 border-[#4361ee] hover:bg-blue-50 transition-colors text-lg font-medium"
          >
            View Schedule
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <Calendar className="h-10 w-10 text-[#4361ee] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6 Live Sessions</h3>
            <p className="text-gray-600">
              Interactive training with AWS experts over 3 weeks
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <Cloud className="h-10 w-10 text-[#4361ee] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-on Labs</h3>
            <p className="text-gray-600">
              Practice with real AWS services and infrastructure
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <Star className="h-10 w-10 text-[#4361ee] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">
              Get guidance from certified AWS professionals
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}