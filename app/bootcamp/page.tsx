'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

interface Session {
  id: number
  date: string
  title: string
  time: string
}

export default function BootcampSchedule() {
  const [selectedSession, setSelectedSession] = useState<number | null>(null)

  const sessions: Session[] = [
    {
      id: 1,
      date: "Tuesday, November 12",
      title: "Cloud Concepts I",
      time: "19:00 - 21:00 SAST"
    },
    {
      id: 2,
      date: "Thursday, November 14",
      title: "Cloud Economics & Migration",
      time: "19:00 - 21:00 SAST"
    },
    {
      id: 3,
      date: "Tuesday, November 19",
      title: "Security & Compliance",
      time: "19:00 - 21:00 SAST"
    },
    {
      id: 4,
      date: "Thursday, November 21",
      title: "Core AWS Services",
      time: "19:00 - 21:00 SAST"
    }
  ]

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
          
          <h1 className="text-xl font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
            AWS Cloud Practitioner
          </h1>

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
                  <h3 className="font-medium mb-2">Session Details</h3>
                  <p className="text-gray-600">More details about this session coming soon...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}