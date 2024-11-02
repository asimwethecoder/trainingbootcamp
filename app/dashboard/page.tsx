/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { Calendar, BookOpen, CheckCircle, AlertCircle } from 'lucide-react'
import { User, Session } from '@/types'

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [registeredSessions, setRegisteredSessions] = useState<Session[]>([])
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
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* User Profile Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-600">Email</h3>
            <p>{user.email}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-600">Experience Level</h3>
            <p className="capitalize">{user.experience}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-600">Registered</h3>
            <p>{new Date(user.registrationDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold mb-4">Your Sessions</h2>
        <div className="space-y-4">
          {registeredSessions.map((session) => (
            <div key={session.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <div>
                    <h3 className="font-medium">{session.title}</h3>
                    <p className="text-sm text-gray-600">
                      {session.date} at {session.time}
                    </p>
                  </div>
                </div>
                {session.status === 'completed' && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </div>
              {session.materials && (
                <div className="mt-4 ml-9">
                  <h4 className="text-sm font-medium text-gray-600">Materials</h4>
                  <div className="mt-2 space-y-2">
                    {session.materials.map((material, index) => (
                      <a
                        key={index}
                        href={material.url}
                        className="flex items-center text-blue-500 hover:text-blue-600"
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        {material.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
