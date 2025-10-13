import React, { useState } from 'react'
import { User, Mail, Phone, MapPin, Calendar, Award, Download, Upload, Edit3 } from 'lucide-react'

function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@college.edu',
    phone: '+91 98765 43210',
    college: 'Indian Institute of Technology, Delhi',
    course: 'Computer Science Engineering',
    year: '5th Semester',
    cgpa: '8.5',
    location: 'New Delhi, India',
    bio: 'Passionate computer science student with strong interest in web development and machine learning. Looking for internship opportunities to apply my skills in real-world projects.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning', 'SQL', 'Git'],
    projects: [
      {
        title: 'E-commerce Website',
        description: 'Full-stack e-commerce platform built with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        github: 'https://github.com/rajesh/ecommerce'
      },
      {
        title: 'ML Sentiment Analysis',
        description: 'Twitter sentiment analysis using Python and scikit-learn',
        technologies: ['Python', 'scikit-learn', 'NLTK', 'Pandas'],
        github: 'https://github.com/rajesh/sentiment-analysis'
      }
    ],
    achievements: [
      'Winner - College Hackathon 2023',
      'Google Summer of Code Participant',
      'Microsoft Student Partner',
      'Dean\'s List - 3 consecutive semesters'
    ]
  })

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="card">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
              <p className="text-gray-600">{profile.college}</p>
              <p className="text-sm text-gray-500">{profile.course} • {profile.year}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <button onClick={() => setIsEditing(false)} className="btn-secondary">
                  Cancel
                </button>
                <button onClick={handleSave} className="btn-primary">
                  Save Changes
                </button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)} className="btn-primary">
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">{profile.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">{profile.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">{profile.location}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Award className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">CGPA: {profile.cgpa}</span>
          </div>
        </div>

        {/* Bio */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About Me</h3>
          {isEditing ? (
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows="4"
            />
          ) : (
            <p className="text-gray-700">{profile.bio}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
            {isEditing && (
              <button className="text-primary-600 hover:text-primary-700 text-sm">
                Add Skill
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                {skill}
                {isEditing && (
                  <button className="ml-2 text-primary-500 hover:text-primary-700">×</button>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
            {isEditing && (
              <button className="text-primary-600 hover:text-primary-700 text-sm">
                Add Achievement
              </button>
            )}
          </div>
          <ul className="space-y-2">
            {profile.achievements.map((achievement, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-700">{achievement}</span>
                {isEditing && (
                  <button className="text-red-500 hover:text-red-700 text-sm">×</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
          {isEditing && (
            <button className="text-primary-600 hover:text-primary-700 text-sm">
              Add Project
            </button>
          )}
        </div>
        <div className="space-y-4">
          {profile.projects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{project.title}</h4>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  View on GitHub
                </a>
              </div>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Section */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Resume</h3>
          <div className="flex space-x-2">
            <button className="btn-secondary">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
            <button className="btn-primary">
              <Upload className="w-4 h-4 mr-2" />
              Upload New
            </button>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Current Resume: Rajesh_Kumar_Resume.pdf</p>
          <p className="text-xs text-gray-500">Last updated: January 15, 2024</p>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile
