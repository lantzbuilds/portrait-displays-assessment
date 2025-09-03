# Portrait Displays Assessment App

## Description
This is a full-stack demo application for Portrait Displays, featuring a responsive React client built with Vite, TypeScript, and Chakra UI, and a Node.js Express server serving mock product data. The app demonstrates UI responsiveness, accessibility, and basic API integration.

## Features
- Responsive and accessible UI using Chakra UI
- Light/dark mode toggle (default: dark)
- Fetch and display product data from Express backend
- Sort products by name
- ARIA labels for improved accessibility

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repository:
	```sh
	git clone https://github.com/lantzbuilds/portrait-displays-assessment.git
	cd portrait-displays-assessment
	```
2. Install dependencies for both client and server:
	```sh
	cd server && npm install
	cd ../client && npm install
	```

### Running the App
1. Start the Express server:
	```sh
	cd server
	npm run dev
	```
2. Start the React client:
	```sh
	cd ../client
	npm run dev
	```
3. Open your browser at `http://localhost:5173` (default Vite port)

## Usage
- Click "Refresh Products" to load the product list.
- Click "Sort by Name" to sort products alphabetically.
- Toggle color mode using the button in the top right.

## Project Structure
- `client/` — React frontend (Vite, Chakra UI, TypeScript)
- `server/` — Express backend (TypeScript)

## Accessibility
- ARIA labels on buttons and table headers
- Responsive layout for desktop, tablet, and mobile
- Color contrast and keyboard navigation

## License
MIT License
