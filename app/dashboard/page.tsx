'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  ChevronLeft, 
  ChevronDown, 
  ChevronUp, 
  BookOpen,
  ArrowRight, 
  AlertCircle
} from 'lucide-react'

// ... sessions array stays the same ...

export default function BootcampSchedule() {
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);


  const [user, setUser] = useState(null)
  const [registeredSessions, setRegisteredSessions] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Here you would fetch user data and registered sessions from AppSync
    const fetchUserData = async () => {
      try {
        // Implement AppSync queries here
        // const { data } = await API.graphql(graphqlOperation(getUser, { id: userId }))
        // setUser(data.getUser)
        // const sessionsData = await API.graphql(graphqlOperation(listUserSessions, { userId }))
        // setRegisteredSessions(sessionsData.data.listUserSessions.items)
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-32 bg-gray-200 rounded-lg" />
          <div className="h-64 bg-gray-200 rounded-lg" />
        </div>
      </div>
    )
  }
  if (!user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-lg font-medium">Please log in to view your dashboard</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation with animation */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link 
            href="/" 
            className="flex items-center text-gray-600 hover:text-gray-900 transition-all 
                     hover:scale-105 transform duration-300 group"
          >
            <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 transform
                      ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header with enhanced design */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8 
                      transform hover:scale-[1.02] transition-all duration-300
                      hover:shadow-xl">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-600 to-[#4361ee] mb-4">
            AWS Cloud Practitioner Bootcamp
          </h1>
          <div className="flex items-start space-x-3 text-gray-600">
            <Clock className="h-5 w-5 mt-1 flex-shrink-0 animate-pulse text-[#4361ee]" />
            <div>
              <p className="font-medium">All sessions run from 19:00 to 21:00 SAST.</p>
              <p className="text-sm mt-1 text-gray-500">Complete the pre-session materials before each class for the best learning experience.</p>
            </div>
          </div>
        </div>

        {/* Schedule List with enhanced animations */}
        <div className="space-y-6">
          {registeredSessions.map((session, index) => (
            <div 
              key={session.id}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden
                         transition-all duration-500 transform hover:shadow-lg
                         ${fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                         ${hoveredCard === session.id ? 'scale-[1.02]' : 'scale-100'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(session.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Session Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setSelectedSession(selectedSession === session.id ? null : session.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-[#4361ee]">
                      <Calendar className={`h-5 w-5 transition-transform duration-300
                                       ${hoveredCard === session.id ? 'rotate-12' : 'rotate-0'}`} />
                      <span className="font-medium">{session.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#4361ee] transition-colors">
                      {session.title}
                    </h3>
                    <p className="text-gray-600">{session.time}</p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm
                                   transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                      {session.domain}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-[#4361ee] transition-colors p-2 rounded-full
                                   hover:bg-blue-50 transform duration-300">
                    {selectedSession === session.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Instructor Info */}
                <div className="flex items-center space-x-4 mt-4 p-4 bg-gray-50 rounded-lg
                               transform transition-all duration-300 hover:bg-blue-50">
                  <div className={`w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center
                                 transform transition-all duration-300
                                 ${hoveredCard === session.id ? 'rotate-12 scale-110' : ''}`}>
                    <Users className="h-6 w-6 text-[#4361ee]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{session.instructor.name}</h4>
                    <p className="text-gray-600 text-sm">{session.instructor.title}</p>
                  </div>
                </div>
              </div>

              {/* Expanded Content with smooth animation */}
              <div 
                className={`
                  border-t border-gray-100 transition-all duration-500 ease-in-out
                  ${selectedSession === session.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                `}
              >
                <div className="p-6 space-y-6">
                  {/* Topics with hover effects */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {session.topics.map((topic, index) => (
                        <li key={index} className="flex items-start space-x-2 group">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0
                                               group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prerequisites with enhanced styling */}
                  {session.prerequisites && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Prerequisites:</h4>
                      <ul className="space-y-2">
                        {session.prerequisites.map((prerequisite, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-600
                                                   hover:text-gray-900 transition-colors">
                            <ArrowRight className="h-4 w-4 text-blue-500" />
                            <span>{prerequisite}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Materials with hover effects */}
                  {session.materials && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Session Materials:</h4>
                      <div className="space-y-2">
                        {session.materials.map((material, index) => (
                          <a
                            key={index}
                            href={material.url}
                            className="flex items-center space-x-2 text-[#4361ee] hover:text-blue-700
                                     p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
                          >
                            <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform" />
                            <span>{material.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Registration Button with animation */}
                  <div className="pt-4 flex justify-end">
                    <Link
                      href={`/register?session=${session.id}`}
                      className="bg-[#4361ee] text-white px-6 py-2 rounded-lg
                               hover:bg-blue-700 transition-all duration-300
                               transform hover:scale-105 hover:shadow-lg
                               hover:translate-x-2 group"
                    >
                      <span className="flex items-center">
                        Register for this Session
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-[#4361ee] rounded-xl
                       shadow-lg text-center transform hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your AWS Journey?</h3>
          <p className="text-blue-100 mb-6">Register for the full bootcamp and get access to all sessions.</p>
          <Link
            href="/register"
            className="inline-flex items-center bg-white text-[#4361ee] px-8 py-3 rounded-lg
                     hover:bg-blue-50 transition-all duration-300 transform hover:scale-105
                     hover:shadow-lg font-medium group"
          >
            <span>Register for Full Bootcamp</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
