import React, { useState } from 'react'
import { Plus, Calendar, Clock, CheckCircle, AlertCircle, FileText, Download } from 'lucide-react'
import { format } from 'date-fns'

function StudentLogbook() {
  const [showAddEntry, setShowAddEntry] = useState(false)
  const [newEntry, setNewEntry] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    title: '',
    description: '',
    tasks: '',
    learnings: '',
    hours: '',
    challenges: ''
  })

  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2024-01-15',
      title: 'Project Setup and Team Introduction',
      description: 'First day of internship at TechCorp India. Met the team and got familiar with the project structure.',
      tasks: 'Set up development environment, reviewed project documentation, attended team meeting',
      learnings: 'Learned about the company\'s development workflow and coding standards',
      hours: 8,
      challenges: 'Setting up the complex development environment took longer than expected',
      status: 'approved',
      mentorFeedback: 'Great start! Keep up the enthusiasm.'
    },
    {
      id: 2,
      date: '2024-01-16',
      title: 'Database Design and API Development',
      description: 'Worked on designing the database schema and started developing REST APIs.',
      tasks: 'Created database tables, implemented CRUD operations, wrote API documentation',
      learnings: 'Gained deeper understanding of database relationships and RESTful API design',
      hours: 7.5,
      challenges: 'Understanding the existing codebase architecture',
      status: 'pending',
      mentorFeedback: null
    }
  ])

  const handleAddEntry = (e) => {
    e.preventDefault()
    const entry = {
      id: entries.length + 1,
      ...newEntry,
      status: 'pending',
      mentorFeedback: null
    }
    setEntries([entry, ...entries])
    setNewEntry({
      date: format(new Date(), 'yyyy-MM-dd'),
      title: '',
      description: '',
      tasks: '',
      learnings: '',
      hours: '',
      challenges: ''
    })
    setShowAddEntry(false)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'rejected':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-50'
      case 'pending':
        return 'text-yellow-600 bg-yellow-50'
      case 'rejected':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const totalHours = entries.reduce((sum, entry) => sum + parseFloat(entry.hours || 0), 0)
  const approvedEntries = entries.filter(entry => entry.status === 'approved').length
  const pendingEntries = entries.filter(entry => entry.status === 'pending').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Internship Logbook</h1>
          <p className="text-gray-600">Track your daily activities and learning progress</p>
        </div>
        <button 
          onClick={() => setShowAddEntry(true)}
          className="btn-primary"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Entry
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Hours</p>
              <p className="text-2xl font-bold text-gray-900">{totalHours}</p>
            </div>
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approved Entries</p>
              <p className="text-2xl font-bold text-green-600">{approvedEntries}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Review</p>
              <p className="text-2xl font-bold text-yellow-600">{pendingEntries}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Add Entry Modal */}
      {showAddEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Add Logbook Entry</h2>
                <button 
                  onClick={() => setShowAddEntry(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleAddEntry} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      value={newEntry.date}
                      onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hours Worked</label>
                    <input
                      type="number"
                      step="0.5"
                      value={newEntry.hours}
                      onChange={(e) => setNewEntry({...newEntry, hours: e.target.value})}
                      className="input-field"
                      placeholder="8"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={newEntry.title}
                    onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                    className="input-field"
                    placeholder="Brief title for today's work"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={newEntry.description}
                    onChange={(e) => setNewEntry({...newEntry, description: e.target.value})}
                    className="input-field"
                    rows="3"
                    placeholder="What did you work on today?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tasks Completed</label>
                  <textarea
                    value={newEntry.tasks}
                    onChange={(e) => setNewEntry({...newEntry, tasks: e.target.value})}
                    className="input-field"
                    rows="2"
                    placeholder="List the specific tasks you completed"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Key Learnings</label>
                  <textarea
                    value={newEntry.learnings}
                    onChange={(e) => setNewEntry({...newEntry, learnings: e.target.value})}
                    className="input-field"
                    rows="2"
                    placeholder="What new skills or knowledge did you gain?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Challenges Faced</label>
                  <textarea
                    value={newEntry.challenges}
                    onChange={(e) => setNewEntry({...newEntry, challenges: e.target.value})}
                    className="input-field"
                    rows="2"
                    placeholder="What difficulties did you encounter and how did you overcome them?"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowAddEntry(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Add Entry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Entries List */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(entry.status)}
                <div>
                  <h3 className="font-semibold text-gray-900">{entry.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(entry.date), 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{entry.hours} hours</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(entry.status)}`}>
                {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700">{entry.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Tasks Completed:</h4>
                  <p className="text-sm text-gray-600">{entry.tasks}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Key Learnings:</h4>
                  <p className="text-sm text-gray-600">{entry.learnings}</p>
                </div>
              </div>

              {entry.challenges && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Challenges:</h4>
                  <p className="text-sm text-gray-600">{entry.challenges}</p>
                </div>
              )}

              {entry.mentorFeedback && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-1">Mentor Feedback:</h4>
                  <p className="text-sm text-blue-800">{entry.mentorFeedback}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Generate Report */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Generate Final Report</h3>
            <p className="text-gray-600">Create a comprehensive internship report from your logbook entries</p>
          </div>
          <button className="btn-primary">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentLogbook
