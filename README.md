# Me-API Playground

A minimal end-to-end MERN stack application that stores my personal profile data in a database and exposes it via a small API with a basic frontend to run queries.

This project is built as part of a Backend Assessment (Track A).

---

## 🔗 Live URLs

- Backend API: https://<your-backend-url>
- Frontend UI: https://<your-frontend-url>
- GitHub Repo: https://github.com/<your-username>/me-api-playground
- Resume: https://<your-resume-link>

---

## 🧠 Architecture Overview

Client (React + Tailwind)  
→ HTTP (CORS enabled)  
→ Backend (Node.js + Express)  
→ Database (MongoDB)

### Key Decisions
- Single profile model (candidate profile only)
- REST APIs with clear query endpoints
- MongoDB for flexible nested schema
- Tailwind CSS for minimal UI styling
- JWT-based auth for write operations (optional)

---

## 📁 Folder Structure

me-api-playground/
├── server/
│ ├── src/
│ │ ├── config/
│ │ ├── models/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ ├── seed/
│ │ ├── app.js
│ │ └── server.js
├── client/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── App.jsx
│ │ └── main.jsx
└── README.md


---

## 🗄 Database Schema

### Profile Collection (MongoDB)

```js
{
  name: String,
  email: String,
  education: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      links: [String]
    }
  ],
  work: [String],
  links: {
    github: String,
    linkedin: String,
    portfolio: String
  }
}

cd server
node src/seed/seedProfile.js

🚀 API Endpoints
Health Check
GET /health

Get Profile
GET /api/profile

Create / Update Profile (Auth Protected)
POST /api/profile
Authorization: Bearer <JWT_TOKEN>

Query Projects by Skill
GET /api/profile/projects?skill=React

Get Top Skills
GET /api/profile/skills/top

Search Profile
GET /api/profile/search?q=Node



⚙️ Local Setup
Backend
cd server
npm install
npm run dev

Create .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/me_api
JWT_SECRET=supersecret

Frontend
cd client
npm install
npm run dev