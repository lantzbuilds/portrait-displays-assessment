## Project Outline: Portrait Displays Assessment App

### 1. Project Setup
- Initialize a new project (monorepo with separate folders for frontend/backend)
- Set up TypeScript for both frontend and backend
- Install ChakraUI for UI components
- Configure linting, formatting, and basic scripts

### 2. Backend (Node.js)
- Use Express.js with TypeScript
- Create a static array of JSON objects to act as a mock database
- Implement 1-2 GET endpoints to serve the mock data
- Ensure CORS is enabled for local development

### 3. Frontend (React + ChakraUI)
- Scaffold a React app with TypeScript and Vite
- Install and configure ChakraUI
- Fetch data from the Node server endpoints
- Display data in a responsive, accessible UI
- Use ChakraUI components for layout, cards, buttons, etc.
- Add accessibility features (ARIA, keyboard navigation, color contrast)

### 4. Responsiveness & Accessibility
- Use ChakraUI's responsive props for layouts
- Test UI on different screen sizes
- Ensure all interactive elements are accessible

### 5. Testing & Validation
- Add basic unit tests for backend endpoints
- Add basic component tests for frontend
- Manual accessibility and responsiveness checks

### 6. Deployment (Optional)
- Prepare scripts for local and production builds
- Document setup and usage in README.md
# Specs

Create a simple app that runs on React, Node and Vite. Make a button or two that gets data (from JSON or something else) and presents some of the data on the page. Could populate a table, list, firstname/lastname, etc.

