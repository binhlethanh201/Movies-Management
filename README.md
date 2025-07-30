# React Movies Management System

This repository contains a modern React movies management application built with React Bootstrap for UI components and JSON Server for backend simulation. The app features a complete movie database experience including movie browsing, filtering by directors and genres, star management, and responsive design. It demonstrates React component architecture, state management, RESTful API integration, and responsive design for a modern movie management platform.

## Prerequisites

- Node.js and npm installed on your system
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- (Optional) A code editor like VS Code, Sublime Text, or Atom for easier code navigation

## Installation

1. **Clone the repository** (if not already downloaded):
   ```sh
   git clone <repository-url>
   cd Movies-Management-main
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```

## How to Run

1. **Start the JSON Server** (backend simulation):
   ```sh
   npx json-server --watch database.json --port 9999
   ```

2. **Start the React development server** (in a new terminal):
   ```sh
   npm start
   ```

This will open the app in your default browser at [http://localhost:3000](http://localhost:3000). Navigate to `/movie` to access the movies management interface. The page will reload automatically when you make changes to the source code.

**Note**: Make sure both the JSON Server (port 9999) and React development server (port 3000) are running simultaneously for the application to work properly.

## Project Structure

```
Movies-Management-main/
├── database.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── movie.jsx
│   ├── App.js
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

- **database.json**: Mock database containing movies, directors, producers, and stars for the JSON Server.
- **public/**: Contains static assets and the HTML template.
  - `index.html`: The main HTML file loaded by React.
  - `manifest.json`, `robots.txt`: Standard web app metadata and configuration.
- **src/**: Contains the React source code.
  - `components/`: Reusable React components for different sections of the app.
    - `movie.jsx`: Main movie management component with browsing, filtering, and star management functionality.
  - `App.js`: Main application component that sets up routing and renders the movie management interface.
  - `index.js`: Entry point that renders the React app.
- **package.json**: Project metadata and dependencies including React, React Bootstrap, React Router, and JSON Server.
- **README.md**: Project documentation (this file).

## Features

- **Movie Browsing**: Display movies in a clean table format with comprehensive details including ID, title, release date, description, producer, director, genres, and stars
- **Director Filtering**: Filter movies by specific directors with clickable director names
- **Genre Filtering**: Filter movies by genres with clickable genre links
- **Star Management**: View and remove stars from movies with confirmation dialogs
- **Responsive Design**: Modern, responsive interface built with Bootstrap for optimal viewing on all devices
- **Real-time Updates**: Dynamic data updates with JSON Server backend simulation
- **Interactive UI**: Clean table-based layout with action buttons and filtering controls
- **Navigation**: Easy navigation between filtered views with "Show All Movies" option

## Data Structure

The application manages the following data entities:

- **Movies**: Movie items with id, title, release date, description, producer ID, director ID, genres array, and stars array
- **Directors**: Director information with id, fullname, gender, date of birth, and nationality
- **Producers**: Producer information with id and name
- **Stars**: Actor/actress information with id, fullname, gender, date of birth, and nationality

## Technologies Used

- **React 18.2.0**: Modern React with hooks and functional components
- **React Bootstrap 2.10.2**: Bootstrap components built for React
- **Bootstrap 5.3.3**: CSS framework for responsive design and UI components
- **React Router DOM 6.13.0**: Client-side routing for navigation
- **JSON Server 0.17.3**: Mock REST API backend for development
- **React Scripts 5.0.1**: Development and build tools
- **Axios 1.6.7**: HTTP client for API requests

## API Endpoints

The application uses the following API endpoints:

### Local JSON Server
- `GET /movies` - Retrieve all movies
- `PATCH /movies/:id` - Update movie information (e.g., remove stars)
- `GET /directors` - Retrieve all directors
- `GET /producers` - Retrieve all producers
- `GET /stars` - Retrieve all stars

## Features in Detail

### Movie Management (`movie.jsx`)
- Displays movies in responsive table layout with comprehensive movie information
- Director-based filtering with clickable director names in sidebar
- Genre-based filtering with clickable genre links in navigation
- Star management with ability to remove stars from movies
- Confirmation dialogs for star removal operations
- Real-time data updates with JSON Server integration
- Responsive design with Bootstrap styling
- URL-based filtering with React Router integration

### Movie Information Displayed

Each movie includes comprehensive information:
- **Basic Details**: ID, title, release date, and description
- **Production Team**: Producer and director information
- **Categories**: Multiple genres per movie (Comedy, Action, Drama, Cartoon, etc.)
- **Cast**: List of stars with removal functionality

### Filtering and Navigation Features

The application provides intuitive filtering and navigation:
- **Director Filtering**: Click on director names to filter movies by director
- **Genre Filtering**: Click on genre links to filter movies by genre
- **Show All Movies**: Reset filters to display all movies
- **URL-based State**: Filter state is maintained in URL parameters
- **Responsive Layout**: Sidebar navigation on larger screens

## User Experience Flow

1. **Movie Browsing**: Users view all available movies in a clean table format
2. **Director Filtering**: Users can click on director names to filter movies by specific directors
3. **Genre Filtering**: Users can click on genre links to filter movies by specific genres
4. **Star Management**: Users can view stars for each movie and remove them if needed
5. **Navigation**: Users can easily switch between filtered views and return to all movies
6. **Data Persistence**: All changes are saved to the JSON Server database

## Development Notes

- The application uses JSON Server for local data management and API simulation
- React hooks (useState, useEffect) manage component state and side effects
- React Router handles navigation and URL-based state management
- Bootstrap provides responsive design and table styling
- Fetch API handles all HTTP requests to the local JSON Server
- Component-based architecture ensures maintainable and scalable code

## Learn More

- [React Documentation](https://reactjs.org/)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [React Router Documentation](https://reactrouter.com/)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)

For questions or contributions, please open an issue or pull request.
