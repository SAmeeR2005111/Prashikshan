import React, { useState } from 'react'
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, Star, MapPin, Calendar, Download, Mail, Phone } from 'lucide-react'

function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const students = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@college.edu',
      phone: '+91 98765 43210',
      college: 'IIT Delhi',
      course: 'Computer Science Engineering',
      year: '5th Semester',
      cgpa: '8.7',
      location: 'New Delhi',
      status: 'Placed',
      company: 'TechCorp India',
      position: 'Software Development Intern',
      startDate: '2024-01-15',
      progress: 85,
      mentor: 'Sarah Johnson',
      skills: ['React', 'Node.js', 'JavaScript', 'MongoDB'],
      achievements: ['Completed user authentication module', 'Implemented responsive design'],
      challenges: ['Learning new testing frameworks'],
      lastActivity: '2 days ago'
    },
    {
      id: 2,
      name: 'Arjun Patel',
      email: 'arjun.patel@college.edu',
      phone: '+91 98765 43211',
      college: 'IIIT Hyderabad',
      course: 'Data Science',
      year: '5th Semester',
      cgpa: '9.2',
      location: 'Hyderabad',
      status: 'In Progress',
      company: 'DataFlow Solutions',
      position: 'Data Science Intern',
      startDate: '2024-01-20',
      progress: 60,
      mentor: 'Mike Chen',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      achievements: ['Built predictive model with 85% accuracy'],
      challenges: ['Handling missing data in datasets'],
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      name: 'Sneha Reddy',
      email: 'sneha.reddy@college.edu',
      phone: '+91 98765 43212',
      college: 'NID Ahmedabad',
      course: 'Design',
      year: '5th Semester',
      cgpa: '8.9',
      location: 'Ahmedabad',
      status: 'Looking',
      company: null,
      position: null,
      startDate: null,
      progress: 0,
      mentor: null,
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      achievements: [],
      challenges: ['Finding suitable internship opportunities'],
      lastActivity: '3 days ago'
    }
  ]

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.course.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || student.status.toLowerCase().replace(' ', '-') === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Placed':
        return 'text-green-600 bg-green-50'
      case 'In Progress':
        return 'text-blue-600 bg-blue-50'
      case 'Looking':
        return 'text-yellow-600 bg-yellow-50'
      case 'At Risk':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Placed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'In Progress':
        return <Clock className="w-4 h-4 text-blue-500" />
      case 'Looking':
        return <Star className="w-4 h-4 text-yellow-500" />
      case 'At Risk':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600">Monitor and manage student internship progress</p>
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="btn-primary">
            Bulk Actions
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, college, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Status</option>
              <option value="placed">Placed</option>
              <option value="in-progress">In Progress</option>
              <option value="looking">Looking</option>
              <option value="at-risk">At Risk</option>
            </select>
            <button className="btn-secondary">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Students List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {filteredStudents.length} students found
          </span>
        </div>

        {filteredStudents.map((student) => (
          <div key={student.id} className="card">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                    <p className="text-primary-600 font-medium">{student.college}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>{student.course}</span>
                      <span>•</span>
                      <span>CGPA: {student.cgpa}</span>
                      <span>•</span>
                      <span>{student.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(student.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(student.status)}`}>
                      {student.status}
                    </span>
                  </div>
                </div>

                {student.company && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-1">Current Internship</h4>
                    <p className="text-sm text-gray-600">{student.position} at {student.company}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>Started: {student.startDate}</span>
                      <span>•</span>
                      <span>Progress: {student.progress}%</span>
                      <span>•</span>
                      <span>Mentor: {student.mentor}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {student.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Recent Achievements</h4>
                    <ul className="text-sm text-gray-600">
                      {student.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Current Challenges</h4>
                    <ul className="text-sm text-gray-600">
                      {student.challenges.slice(0, 2).map((challenge, index) => (
                        <li key={index} className="flex items-center space-x-1">
                          <XCircle className="w-3 h-3 text-red-500" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{student.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{student.phone}</span>
                    </div>
                    <span>Last activity: {student.lastActivity}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn-secondary text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </button>
                    <button className="btn-secondary text-sm">
                      <Mail className="w-4 h-4 mr-1" />
                      Contact
                    </button>
                    <button className="btn-primary text-sm">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentManagement
