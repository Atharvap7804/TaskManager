
# TaskManager

A modern web-based Task Management application built with React and Vite. This project provides a simple and efficient way to manage tasks for both administrators and employees, featuring authentication, dashboards, and task tracking.

## Features

- **User Authentication**: Secure login for users.
- **Role-based Dashboards**: Separate dashboards for Admin and Employee roles.
- **Task Management**: Create, assign, accept, complete, and track tasks.
- **Task Status Tracking**: View tasks by status (New, Accepted, Completed, Failed).
- **Persistent Storage**: Utilizes local storage for session and task data.
- **Responsive UI**: Built with Tailwind CSS for a modern, responsive design.

## Project Structure

```
TaskManager/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # React components
│   │   ├── Auth/          # Authentication components
│   │   ├── Dashboard/     # Admin & Employee dashboards
│   │   ├── Tasklist/      # Task status components
│   │   └── others/        # Miscellaneous components
│   ├── context/           # Context providers (e.g., AuthProvider)
│   ├── pages/             # Page-level components
│   ├── utils/             # Utility functions (e.g., localstorage)
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── ...
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```powershell
   git clone <repository-url>
   cd TaskManager
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```powershell
   npm run dev
   # or
   yarn dev
   ```
4. **Open in browser:**
   Visit `http://localhost:5173` (or the port shown in your terminal).

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License.
