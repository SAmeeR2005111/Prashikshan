import React, { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { 
  Home, 
  Search, 
  User, 
  BookOpen, 
  LogOut, 
  Bell,
  TrendingUp,
  Calendar,
  Award
} from 'lucide-react'
import StudentHome from './StudentHome'
import InternshipSearch from './InternshipSearch'
import StudentProfile from './StudentProfile'
import StudentLogbook from './StudentLogbook'
import SkillReadiness from './SkillReadiness'

function StudentDashboard() {
  const { user, logout } = useAuth()
  const location = useLocation()

  const navigation = [
    { id: 'home', label: 'Dashboard', icon: Home, path: '/student' },
    { id: 'search', label: 'Find Internships', icon: Search, path: '/student/search' },
    { id: 'profile', label: 'Profile', icon: User, path: '/student/profile' },
    { id: 'logbook', label: 'Logbook', icon: BookOpen, path: '/student/logbook' },
    { id: 'skills', label: 'Skill Readiness', icon: Award, path: '/student/skills' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Prashikshan</h1>
              <span className="ml-4 text-sm text-gray-500">Student Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </div>
              <button 
                onClick={logout}
                className="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <nav className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path || (item.id === 'home' && location.pathname === '/student');
                  return (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<StudentHome />} />
              <Route path="search" element={<InternshipSearch />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="logbook" element={<StudentLogbook />} />
              <Route path="skills" element={<SkillReadiness />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
