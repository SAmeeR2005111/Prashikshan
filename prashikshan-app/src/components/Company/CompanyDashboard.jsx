import React, { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { 
  Home, 
  Plus, 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  LogOut,
  Bell,
  Building2,
} from 'lucide-react'
import CompanyHome from './CompanyHome'
import PostInternship from './PostInternship'
import ManageApplications from './ManageApplications'
import InternProgress from './InternProgress'
import CompanyAnalytics from './CompanyAnalytics'

function CompanyDashboard() {
  const { user, logout } = useAuth()

  const location = useLocation()

  const navigation = [
    { id: 'home', label: 'Dashboard', icon: Home, path: '/company' },
    { id: 'post', label: 'Post Internship', icon: Plus, path: '/company/post' },
    { id: 'applications', label: 'Applications', icon: Users, path: '/company/applications' },
    { id: 'progress', label: 'Intern Progress', icon: FileText, path: '/company/progress' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/company/analytics' }
  ]

  return (
    <div className="min-h-screen bg-[#f3f6f8] font-sans">
      {/* LinkedIn-style Navbar */}
      <header className="navbar">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="flex items-center">
            <img src="https://static.licdn.com/sc/h/8w0ezo9bq8b0t4v4r0h6k8w0a" alt="LinkedIn Logo" className="h-8 mr-3" />
            <h1 className="text-2xl font-bold text-[#0a66c2]">Prashikshan</h1>
            <span className="ml-4 text-sm text-gray-500">Company Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#e7f3ff] text-[#0a66c2] px-3 py-1 rounded-full font-semibold hover:bg-[#d0e8ff] transition">Notifications</button>
            <img src={user?.photoURL || "https://randomuser.me/api/portraits/men/32.jpg"} alt="avatar" className="avatar" />
            <button onClick={logout} className="bg-[#0a66c2] hover:bg-[#004182] text-white px-4 py-2 rounded-full font-semibold transition">Logout</button>
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
                  
                  // Determine active state directly from the URL path
                  const isActive = location.pathname === item.path || (item.id === 'home' && location.pathname === '/company');
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
              <Route path="/" element={<CompanyHome/>}/>
              <Route path="/post" element={<PostInternship />} />
              <Route path="/applications" element={<ManageApplications />} />
              <Route path="/progress" element={<InternProgress /> }/>
              <Route path="/analytics" element={<CompanyAnalytics />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  )
}

export default CompanyDashboard
