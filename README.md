# Employee Management System (MERN Stack)

## Project Overview

Employee Management System is a full-stack MERN application designed to help organizations manage employee records efficiently and securely. The system provides authentication, employee management, dashboard analytics, search functionality, and employee profile management through a modern and responsive user interface.

This application demonstrates full-stack development skills using MongoDB, Express.js, React.js, and Node.js while implementing REST APIs, JWT authentication, and database operations.

---

## Features

### Authentication

* User Registration
* User Login
* Password Encryption using bcryptjs
* JWT-based Authentication
* Protected Routes
* Secure Logout

### Dashboard

* Total Employees Count
* Active Employees Count
* Inactive Employees Count
* Real-time Statistics

### Employee Management

* Add New Employee
* View Employee Details
* Update Employee Information
* Delete Employee
* Auto Generated Employee ID

### Search & Filter

* Search by Employee Name
* Search by Email
* Search by Department
* Filter by Status
* Filter by Department

### User Interface

* Responsive Design
* Modern Dashboard Layout
* Gradient Navigation Bar
* Sidebar Navigation
* Mobile Friendly Design

---

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap
* React Toastify

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT (JSON Web Token)
* bcryptjs

---

## Project Structure

```text
employee-management-system/

├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── authController.js
│   │   └── employeeController.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models
│   │   ├── User.js
│   │   └── Employee.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── employeeRoutes.js
│   ├── utils
│   │   └── generateToken.js
│   ├── .env
│   ├── package.json
│   └── server.js

└── frontend
    ├── public
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── services
    │   ├── context
    │   ├── routes
    │   ├── styles
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## System Workflow

### User Registration

1. User enters Name, Email, Password, and Confirm Password.
2. Password is encrypted using bcryptjs.
3. User information is stored in MongoDB.
4. JWT token is generated.
5. User is redirected to the dashboard.

### User Login

1. User enters Email and Password.
2. Credentials are validated.
3. JWT token is generated.
4. Token is stored in Local Storage.
5. Protected pages become accessible.

### Employee Management

1. User adds employee information.
2. Data is validated.
3. Employee record is stored in MongoDB.
4. Employee ID is automatically generated.
5. Employee appears in the employee list.

---

## Database Schema

### User Collection

```json
{
  "_id": "ObjectId",
  "name": "Mahesh Pendem",
  "email": "mahesh@gmail.com",
  "password": "hashedPassword"
}
```

### Employee Collection

```json
{
  "_id": "ObjectId",
  "employeeId": "EMP0001",
  "name": "Mahesh Pendem",
  "email": "mahesh@gmail.com",
  "phone": "9121183927",
  "department": "Engineering",
  "designation": "Software Developer",
  "salary": 50000,
  "status": "Active",
  "joiningDate": "2026-06-15"
}
```

---

## API Documentation

### Authentication APIs

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Employee APIs

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| GET    | /api/employees       | Get All Employees    |
| GET    | /api/employees/:id   | Get Employee By ID   |
| POST   | /api/employees       | Add Employee         |
| PUT    | /api/employees/:id   | Update Employee      |
| DELETE | /api/employees/:id   | Delete Employee      |
| GET    | /api/employees/stats | Dashboard Statistics |

---

## Installation & Setup

### Prerequisites

* Node.js
* npm
* MongoDB

### Clone Repository

```bash
git clone <repository-url>
cd employee-management-system
```

---

### Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000
MONGOURI=mongodb://127.0.0.1:27017/employee_management
JWTSECRET=your_jwt_secret
```

Run backend server:

```bash
npm run server
```

Server runs at:

```text
http://localhost:5000
```

---

### Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React application:

```bash
npm start
```

Application runs at:

```text
http://localhost:3000
```

---

## Screenshots

### Register Page

Allows new users to create an account securely.

### Login Page

Allows registered users to authenticate and access the system.

### Dashboard

Displays employee statistics including total, active, and inactive employees.

### Add Employee Page

Allows administrators to add employee details.

### Employee List Page

Displays all employee records with search and filter functionality.

### Employee Details Page

Shows complete information about a selected employee.

### MongoDB Database

Stores employee and user information securely.

---

## Learning Outcomes

Through this project, the following concepts were implemented:

* MERN Stack Development
* REST API Development
* JWT Authentication
* MongoDB Integration
* CRUD Operations
* State Management
* React Routing
* Form Handling
* Responsive UI Design
* Backend Middleware
* Database Schema Design

---

## Conclusion

The Employee Management System successfully demonstrates a complete MERN stack application capable of managing employee records efficiently. The system provides secure authentication, employee management functionalities, dashboard analytics, and a responsive user interface, making it suitable for small and medium-sized organizations.
