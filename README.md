# Prashikshan - Complete Digital Internship Platform

## 📁 Project Structure

```
prashikshan-complete/
├── prashikshan-app/                 # Main application directory
│   ├── package.json                 # Dependencies and scripts
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── index.html                  # Main HTML file
│   └── src/                        # Source code directory
│       ├── main.jsx                # Application entry point
│       ├── App.jsx                 # Main application component
│       ├── index.css               # Global styles
│       ├── contexts/               # React contexts
│       │   └── AuthContext.jsx     # Authentication context
│       └── components/             # React components
│           ├── Login.jsx           # Login component
│           ├── Student/            # Student portal components
│           │   ├── StudentDashboard.jsx
│           │   ├── StudentHome.jsx
│           │   ├── InternshipSearch.jsx
│           │   ├── StudentProfile.jsx
│           │   ├── StudentLogbook.jsx
│           │   └── SkillReadiness.jsx
│           ├── Company/            # Company portal components
│           │   ├── CompanyDashboard.jsx
│           │   ├── CompanyHome.jsx
│           │   ├── PostInternship.jsx
│           │   ├── ManageApplications.jsx
│           │   ├── InternProgress.jsx
│           │   └── CompanyAnalytics.jsx
│           └── Faculty/            # Faculty portal components
│               ├── FacultyDashboard.jsx
│               ├── FacultyHome.jsx
│               ├── StudentManagement.jsx
│               ├── ApprovalSystem.jsx
│               └── FacultyAnalytics.jsx
└── README.md                       # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd prashikshan-complete/prashikshan-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎯 Features Overview

### 🎓 Student Portal
- **Dashboard**: Personalized view with internship recommendations
- **Search**: Advanced internship search with filters
- **Profile**: Professional profile management
- **Logbook**: Digital logbook with mentor feedback
- **Skills**: Pre-internship skill development courses

### 🏢 Company Portal
- **Dashboard**: Company overview and metrics
- **Post Jobs**: Easy internship posting system
- **Applications**: Manage and review applications
- **Progress**: Track intern progress and provide feedback
- **Analytics**: Comprehensive program analytics

### 🎓 Faculty Portal
- **Dashboard**: Student progress overview
- **Students**: Manage student profiles and progress
- **Approvals**: Review and approve applications/logbooks
- **Analytics**: Program performance insights

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router DOM
- **Date Handling**: date-fns

## 📱 Demo Instructions

1. **Login**: Use any credentials to explore the platform
2. **Role Selection**: Choose between Student, Company, or Faculty
3. **Explore**: Navigate through different modules
4. **Interactive**: Test search, filtering, and forms
5. **Responsive**: Test on different screen sizes

## 🎨 Key Components

### Authentication System
- Role-based login (Student/Company/Faculty)
- Protected routes for each user type
- Context-based state management

### Student Features
- Personalized dashboard with recommendations
- Advanced search and filtering
- Professional profile management
- Digital logbook with mentor feedback
- Skill readiness courses and assessments

### Company Features
- Easy internship posting
- Applicant management and filtering
- Interview scheduling
- Intern progress monitoring
- Comprehensive analytics

### Faculty Features
- Student progress oversight
- Application and logbook approval
- Program analytics and insights
- Curriculum improvement recommendations

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Structure
- **Components**: Organized by user type (Student/Company/Faculty)
- **Contexts**: Shared state management
- **Styling**: Tailwind CSS with custom components
- **Routing**: React Router with protected routes

## 📊 Impact & Benefits

### For Students
- Transparent internship process
- Skill development opportunities
- Authentic industry experience
- Career growth through real projects

### For Companies
- Access to skilled, pre-screened students
- Streamlined application management
- Progress tracking and feedback system
- Strong academia-industry partnerships

### For Educational Institutions
- Complete program oversight
- Quality assurance for internships
- Data-driven curriculum decisions
- NEP compliance and reporting

## 🚀 Future Enhancements

- Mobile application (iOS/Android)
- AI-powered student-company matching
- Advanced analytics and insights
- University management system integration
- Multi-language support
- Blockchain certificate verification

## 📄 License

This is a prototype demonstration for educational purposes.

---

**Prashikshan** - Bridging the Academia-Industry Gap through Digital Innovation
