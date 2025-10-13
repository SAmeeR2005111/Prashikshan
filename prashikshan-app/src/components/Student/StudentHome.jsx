import React from 'react'
import { 
  Users,
  TrendingUp, 
  Calendar, 
  Award, 
  BookOpen, 
  Search,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

function StudentHome() {
  const {user, logout} = useAuth();
  const stats = [
    { label: 'Applications Sent', value: '12', icon: TrendingUp, color: 'text-blue-600' },
    { label: 'Interviews Scheduled', value: '3', icon: Calendar, color: 'text-green-600' },
    { label: 'Skills Completed', value: '8/12', icon: Award, color: 'text-purple-600' },
    { label: 'Logbook Entries', value: '24', icon: BookOpen, color: 'text-orange-600' }
  ]

  const recentApplications = [
    {
      id: 1,
      company: 'TechCorp India',
      position: 'Software Development Intern',
      status: 'Under Review',
      appliedDate: '2024-01-15',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      id: 2,
      company: 'DataFlow Solutions',
      position: 'Data Science Intern',
      status: 'Interview Scheduled',
      appliedDate: '2024-01-12',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 3,
      company: 'CloudTech Systems',
      position: 'Cloud Engineering Intern',
      status: 'Rejected',
      appliedDate: '2024-01-10',
      icon: AlertCircle,
      color: 'text-red-600'
    }
  ]

  const recommendedInternships = [
    {
      id: 1,
      company: 'InnovateTech',
      position: 'Full Stack Developer Intern',
      location: 'Bangalore',
      duration: '6 months',
      skills: ['React', 'Node.js', 'MongoDB'],
      salary: '₹15,000/month'
    },
    {
      id: 2,
      company: 'AI Solutions Ltd',
      position: 'Machine Learning Intern',
      location: 'Hyderabad',
      duration: '4 months',
      skills: ['Python', 'TensorFlow', 'Data Analysis'],
      salary: '₹12,000/month'
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Product Management Intern',
      location: 'Mumbai',
      duration: '3 months',
      skills: ['Product Strategy', 'Analytics', 'User Research'],
      salary: '₹10,000/month'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-sky-100">
        <h1 className="text-2xl text-blue-600 font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-primary-100 text-blue-600">
          Ready to find your next internship opportunity? Let's continue your journey towards professional growth.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentApplications.map((application) => {
              const Icon = application.icon
              return (
                <div key={application.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${application.color}`} />
                    <div>
                      <p className="font-medium text-gray-900">{application.company}</p>
                      <p className="text-sm text-gray-600">{application.position}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${application.color}`}>{application.status}</p>
                    <p className="text-xs text-gray-500">{application.appliedDate}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recommended Internships */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recommended for You</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Browse All
            </button>
          </div>
          <div className="space-y-3">
            {recommendedInternships.map((internship) => (
              <div key={internship.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{internship.position}</h3>
                    <p className="text-sm text-gray-600">{internship.company} • {internship.location}</p>
                  </div>
                  <span className="text-sm font-medium text-primary-600">{internship.salary}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {internship.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{internship.duration}</span>
                  <button className="btn-primary text-xs py-1 px-3">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
            <Search className="w-6 h-6 text-primary-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Find Internships</p>
              <p className="text-sm text-gray-600">Browse available opportunities</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <BookOpen className="w-6 h-6 text-secondary-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Update Logbook</p>
              <p className="text-sm text-gray-600">Record your daily activities</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Award className="w-6 h-6 text-purple-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Skill Assessment</p>
              <p className="text-sm text-gray-600">Test your readiness</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentHome
