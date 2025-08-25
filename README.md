# Learn Anywhere

Learn Anywhere is a full-stack web application that enables users to access, enroll in, and manage online courses from anywhere. The project consists of a Node.js/Express backend and a React frontend styled with Tailwind CSS.

## Features

- User authentication (register, login, protected routes)
- Course listing and enrollment
- Video course player
- Dashboard for enrolled courses
- Responsive UI with modern design

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)

### Frontend
- React
- Vite
- Tailwind CSS

## Project Structure

```
backend/
  models/           # Mongoose models (User, Course, Enrollment)
  routes/           # Express route handlers (auth, courses, enrollments, upload)
  middleware/       # Custom middleware (auth)
  server.js         # Entry point for backend server
  package.json      # Backend dependencies

frontend/
  src/
    components/     # Reusable React components
    context/        # React context (AuthContext)
    pages/          # Main pages (Home, Login, Register, Dashboard, CoursePlayer)
    App.jsx         # Main app component
    main.jsx        # Entry point for React app
  public/           # Static assets
  package.json      # Frontend dependencies
  tailwind.config.cjs, postcss.config.cjs, vite.config.js # Config files
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (e.g., MongoDB URI, JWT secret).
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
