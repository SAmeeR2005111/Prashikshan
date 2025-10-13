import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { GraduationCap, Building2, Users } from 'lucide-react'

function Login() {
  const [selectedRole, setSelectedRole] = useState('student')
  const [formData, setFormData] = useState({
    email: 'email@test.com',
    password: 'Demo password',
    name: 'Demo name',
    college: 'Demo college',
    company: 'Demo Company'
  })
  const { login, user } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate login based on role
    const userData = {
      id: '1',
      name: formData.name || 'Demo User',
      email: formData.email || 'Demo Email',
      role: selectedRole || 'Demo Role',
      college: formData.college || 'Demo college',
      company: formData.company || 'Demo company'
    }
    login(userData)
    
    // Navigate based on role
    if (selectedRole === 'student') {
      navigate('/student')
    } else if (selectedRole === 'company') {
      console.log("navigated to /company")
      navigate('/company')
    } else if (selectedRole === 'faculty') {
      navigate('/faculty')
    }
  }

  const roleOptions = [
    { value: 'student', label: 'Student', icon: GraduationCap, description: 'Find internships and track your progress' },
    { value: 'company', label: 'Company', icon: Building2, description: 'Post internships and manage candidates' },
    { value: 'faculty', label: 'Faculty/Admin', icon: Users, description: 'Oversee internship programs and analytics' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Prashikshan</h1>
          <p className="text-xl text-gray-600">Digital Platform for Internship Management</p>
          <p className="text-sm text-gray-500 mt-2">Bridging the Academia-Industry Gap</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Choose Your Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {roleOptions.map((option) => {
                const Icon = option.icon
                return (
                  <button
                    key={option.value}
                    onClick={() => setSelectedRole(option.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedRole === option.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                    <h3 className="font-semibold text-gray-900">{option.label}</h3>
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="input-field"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="input-field"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {selectedRole === 'student' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College/University</label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({...formData, college: e.target.value})}
                  className="input-field"
                  placeholder="Enter your college name"
                />
              </div>
            )}

            {selectedRole === 'company' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="input-field"
                  placeholder="Enter your company name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="input-field"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="w-full btn-primary text-lg py-3">
              Enter Prashikshan Platform
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Demo Mode:</strong> This is a prototype. Use any credentials to explore the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login