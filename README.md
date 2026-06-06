# MERN Task Manager

## Live Demo
Frontend:
https://mern-task-manager-tan.vercel.app

Backend:
https://mern-task-manager-eybb.onrender.com

---

# Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Mongoose

Deployment:
- Vercel (Frontend)
- Render (Backend)

---

# Features

- User Authentication
- Register/Login
- JWT Protected Routes
- Create Tasks
- Delete Tasks
- Complete/Pending Toggle
- Search Tasks
- Filter Tasks
- Dark Mode
- Toast Notifications
- Responsive UI

---

# Folder Structure

mern-task-manager/
│
├── client/
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── utils/
│
├── server/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── config/

---

# API Endpoints

## Auth Routes

POST /api/users/register
POST /api/users/login

## Task Routes

GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

---

# Environment Variables

## Server .env

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret

PORT=5000

---

# Setup Instructions

## Clone Repository

git clone https://github.com/Rahul-PuriRepo/mern-task-manager.git

## Install Dependencies

### Frontend

cd client
npm install

### Backend

cd server
npm install

## Run Backend

npm run dev

## Run Frontend

npm run dev

---

# Assumptions Made

- JWT used for authentication
- MongoDB Atlas used as cloud database
- Free tier deployment services used
- Tasks belong to authenticated users only

---

# Author

Rahul Puri