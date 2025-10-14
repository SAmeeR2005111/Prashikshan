<!-- c:/Users/samee/prashikshan-complete/COMPLETE_SETUP.md -->
# Prashikshan - Developer Setup Guide

This document provides a quick guide for developers to set up and run the Prashikshan platform locally. For a comprehensive overview, please see the main [README.md](./README.md).

## 1. System Requirements

-   **Node.js**: Version 18.x or newer.
-   **Package Manager**: `npm` (v9+) or `yarn` (v1.22+).

## 2. Local Development Setup

Follow these universal commands for any operating system (Windows, macOS, Linux).

1.  **Navigate to the Application Directory**
    Open your terminal and change the directory to the core application folder.
    ```bash
    cd prashikshan-complete/prashikshan-app
    ```

2.  **Install Dependencies**
    This command downloads all the necessary packages defined in `package.json`.
    ```bash
    npm install
    ```

3.  **Start the Development Server**
    This will launch the Vite development server with Hot Module Replacement (HMR) enabled.
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or the next available port).
