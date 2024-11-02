'use client'

import Link from 'next/link'
import { Calendar, ChevronLeft, Clock } from 'lucide-react'

export default function BootcampSchedule() {
  const sessions = [
    {
      date: "Tuesday, November 12",
      title: "Cloud Concepts I",
      time: "19:00 - 21:00 SAST"
    },
    {
      date: "Thursday, November 14",
      title: "Cloud Economics & Migration",
      time: "19:00 - 21:00 SAST"
    },
    {
      date: "Tuesday, November 19",
      title: "Security & Compliance",
      time: "19:00 - 21:00 SAST"
    },
    {
      date: "Thursday, November 21",
      title: "Core AWS Services",
      time: "19:00 - 21:00 SAST"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Home
          </Link>
          <Link
            href="/register"
            className="bg-[#4361ee] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Register Now
          </Link>
        </div>
      </nav>

      {/* Schedule Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Bootcamp Schedule</h1>
          <div className="flex items-center text-gray-600 mb-8">
            <Clock className="h-5 w-5 mr-2" />
            <p>
              All sessions run from 19:00 to 21:00 SAST. Make sure to complete the
              pre-session materials before each class.
            </p>
          </div>

          <div className="space-y-6">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
              >
                <div className="flex items-center text-[#4361ee] mb-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium">{session.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {session.title}
                </h2>
                <p className="text-gray-600">{session.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#4361ee] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your AWS Journey?
          </h2>
          <p className="text-blue-100 mb-6">
            Join our next cohort starting November 12th, 2024
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-[#4361ee] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium"
          >
            Register for Bootcamp
          </Link>
        </div>
      </div>
    </div>
  )
}