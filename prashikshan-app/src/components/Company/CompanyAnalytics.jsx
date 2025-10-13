import React from 'react'
import { TrendingUp, Users, Calendar, Award, Download, Filter } from 'lucide-react'

function CompanyAnalytics() {
  const stats = [
    { label: 'Total Applications', value: '298', icon: Users, color: 'text-blue-600' },
    { label: 'Conversion Rate', value: '28%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Active Interns', value: '24', icon: Award, color: 'text-purple-600' },
    { label: 'Avg. Rating', value: '4.5', icon: Calendar, color: 'text-orange-600' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Insights into your internship program performance</p>
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="btn-primary">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">+12% from last month</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Application Trends */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Application Trends</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart visualization would go here</p>
        </div>
      </div>

      {/* Department Distribution */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Department Distribution</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Pie chart visualization would go here</p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Skill Gap Analysis</h3>
            <p className="text-sm text-blue-800">
              High demand for React and Machine Learning skills. Consider offering specialized training programs.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Top Performing Colleges</h3>
            <p className="text-sm text-green-800">
              IIT Delhi and IIT Bombay show highest conversion rates. Strengthen partnerships with these institutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyAnalytics
