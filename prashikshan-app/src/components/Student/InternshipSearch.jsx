import React, { useState } from 'react'
import { Search, MapPin, Clock, DollarSign, Filter, Star } from 'lucide-react'

function InternshipSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    location: '',
    duration: '',
    industry: '',
    salary: ''
  })

  const internships = [
    {
      id: 1,
      company: 'TechCorp India',
      position: 'Software Development Intern',
      location: 'Bangalore',
      duration: '6 months',
      salary: '₹15,000/month',
      skills: ['React', 'Node.js', 'JavaScript', 'MongoDB'],
      description: 'Join our dynamic team to work on cutting-edge web applications. You will be involved in full-stack development and learn modern technologies.',
      rating: 4.5,
      applicants: 45,
      posted: '2 days ago',
      type: 'Remote',
      industry: 'Technology'
    },
    {
      id: 2,
      company: 'DataFlow Solutions',
      position: 'Data Science Intern',
      location: 'Hyderabad',
      duration: '4 months',
      salary: '₹12,000/month',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
      description: 'Work with real-world datasets to build predictive models and gain hands-on experience in data science.',
      rating: 4.2,
      applicants: 32,
      posted: '1 week ago',
      type: 'Hybrid',
      industry: 'Data Science'
    },
    {
      id: 3,
      company: 'CloudTech Systems',
      position: 'Cloud Engineering Intern',
      location: 'Mumbai',
      duration: '3 months',
      salary: '₹18,000/month',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Linux'],
      description: 'Learn cloud infrastructure management and deployment strategies in a fast-paced environment.',
      rating: 4.7,
      applicants: 28,
      posted: '3 days ago',
      type: 'On-site',
      industry: 'Cloud Computing'
    }
  ]

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesLocation = !filters.location || internship.location.toLowerCase().includes(filters.location.toLowerCase())
    const matchesDuration = !filters.duration || internship.duration.includes(filters.duration)
    const matchesIndustry = !filters.industry || internship.industry.toLowerCase().includes(filters.industry.toLowerCase())
    
    return matchesSearch && matchesLocation && matchesDuration && matchesIndustry
  })

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="card">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Internship</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by position, company, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="input-field"
            >
              <option value="">All Locations</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <select
              value={filters.duration}
              onChange={(e) => setFilters({...filters, duration: e.target.value})}
              className="input-field"
            >
              <option value="">Any Duration</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="6">6 months</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
            <select
              value={filters.industry}
              onChange={(e) => setFilters({...filters, industry: e.target.value})}
              className="input-field"
            >
              <option value="">All Industries</option>
              <option value="technology">Technology</option>
              <option value="data science">Data Science</option>
              <option value="cloud computing">Cloud Computing</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
            <select
              value={filters.salary}
              onChange={(e) => setFilters({...filters, salary: e.target.value})}
              className="input-field"
            >
              <option value="">Any Salary</option>
              <option value="0-10000">₹0 - ₹10,000</option>
              <option value="10000-15000">₹10,000 - ₹15,000</option>
              <option value="15000+">₹15,000+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            {filteredInternships.length} Internships Found
          </h2>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Sort by: Relevance</span>
          </div>
        </div>

        {filteredInternships.map((internship) => (
          <div key={internship.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{internship.position}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{internship.rating}</span>
                  </div>
                </div>
                <p className="text-lg text-primary-600 font-medium">{internship.company}</p>
                <p className="text-gray-600">{internship.description}</p>
              </div>
              <div className="text-right ml-4">
                <p className="text-lg font-semibold text-green-600">{internship.salary}</p>
                <p className="text-sm text-gray-500">{internship.applicants} applicants</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {internship.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{internship.duration}</span>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
                  {internship.type}
                </span>
                <span className="text-gray-400">•</span>
                <span>Posted {internship.posted}</span>
              </div>
              <div className="flex space-x-2">
                <button className="btn-secondary">Save</button>
                <button className="btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InternshipSearch
