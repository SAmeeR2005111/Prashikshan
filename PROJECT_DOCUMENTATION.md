<!-- c:/Users/samee/prashikshan-complete/PROJECT_DOCUMENTATION.md -->
# 📝 Prashikshan - Technical Documentation

## 1. Introduction

Prashikshan is a web-based platform built with **React**, **Vite**, and **Tailwind CSS**. It aims to provide a seamless internship management experience for students, companies, and faculty members. This document outlines the technical architecture, component structure, and key implementation details for developers contributing to the project.

## 2. Core Technologies

-   **Frontend Framework**: React 18 (using Hooks and Functional Components)
-   **Build Tool**: Vite (for fast development and optimized builds)
-   **Styling**: Tailwind CSS (for a utility-first CSS workflow)
-   **Routing**: `react-router-dom` for client-side routing.
-   **State Management**: React Context API (`AuthContext`) for authentication state.
-   **Icons**: `lucide-react` for lightweight and consistent icons.
-   **Data Visualization**: `recharts` for analytics dashboards.

## 3. Directory Structure

The project follows a standard Vite + React structure, with the main application code located inside the `prashikshan-app` directory.

```
prashikshan-complete/
├── prashikshan-app/         # Main application source
│   ├── public/              # Static assets
│   └── src/                 # Source code
│       ├── assets/          # Images, fonts, etc.
│       ├── components/      # Reusable UI components
│       │   ├── Login.jsx
│       │   ├── Student/
│       │   ├── Company/
│       │   └── Faculty/
│       ├── contexts/        # React Context providers
│       │   └── AuthContext.jsx
│       ├── App.jsx          # Main application component with routing
│       ├── main.jsx         # React DOM entry point
│       └── index.css        # Global styles and Tailwind directives
├── .gitignore
├── README.md
└── vercel.json              # Vercel deployment configuration
```

## 4. Architectural Concepts

### 4.1 Component-Based Architecture

The UI is broken down into a hierarchy of reusable components. To maintain a clean and scalable structure, components are organized by user role (Student, Company, Faculty) within `src/components/`.

### 4.2 Routing

-   **Router Setup**: `react-router-dom` is configured in `src/App.jsx` to define all application routes.
-   **Role-Based Dashboards**: The application features three main dashboard layouts: `StudentDashboard`, `CompanyDashboard`, and `FacultyDashboard`. Each dashboard has its own nested routes for its specific features.
-   **Protected Routes**: The `AuthContext` is designed to be used with a protected route mechanism. Routes for dashboards should be wrapped to check for a valid, authenticated user and the correct role before rendering.

### 4.3 State Management

-   **Authentication State**: The `AuthContext` (`src/contexts/AuthContext.jsx`) provides a global state for the logged-in user, their role, and authentication status. This avoids prop-drilling and simplifies access to user data across the app.
-   **Component State**: Standard React hooks like `useState` and `useReducer` are used for managing local component state (e.g., form data, UI toggles).

### 4.4 Styling with Tailwind CSS

-   Styling is primarily handled by **Tailwind CSS utility classes**.
-   The configuration file `tailwind.config.js` is set up for easy customization of the theme (colors, fonts, etc.).
-   Base styles and Tailwind layers are defined in `src/index.css`.

## 5. Scripts

The `package.json` in the `prashikshan-app` directory contains the following key scripts:

-   `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
-   `npm run build`: Bundles the application for production into the `dist` directory.
-   `npm run preview`: Serves the production build locally to preview it.

## 6. Deployment

The application is configured for seamless deployment on Vercel.

-   **Configuration**: The `vercel.json` file in the root directory instructs Vercel to use `prashikshan-app` as the project source.
-   **Build Command**: Vercel will automatically use `npm run build`.
-   **Output Directory**: Vercel will detect the output directory as `dist`.

No special environment variables are required for the frontend prototype to build and deploy. For more details on getting started, refer to the main README.md.
