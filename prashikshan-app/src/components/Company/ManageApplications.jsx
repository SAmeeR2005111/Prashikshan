import React, { useState } from 'react'
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, Star, MapPin, Calendar, Download } from 'lucide-react'

function ManageApplications() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const applications = [
    {
      id: 1,
      student: {
        name: 'Priya Sharma',
        email: 'priya.sharma@college.edu',
        college: 'IIT Delhi',
        course: 'Computer Science Engineering',
        cgpa: '8.7'
      },
      position: 'Software Development Intern',
      appliedDate: '2024-01-15',
      status: 'Under Review',
      skills: ['React', 'Node.js', 'JavaScript', 'MongoDB'],
      experience: '2 years',
      projects: 5,
      rating: 4.5
    },
    {
      id: 2,
      student: {
        name: 'Arjun Patel',
        email: 'arjun.patel@college.edu',
        college: 'IIIT Hyderabad',
        course: 'Data Science',
        cgpa: '9.2'
      },
      position: 'Data Science Intern',
      appliedDate: '2024-01-14',
      status: 'Shortlisted',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      experience: '1.5 years',
      projects: 8,
      rating: 4.8
    }
  ]

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.student.college.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || app.status.toLowerCase().replace(' ', '-') === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shortlisted':
        return 'text-blue-600 bg-blue-50'
      case 'Interview Scheduled':
        return 'text-purple-600 bg-purple-50'
      case 'Under Review':
        return 'text-yellow-600 bg-yellow-50'
      case 'Rejected':
        return 'text-red-600 bg-red-50'
      case 'Accepted':
        return 'text-green-600 bg-green-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Applications</h1>
          <p className="text-gray-600">Review and manage internship applications</p>
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
                placeholder="Search by name, position, or college..."
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
              <option value="under-review">Under Review</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="interview-scheduled">Interview Scheduled</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
            <button className="btn-secondary">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {filteredApplications.length} applications found
          </span>
        </div>

        {filteredApplications.map((application) => (
          <div key={application.id} className="card">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{application.student.name}</h3>
                    <p className="text-primary-600 font-medium">{application.position}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>{application.student.college}</span>
                      <span>•</span>
                      <span>{application.student.course}</span>
                      <span>•</span>
                      <span>CGPA: {application.student.cgpa}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{application.rating}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                      {application.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {application.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Experience</h4>
                    <p className="text-sm text-gray-600">{application.experience} • {application.projects} projects</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Contact</h4>
                    <p className="text-sm text-gray-600">{application.student.email}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Applied {application.appliedDate}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn-secondary text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </button>
                    <button className="btn-secondary text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      Resume
                    </button>
                    <select
                      value={application.status}
                      onChange={(e) => console.log(`Changing status to ${e.target.value}`)}
                      className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="Under Review">Under Review</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Interview Scheduled">Interview Scheduled</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
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

export default ManageApplications
