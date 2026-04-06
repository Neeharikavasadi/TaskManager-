# 📌 Task Manager – Full Stack Web Application

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.x-brightgreen?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react)
![H2 Database](https://img.shields.io/badge/Database-H2-lightgrey?style=for-the-badge)
![Axios](https://img.shields.io/badge/API-Axios-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/Project-Completed-success?style=for-the-badge)

A simple and efficient **Task Management System** built using **Spring Boot (Backend)** and **React (Frontend)**.  
This project demonstrates full-stack development concepts including **REST APIs, CRUD operations, frontend-backend integration, and database handling**.

---

## 🚀 Project Overview

The **Task Manager** is a beginner-friendly full-stack web application designed to help users organize and manage their daily tasks.

Users can:

- ➕ Create new tasks
- 📋 View all tasks
- ✏️ Edit existing tasks
- ❌ Delete tasks
- ✅ Update task status (Pending / Completed)

This project was built to understand the **complete workflow of a full-stack application**, from user interface to backend API and database storage.

---

## 🛠️ Tech Stack

### 🔹 Backend
- **Java 17**
- **Spring Boot**
- **Spring Data JPA**
- **Hibernate**
- **H2 Database**
- **Maven**

### 🔹 Frontend
- **React**
- **JavaScript (ES6+)**
- **Axios**
- **CSS**

---

## 🧱 System Architecture

```text
React Frontend  →  Spring Boot REST API  →  H2 Database
```

### Architecture Layers:
- **Frontend (React):** User interface and task operations
- **Controller Layer:** Handles API requests
- **Repository Layer:** Manages database interaction
- **Database Layer:** Stores task data

---

## ✨ Features

### ✅ Core Functionalities
- Add new tasks
- View all saved tasks
- Edit task title, description, due date, and status
- Delete unwanted tasks
- Update task completion status

### 🎯 User Experience Features
- Clean and beginner-friendly UI
- Real-time task list refresh
- Form validation
- Edit mode with pre-filled form data
- Easy task status management

---

## 📸 Screenshots


### 🏠 Home Page
![Home Page](screenshots/home.png)

### ➕ Add Task
![Add Task](screenshots/add-task.png)

### ✏️ Edit Task
![Edit Task](screenshots/edit-task.png)



### 🗄️ H2 Database Console
![H2 Console](screenshots/h2-console.png)

---

## 📂 Project Structure

```text
TaskManagerProject/
│
├── backend/
│   ├── src/main/java/com/taskmanager/backend/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   └── BackendApplication.java
│   │
│   ├── src/main/resources/
│   │   └── application.properties
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ How to Run the Project

### 🔧 Prerequisites

Make sure you have installed:

- **Java 17+**
- **Node.js & npm**
- **Maven**

---

## ▶️ Run Backend

Open terminal inside the **backend** folder:

```bash
cd backend
mvn spring-boot:run
```

Backend will run on:

```text
http://localhost:8080
```

---

## ▶️ Run Frontend

Open another terminal inside the **frontend** folder:

```bash
cd frontend
npm install
npm start
```

Frontend will run on:

```text
http://localhost:3000
```

---

## 🗄️ H2 Database Access

You can inspect the database using the H2 console:

```text
http://localhost:8080/h2-console
```

### Login Details

```text
JDBC URL: jdbc:h2:mem:testdb
Username: sa
Password: (leave empty)
```

---

## 🔌 REST API Endpoints

| Method | Endpoint       | Description         |
|--------|---------------|---------------------|
| GET    | `/tasks`      | Fetch all tasks     |
| GET    | `/tasks/{id}` | Fetch task by ID    |
| POST   | `/tasks`      | Create a new task   |
| PUT    | `/tasks/{id}` | Update task details |
| DELETE | `/tasks/{id}` | Delete a task       |

---

## 🔄 Application Workflow

### 📌 Step-by-Step Flow

1. User opens the React frontend
2. Frontend fetches task data from backend
3. User performs task actions (Add/Edit/Delete)
4. Axios sends API request to Spring Boot
5. Spring Boot processes request
6. H2 database stores or updates data
7. Updated task list is shown instantly on UI

---

## 📚 Key Learning Outcomes

This project helped in understanding:

- Full-stack project structure
- React and Spring Boot integration
- REST API development
- CRUD operations
- Database handling with JPA
- Frontend state management
- API communication using Axios

---

## ⚠️ Limitations

- No user authentication
- H2 database is in-memory, so data is lost after restart
- Basic UI styling only
- No advanced filtering or sorting

---

## 🚀 Future Enhancements

Planned improvements for this project:

- 🔐 Add user authentication with Spring Security + JWT
- 🛢️ Replace H2 with MySQL/PostgreSQL
- 🏷️ Add task categories and priorities
- 🔍 Add search and filter options
- 🎨 Improve UI using Tailwind CSS / Material UI
- ⏰ Add reminders and notifications
- 📱 Make the UI fully responsive

---

## 👩‍💻 Author

**Neeharika**  
B.Tech Computer Science Student  
Interested in **Full Stack Development, UI/UX, and AI Projects**

---

## ⭐ If you like this project

If you found this project useful or interesting, consider giving it a ⭐ on GitHub!
