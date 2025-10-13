import React, { useState } from 'react'
import { CheckCircle, XCircle, Clock, Eye, MessageSquare, Calendar, User, Building2 } from 'lucide-react'

function ApprovalSystem() {
  const [selectedTab, setSelectedTab] = useState('applications')

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
      company: 'TechCorp India',
      position: 'Software Development Intern',
      appliedDate: '2024-01-15',
      status: 'Pending',
      documents: ['Resume', 'Cover Letter', 'Academic Transcript'],
      skills: ['React', 'Node.js', 'JavaScript', 'MongoDB'],
      experience: '2 years',
      projects: 5,
      coverLetter: 'I am passionate about full-stack development and have been working on various projects...',
      priority: 'High'
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
      company: 'DataFlow Solutions',
      position: 'Data Science Intern',
      appliedDate: '2024-01-14',
      status: 'Pending',
      documents: ['Resume', 'Cover Letter', 'Academic Transcript', 'Project Portfolio'],
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      experience: '1.5 years',
      projects: 8,
      coverLetter: 'Strong background in machine learning and data analysis with multiple projects...',
      priority: 'Medium'
    }
  ]

  const logbookEntries = [
    {
      id: 1,
      student: {
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@college.edu',
        college: 'BITS Pilani'
      },
      company: 'StartupXYZ',
      position: 'Product Management Intern',
      entryDate: '2024-01-20',
      title: 'API Development and Testing',
      description: 'Worked on developing REST APIs for user management module. Implemented CRUD operations and wrote comprehensive tests.',
      tasks: 'Created user endpoints, implemented validation, wrote unit tests',
      learnings: 'Learned about API design patterns and testing best practices',
      hours: 8,
      challenges: 'Understanding the existing codebase architecture',
      status: 'Pending Review',
      mentorFeedback: null,
      priority: 'High'
    }
  ]

  const handleApprove = (itemId, type) => {
    console.log(`Approving ${type} with ID: ${itemId}`)
    // Here you would typically update the backend
  }

  const handleReject = (itemId, type) => {
    console.log(`Rejecting ${type} with ID: ${itemId}`)
    // Here you would typically update the backend
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'text-green-600 bg-green-50'
      case 'Pending':
      case 'Pending Review':
        return 'text-yellow-600 bg-yellow-50'
      case 'Rejected':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'Pending':
      case 'Pending Review':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'Rejected':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 bg-red-50'
      case 'Medium':
        return 'text-yellow-600 bg-yellow-50'
      case 'Low':
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
          <h1 className="text-2xl font-bold text-gray-900">Approval System</h1>
          <p className="text-gray-600">Review and approve student applications, logbook entries, and reports</p>
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Feedback
          </button>
          <button className="btn-primary">
            Bulk Actions
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="card">
        <div className="flex space-x-4 border-b border-gray-200">
          {[
            { id: 'applications', label: 'Applications', count: applications.filter(app => app.status === 'Pending').length },
            { id: 'logbook', label: 'Logbook Entries', count: logbookEntries.filter(entry => entry.status === 'Pending Review').length },
            { id: 'reports', label: 'Final Reports', count: 0 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Applications Tab */}
      {selectedTab === 'applications' && (
        <div className="space-y-4">
          {applications.map((application) => (
            <div key={application.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(application.status)}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{application.student.name}</h3>
                    <p className="text-primary-600 font-medium">{application.position} at {application.company}</p>
                    <p className="text-sm text-gray-500">{application.student.college} • Applied {application.appliedDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                    {application.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(application.priority)}`}>
                    {application.priority}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Student Information</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Course:</strong> {application.student.course}</p>
                    <p><strong>CGPA:</strong> {application.student.cgpa}</p>
                    <p><strong>Experience:</strong> {application.experience}</p>
                    <p><strong>Projects:</strong> {application.projects}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {application.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Cover Letter</h4>
                <p className="text-sm text-gray-600 line-clamp-3">{application.coverLetter}</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{application.appliedDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Building2 className="w-4 h-4" />
                    <span>{application.company}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="btn-secondary text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </button>
                  <button 
                    onClick={() => handleReject(application.id, 'application')}
                    className="btn-secondary text-sm text-red-600 hover:text-red-700"
                  >
                    <XCircle className="w-4 h-4 mr-1" />
                    Reject
                  </button>
                  <button 
                    onClick={() => handleApprove(application.id, 'application')}
                    className="btn-primary text-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Approve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Logbook Entries Tab */}
      {selectedTab === 'logbook' && (
        <div className="space-y-4">
          {logbookEntries.map((entry) => (
            <div key={entry.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(entry.status)}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{entry.student.name}</h3>
                    <p className="text-primary-600 font-medium">{entry.title}</p>
                    <p className="text-sm text-gray-500">{entry.student.college} • {entry.entryDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(entry.status)}`}>
                    {entry.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(entry.priority)}`}>
                    {entry.priority}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 mb-3">{entry.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Tasks Completed:</strong> {entry.tasks}
                  </div>
                  <div>
                    <strong>Key Learnings:</strong> {entry.learnings}
                  </div>
                  <div>
                    <strong>Hours Worked:</strong> {entry.hours}
                  </div>
                  <div>
                    <strong>Challenges:</strong> {entry.challenges}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{entry.entryDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{entry.hours} hours</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="btn-secondary text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </button>
                  <button 
                    onClick={() => handleReject(entry.id, 'logbook')}
                    className="btn-secondary text-sm text-red-600 hover:text-red-700"
                  >
                    <XCircle className="w-4 h-4 mr-1" />
                    Reject
                  </button>
                  <button 
                    onClick={() => handleApprove(entry.id, 'logbook')}
                    className="btn-primary text-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Approve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ApprovalSystem
