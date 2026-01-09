# Task Management System

A full-stack task management application built with Spring Boot (backend) and Next.js (frontend).

## Features

### Backend (Spring Boot)
- **REST API** with proper HTTP status codes (201, 400, 404, 409)
- **JWT Authentication** with 24-hour token expiration
- **User Management** - Create and list users
- **Task Management** - Full CRUD operations for tasks
- **Database Migrations** using Flyway
- **Validation & Error Handling** with meaningful responses
- **H2 Database** with persistent file storage

### Frontend (Next.js)
- **Authentication** - Login with JWT tokens
- **Task Dashboard** - Create, edit, delete, and update task status
- **User Management** - Create and view users
- **Responsive Design** with Tailwind CSS
- **Real-time Updates** - Automatic refresh after operations

## Tech Stack

### Backend
- Java 21
- Spring Boot 3.x
- Spring Security (JWT)
- Spring Data JPA
- H2 Database
- Flyway Migrations
- Lombok
- Maven

### Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- Axios (API calls)
- js-cookie (Token management)

## Setup Instructions

### Prerequisites
- Java 21+
- Node.js 18+
- Git

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd springBootBackend
   ```

2. **Run the application:**
   ```bash
   ./mvnw spring-boot:run
   ```
   
   Or on Windows:
   ```bash
   mvnw.cmd spring-boot:run
   ```

3. **Backend will start on:** `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Frontend will start on:** `http://localhost:3000` (or 3001 if 3000 is busy)

## Usage

### Authentication
- **Username:** `admin`
- **Password:** `password`
- **Token Expiration:** 24 hours

### API Endpoints

#### Authentication
- `POST /api/auth/login` - Login with credentials

#### Users
- `POST /api/users` - Create user
- `GET /api/users` - List users (paginated)
- `GET /api/users/{id}` - Get user by ID

#### Tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks` - List tasks (paginated)
- `GET /api/tasks/{id}` - Get task by ID
- `PUT /api/tasks/{id}` - Update task
- `PATCH /api/tasks/{id}/status` - Update task status
- `DELETE /api/tasks/{id}` - Delete task

### Database Access

**H2 Console:** `http://localhost:8080/h2-console`
- **JDBC URL:** `jdbc:h2:file:./data/tododb`
- **Username:** `sa`
- **Password:** (empty)

## Project Structure

```
SentraWorld/
├── springBootBackend/          # Spring Boot API
│   ├── src/main/java/com/sentra/todo/
│   │   ├── config/            # Security & CORS configuration
│   │   ├── controller/        # REST controllers
│   │   ├── entity/           # JPA entities
│   │   ├── repository/       # Data repositories
│   │   └── security/         # JWT utilities
│   ├── src/main/resources/
│   │   ├── db/migration/     # Flyway SQL migrations
│   │   └── application.properties
│   └── pom.xml
├── frontend/                  # Next.js application
│   ├── src/
│   │   ├── app/              # Next.js pages
│   │   └── lib/              # API utilities
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## Database Schema

### Users Table
- `id` (Primary Key)
- `name` (Required, min 2 chars)
- `email` (Required, unique, valid email)

### Tasks Table
- `id` (Primary Key)
- `title` (Required, 3-100 chars)
- `description` (Optional, max 500 chars)
- `status` (TODO, IN_PROGRESS, DONE)
- `priority` (LOW, MEDIUM, HIGH)
- `due_date` (Optional)
- `created_at` (Auto-generated)
- `updated_at` (Auto-updated)
- `assigned_to` (Foreign Key to Users, nullable)

## Error Handling

The API returns proper HTTP status codes with meaningful error messages:

- **200 OK** - Success
- **201 CREATED** - Resource created
- **400 BAD REQUEST** - Validation errors
- **401 UNAUTHORIZED** - Invalid credentials
- **404 NOT FOUND** - Resource not found
- **409 CONFLICT** - Duplicate data (e.g., email exists)
- **500 INTERNAL SERVER ERROR** - Server errors

## Sample Data

The application includes sample data created by Flyway migrations:
- 2 sample users (John Doe, Jane Smith)
- 4 sample tasks with different statuses and priorities

## Development Notes

- **CORS** is configured to allow frontend requests from `localhost:3000`
- **Database** persists data between application restarts
- **JWT tokens** are stored in browser cookies
- **Validation** is handled both client-side and server-side
- **Error messages** are user-friendly and informative

## License

This project is for educational/demonstration purposes.