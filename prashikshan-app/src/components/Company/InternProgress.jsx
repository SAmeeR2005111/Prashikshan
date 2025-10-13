import React, { useState } from 'react'
import { Users, Calendar, CheckCircle, AlertCircle, Clock, MessageSquare, FileText, TrendingUp } from 'lucide-react'

function InternProgress() {
  const [selectedIntern, setSelectedIntern] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  const interns = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Software Development Intern',
      department: 'Engineering',
      startDate: '2024-01-15',
      duration: '6 months',
      progress: 75,
      status: 'On Track',
      mentor: 'Sarah Johnson',
      lastActivity: '2 days ago',
      totalHours: 240,
      logbookEntries: 24,
      completedTasks: 8,
      pendingTasks: 2
    },
    {
      id: 2,
      name: 'Priya Singh',
      position: 'Data Science Intern',
      department: 'Analytics',
      startDate: '2024-01-20',
      duration: '4 months',
      progress: 60,
      status: 'On Track',
      mentor: 'Mike Chen',
      lastActivity: '1 day ago',
      totalHours: 180,
      logbookEntries: 18,
      completedTasks: 6,
      pendingTasks: 3
    }
  ]

  const selectedInternData = selectedIntern ? interns.find(intern => intern.id === selectedIntern) : null

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track':
        return 'text-green-600 bg-green-50'
      case 'Needs Attention':
        return 'text-yellow-600 bg-yellow-50'
      case 'At Risk':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'On Track':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'Needs Attention':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case 'At Risk':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Intern Progress Tracking</h1>
          <p className="text-gray-600">Monitor and guide your interns' progress</p>
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">
            <FileText className="w-4 h-4 mr-2" />
            Generate Reports
          </button>
          <button className="btn-primary">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Feedback
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interns List */}
        <div className="lg:col-span-1">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Interns</h2>
            <div className="space-y-3">
              {interns.map((intern) => (
                <div
                  key={intern.id}
                  onClick={() => setSelectedIntern(intern.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedIntern === intern.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{intern.name}</h3>
                    {getStatusIcon(intern.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{intern.position}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{intern.progress}% Complete</span>
                    <span>{intern.totalHours}h</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${intern.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intern Details */}
        <div className="lg:col-span-2">
          {selectedInternData ? (
            <div className="space-y-6">
              {/* Intern Header */}
              <div className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{selectedInternData.name}</h2>
                    <p className="text-primary-600 font-medium">{selectedInternData.position}</p>
                    <p className="text-sm text-gray-500">{selectedInternData.department} • Mentor: {selectedInternData.mentor}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedInternData.status)}`}>
                      {selectedInternData.status}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">Last activity: {selectedInternData.lastActivity}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{selectedInternData.progress}%</div>
                    <div className="text-sm text-gray-500">Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{selectedInternData.totalHours}</div>
                    <div className="text-sm text-gray-500">Total Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{selectedInternData.completedTasks}</div>
                    <div className="text-sm text-gray-500">Tasks Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{selectedInternData.logbookEntries}</div>
                    <div className="text-sm text-gray-500">Logbook Entries</div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="card">
                <div className="flex space-x-4 border-b border-gray-200 mb-4">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'logbook', label: 'Logbook' },
                    { id: 'skills', label: 'Skills' },
                    { id: 'feedback', label: 'Feedback' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Recent Achievements</h3>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Completed user authentication module</span>
                          </li>
                          <li className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Implemented responsive design for mobile</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Current Challenges</h3>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2 text-sm text-gray-600">
                            <AlertCircle className="w-4 h-4 text-yellow-500" />
                            <span>Learning new testing frameworks</span>
                          </li>
                          <li className="flex items-center space-x-2 text-sm text-gray-600">
                            <AlertCircle className="w-4 h-4 text-yellow-500" />
                            <span>Understanding complex business logic</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'feedback' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Send Feedback</h3>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        rows="4"
                        placeholder="Provide feedback to the intern..."
                      ></textarea>
                      <button className="mt-2 btn-primary">Send Feedback</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="card text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Select an Intern</h3>
              <p className="text-gray-600">Choose an intern from the list to view their progress details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InternProgress
