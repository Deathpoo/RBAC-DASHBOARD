### RBAC Dashboard
A simple Role-Based Access Control (RBAC) dashboard built with React to manage users, roles, and permissions. This project demonstrates user management, role assignment, and permission handling in a secure and user-friendly admin interface.

## Features
# User Management:

View all users in a table format.
Add, edit, and delete users.
Assign roles to users and manage their active/inactive status.
# Role Management:

Manage roles (basic functionality integrated with users' roles).
Easily extendable for advanced role management.
# Permissions:

Basic permission handling through roles.
Dynamic and customizable (future-ready for advanced permissions).
# Responsive Design:

Fully responsive layout to ensure compatibility with different screen sizes.
# Ease of Use:

Intuitive user interface for admins.
Simple workflows for CRUD (Create, Read, Update, Delete) operations.


## Installation and Setup
Follow the steps below to set up and run the project locally:

# 1. Prerequisites
Node.js (v14 or later)
npm (Node Package Manager) or yarn
Code editor (e.g., VSCode)
# 2. Clone the Repository
git clone https://github.com/your-username/rbac-dashboard.git
cd rbac-dashboard
# 3. Install Dependencies
npm install
# 4. Start the Development Server
npm start
The app will start running at http://localhost:3000.

## Project Structure

rbac-dashboard/
│
├── public/                // Static files
├── src/                   // Source files
│   ├── components/        // Reusable components
│   │   ├── UserForm.js    // Form to add/edit users
│   │   └── UserTable.js   // Table to display user list
│   ├── App.js             // Main app component
│   ├── index.css          // Stylesheet
│   └── index.js           // App entry point
│
├── package.json           // Project dependencies and metadata
└── README.md              // Project documentation

## Technical Details
Technologies Used
-Frontend Framework: React.js
-Styling: CSS (with responsive design principles)
-State Management: React's useState and props

## Usage Guide
# 1. Managing Users
Navigate to the "User Management" section.
Add a new user by filling out the form with the user's details.
Edit existing users by selecting their details in the table.
Delete users directly from the table.
# 2. Assigning Roles
Use the role input in the form to assign a role to a user.
Roles can be customized in the future to handle more complex permissions.
