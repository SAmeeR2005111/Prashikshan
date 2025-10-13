import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'

function PostInternship() {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    description: '',
    requirements: '',
    skills: [],
    location: '',
    duration: '',
    salary: '',
    startDate: '',
    endDate: '',
    type: 'On-site',
    maxApplicants: '',
    applicationDeadline: ''
  })

  const [newSkill, setNewSkill] = useState('')

  const handleAddSkill = (e) => {
    e.preventDefault()
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      })
      setNewSkill('')
    }
  }

  const handleRemoveSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Posting internship:', formData)
    alert('Internship posted successfully!')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Post New Internship</h1>
          <p className="text-gray-600">Create internship opportunities for students</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Internship Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="input-field"
                placeholder="e.g., Software Development Intern"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department *
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="input-field"
                required
              >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Data Science">Data Science</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="input-field"
              rows="4"
              placeholder="Describe the internship role, responsibilities, and what the intern will learn..."
              required
            />
          </div>
        </div>

        {/* Skills */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {formData.skills.map((skill, index) => (
              <span key={index} className="flex items-center space-x-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-primary-500 hover:text-primary-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          <form onSubmit={handleAddSkill} className="flex space-x-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="input-field flex-1"
              placeholder="Add a skill (e.g., React, Python, Marketing)"
            />
            <button type="submit" className="btn-primary">
              <Plus className="w-4 h-4 mr-1" />
              Add
            </button>
          </form>
        </div>

        {/* Submit */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="btn-secondary">
            Save as Draft
          </button>
          <button type="submit" className="btn-primary">
            Post Internship
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostInternship
