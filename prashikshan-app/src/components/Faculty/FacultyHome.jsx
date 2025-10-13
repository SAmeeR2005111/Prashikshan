import React from 'react'
import { 
  Users, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  AlertCircle,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

function FacultyHome() {
  const {user, logout} = useAuth();
  const stats = [
    { label: 'Total Students', value: '156', icon: Users, color: 'text-blue-600' },
    { label: 'Placed Students', value: '89', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Pending Approvals', value: '12', icon: Clock, color: 'text-yellow-600' },
    { label: 'Active Internships', value: '45', icon: BookOpen, color: 'text-purple-600' }
  ]

  const recentActivities = [
    {
      id: 1,
      student: 'Priya Sharma',
      action: 'Applied for internship',
      company: 'TechCorp India',
      position: 'Software Development Intern',
      time: '2 hours ago',
      status: 'pending',
      icon: Clock
    },
    {
      id: 2,
      student: 'Arjun Patel',
      action: 'Logbook entry submitted',
      company: 'DataFlow Solutions',
      position: 'Data Science Intern',
      time: '4 hours ago',
      status: 'approved',
      icon: CheckCircle
    },
    {
      id: 3,
      student: 'Sneha Reddy',
      action: 'Internship completed',
      company: 'CloudTech Systems',
      position: 'UI/UX Design Intern',
      time: '1 day ago',
      status: 'completed',
      icon: Award
    }
  ]

  const studentStatus = [
    {
      category: 'Placed',
      count: 89,
      percentage: 57,
      color: 'bg-green-500',
      students: [
        { name: 'Priya Sharma', company: 'TechCorp India', position: 'Software Developer' },
        { name: 'Arjun Patel', company: 'DataFlow Solutions', position: 'Data Scientist' }
      ]
    },
    {
      category: 'In Progress',
      count: 45,
      percentage: 29,
      color: 'bg-blue-500',
      students: [
        { name: 'Rajesh Kumar', company: 'StartupXYZ', position: 'Product Manager' }
      ]
    },
    {
      category: 'Looking',
      count: 22,
      percentage: 14,
      color: 'bg-yellow-500',
      students: [
        { name: 'Vikram Singh', college: 'IIT Delhi', skills: ['React', 'Node.js'] }
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-50'
      case 'pending':
        return 'text-yellow-600 bg-yellow-50'
      case 'completed':
        return 'text-blue-600 bg-blue-50'
      case 'attention':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'completed':
        return <Award className="w-4 h-4 text-blue-500" />
      case 'attention':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl text-blue-600 font-bold mb-2">Welcome to Prashikshan, {user?.name}!</h1>
        <p className="text-primary-100 text-blue-600">
          Monitor and guide your students' internship journey with comprehensive oversight tools.
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
        {/* Recent Activities */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity) => {
              const Icon = activity.icon
              return (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon className={`w-5 h-5 mt-1 ${activity.status === 'approved' ? 'text-green-500' : activity.status === 'pending' ? 'text-yellow-500' : activity.status === 'completed' ? 'text-blue-500' : 'text-red-500'}`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.student}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.company} • {activity.position}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Student Status Overview */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Student Status Overview</h2>
          <div className="space-y-4">
            {studentStatus.map((status, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{status.category}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300">
                      <div className={`w-3 h-3 rounded-full ${status.color}`} style={{ width: `${status.percentage}%` }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{status.count}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {status.students.slice(0, 2).map((student, studentIndex) => (
                    <div key={studentIndex} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{student.name}</span>
                      <span className="text-gray-500">
                        {student.company ? `${student.company} • ${student.position}` : 
                         student.college ? `${student.college}` : 
                         student.skills ? student.skills.join(', ') : ''}
                      </span>
                    </div>
                  ))}
                  {status.students.length > 2 && (
                    <p className="text-xs text-gray-500">+{status.students.length - 2} more</p>
                  )}
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
            <Users className="w-6 h-6 text-primary-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Manage Students</p>
              <p className="text-sm text-gray-600">View and manage student profiles</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <CheckCircle className="w-6 h-6 text-secondary-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Review Applications</p>
              <p className="text-sm text-gray-600">Approve or reject applications</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">View Analytics</p>
              <p className="text-sm text-gray-600">Track program performance</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FacultyHome
