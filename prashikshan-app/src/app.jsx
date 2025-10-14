import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import StudentDashboard from './components/Student/StudentDashboard'
import CompanyDashboard from './components/Company/CompanyDashboard'
import FacultyDashboard from './components/Faculty/FacultyDashboard'
import { AuthProvider, useAuth } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/student/*" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
            <Route path="/company/*" element={<ProtectedRoute><CompanyDashboard /></ProtectedRoute>} />
            <Route path="/faculty/*" element={<ProtectedRoute><FacultyDashboard /></ProtectedRoute>} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  
  if (!user) {
    return <Navigate to="/login" />
  }
  
  return children
}

export default App