import React from 'react'
import { TrendingUp, Users, Calendar, Award, Download, Filter, GraduationCap, Building2 } from 'lucide-react'

function FacultyAnalytics() {
  const stats = [
    { label: 'Total Students', value: '156', icon: Users, color: 'text-blue-600' },
    { label: 'Placement Rate', value: '89%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Active Internships', value: '45', icon: Award, color: 'text-purple-600' },
    { label: 'Avg. Student Rating', value: '4.5', icon: Calendar, color: 'text-orange-600' }
  ]

  const companyStats = [
    { company: 'TechCorp India', students: 15, rating: 4.5, industry: 'Technology' },
    { company: 'DataFlow Solutions', students: 12, rating: 4.7, industry: 'Data Science' },
    { company: 'CloudTech Systems', students: 10, rating: 4.3, industry: 'Cloud Computing' },
    { company: 'StartupXYZ', students: 8, rating: 4.1, industry: 'Product Management' }
  ]

  const studentPerformance = [
    { name: 'Priya Sharma', department: 'Computer Science', cgpa: 8.7, skills: 12, projects: 5, rating: 4.5 },
    { name: 'Arjun Patel', department: 'Data Science', cgpa: 9.2, skills: 15, projects: 8, rating: 4.7 },
    { name: 'Sneha Reddy', department: 'Design', cgpa: 8.9, skills: 10, projects: 12, rating: 4.6 },
    { name: 'Rajesh Kumar', department: 'Computer Science', cgpa: 8.1, skills: 8, projects: 3, rating: 4.2 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Faculty Analytics</h1>
          <p className="text-gray-600">Comprehensive insights into your institution's internship program</p>
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
                  <p className="text-sm text-green-600">+8% from last semester</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Company Performance */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Partner Companies</h2>
          <div className="space-y-4">
            {companyStats.map((company, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{company.company}</p>
                  <p className="text-sm text-gray-600">{company.industry}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{company.students}</p>
                      <p className="text-xs text-gray-500">Students</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{company.rating}</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Performance */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Students</h2>
          <div className="space-y-4">
            {studentPerformance.map((student, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.department}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{student.cgpa}</p>
                      <p className="text-xs text-gray-500">CGPA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{student.skills}</p>
                      <p className="text-xs text-gray-500">Skills</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{student.rating}</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Placement Trends</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Department Distribution</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Pie chart visualization would go here</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Strategic Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Curriculum Enhancement</h3>
            <p className="text-sm text-blue-800">
              High demand for React and Machine Learning skills. Consider adding specialized courses in these areas.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Industry Partnerships</h3>
            <p className="text-sm text-green-800">
              TechCorp India and DataFlow Solutions show excellent student satisfaction. Strengthen these partnerships.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">Skill Development</h3>
            <p className="text-sm text-yellow-800">
              Significant gap in Machine Learning skills. Implement intensive ML training programs.
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Program Optimization</h3>
            <p className="text-sm text-purple-800">
              Current placement rate of 89% is excellent. Focus on maintaining quality while scaling up.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyAnalytics
