import React from 'react'
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  MapPin,
  Calendar
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

function CompanyHome() {
  const {user, logout} = useAuth()
  console.log(user);
  const stats = [
    { label: 'Active Internships', value: '8', icon: FileText, color: 'text-blue-600' },
    { label: 'Total Applications', value: '156', icon: Users, color: 'text-green-600' },
    { label: 'Interviews Scheduled', value: '12', icon: Calendar, color: 'text-purple-600' },
    { label: 'Interns Onboarded', value: '24', icon: CheckCircle, color: 'text-orange-600' }
  ]

  const recentApplications = [
    {
      id: 1,
      student: 'Priya Sharma',
      position: 'Software Development Intern',
      college: 'IIT Delhi',
      appliedDate: '2024-01-15',
      status: 'Under Review',
      skills: ['React', 'Node.js', 'JavaScript'],
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      id: 2,
      student: 'Arjun Patel',
      position: 'Data Science Intern',
      college: 'IIIT Hyderabad',
      appliedDate: '2024-01-14',
      status: 'Interview Scheduled',
      skills: ['Python', 'Machine Learning', 'SQL'],
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl text-blue-600 font-bold mb-2">Welcome to Prashikshan, {user?.company}!</h1>
        <p className="text-primary-100 text-blue-600">
          Manage your internship programs and discover talented students ready to contribute to your organization.
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
              <div key={application.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${application.color}`} />
                    <div>
                      <p className="font-medium text-gray-900">{application.student}</p>
                      <p className="text-sm text-gray-600">{application.position}</p>
                      <p className="text-xs text-gray-500">{application.college}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${application.color}`}>{application.status}</p>
                    <p className="text-xs text-gray-500">{application.appliedDate}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {application.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CompanyHome
