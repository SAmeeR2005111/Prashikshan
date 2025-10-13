import React, { useState } from 'react'
import { Play, CheckCircle, Clock, Award, BookOpen, Target, TrendingUp } from 'lucide-react'

function SkillReadiness() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Skills', count: 12 },
    { id: 'technical', label: 'Technical', count: 6 },
    { id: 'soft', label: 'Soft Skills', count: 4 },
    { id: 'industry', label: 'Industry Specific', count: 2 }
  ]

  const learningPaths = [
    {
      id: 1,
      title: 'Professional Communication',
      category: 'soft',
      description: 'Learn effective communication skills for the workplace',
      duration: '2 weeks',
      progress: 75,
      status: 'in-progress',
      lessons: [
        { title: 'Email Etiquette', completed: true, duration: '30 min' },
        { title: 'Presentation Skills', completed: true, duration: '45 min' },
        { title: 'Team Communication', completed: false, duration: '40 min' },
        { title: 'Client Interaction', completed: false, duration: '35 min' }
      ],
      skills: ['Email Writing', 'Public Speaking', 'Active Listening', 'Professional Writing']
    },
    {
      id: 2,
      title: 'React Development Fundamentals',
      category: 'technical',
      description: 'Master the basics of React for frontend development',
      duration: '3 weeks',
      progress: 100,
      status: 'completed',
      lessons: [
        { title: 'Components & Props', completed: true, duration: '45 min' },
        { title: 'State Management', completed: true, duration: '60 min' },
        { title: 'Hooks & Lifecycle', completed: true, duration: '50 min' },
        { title: 'Routing & Navigation', completed: true, duration: '40 min' }
      ],
      skills: ['React', 'JavaScript', 'JSX', 'Component Architecture']
    },
    {
      id: 3,
      title: 'Data Analysis with Python',
      category: 'technical',
      description: 'Learn data analysis techniques using Python and pandas',
      duration: '4 weeks',
      progress: 40,
      status: 'in-progress',
      lessons: [
        { title: 'Python Basics', completed: true, duration: '60 min' },
        { title: 'Pandas Introduction', completed: true, duration: '45 min' },
        { title: 'Data Visualization', completed: false, duration: '50 min' },
        { title: 'Statistical Analysis', completed: false, duration: '55 min' }
      ],
      skills: ['Python', 'Pandas', 'Data Visualization', 'Statistics']
    }
  ]

  const assessments = [
    {
      id: 1,
      title: 'Technical Skills Assessment',
      description: 'Test your programming and technical knowledge',
      questions: 25,
      duration: '45 minutes',
      status: 'available',
      score: null
    },
    {
      id: 2,
      title: 'Communication Skills Test',
      description: 'Evaluate your professional communication abilities',
      questions: 15,
      duration: '30 minutes',
      status: 'completed',
      score: 85
    },
    {
      id: 3,
      title: 'Industry Readiness Quiz',
      description: 'Assess your readiness for industry internships',
      questions: 20,
      duration: '35 minutes',
      status: 'available',
      score: null
    }
  ]

  const filteredPaths = selectedCategory === 'all' 
    ? learningPaths 
    : learningPaths.filter(path => path.category === selectedCategory)

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50'
      case 'in-progress':
        return 'text-blue-600 bg-blue-50'
      case 'not-started':
        return 'text-gray-600 bg-gray-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'in-progress':
        return <Play className="w-5 h-5 text-blue-500" />
      case 'not-started':
        return <Clock className="w-5 h-5 text-gray-400" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Skill Readiness</h1>
          <p className="text-gray-600">Prepare yourself for successful internships</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Award className="w-4 h-4" />
          <span>Skill Score: 78/100</span>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">2</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-blue-600">3</p>
            </div>
            <Play className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available</p>
              <p className="text-2xl font-bold text-gray-600">7</p>
            </div>
            <BookOpen className="w-8 h-8 text-gray-600" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Hours</p>
              <p className="text-2xl font-bold text-purple-600">24</p>
            </div>
            <Clock className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="card">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Learning Paths</h2>
        {filteredPaths.map((path) => (
          <div key={path.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  {getStatusIcon(path.status)}
                  <h3 className="text-lg font-semibold text-gray-900">{path.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(path.status)}`}>
                    {path.status.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{path.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="w-4 h-4" />
                    <span>{path.lessons.length} lessons</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{path.progress}%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${path.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Lessons</h4>
                <div className="space-y-2">
                  {path.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {lesson.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                        )}
                        <span className={`text-sm ${lesson.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Skills You'll Learn</h4>
                <div className="flex flex-wrap gap-1">
                  {path.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="btn-primary">
                {path.status === 'completed' ? 'Review' : path.status === 'in-progress' ? 'Continue' : 'Start Learning'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Assessments */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skill Assessments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{assessment.title}</h3>
                {assessment.score && (
                  <span className="text-lg font-bold text-green-600">{assessment.score}%</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-3">{assessment.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span>{assessment.questions} questions</span>
                <span>{assessment.duration}</span>
              </div>
              <button className={`w-full py-2 px-4 rounded-lg font-medium ${
                assessment.status === 'completed' 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'btn-primary'
              }`}>
                {assessment.status === 'completed' ? 'Retake Assessment' : 'Start Assessment'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillReadiness
