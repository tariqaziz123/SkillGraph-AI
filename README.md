# SkillGraph AI

A full-stack SkillGraph application built as part of the **Wexa AI Software Engineer (Full-Stack/Web) Assessment**.

The application uses a graph database to model developers, skills, technologies, companies, and projects, enabling powerful relationship-based queries and developer recommendations.

---

## 🚀 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- Neo4j Driver

### Database
- CognoDB (Neo4j Compatible Graph Database)

---

# Project Structure

```
skillgraph-ai/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── src/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── seed/
│   └── index.ts
│
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

# Features

- Graph-based developer database
- Developer profile API
- Search developers by skill
- Developer recommendations based on shared skills
- Project information for each developer
- Skills API
- Technologies API
- Companies API
- Parameterized Cypher queries
- Layered architecture (Routes → Controllers → Services)

---

# Graph Model

### Nodes

- Developer
- Skill
- Technology
- Company
- Project

### Relationships

```
Developer --HAS_SKILL--> Skill

Developer --WORKED_AT--> Company

Developer --WORKED_ON--> Project

Project --USES--> Technology

Skill --RELATED_TO--> Skill
```

---

# Getting Started

## Clone Repository

```bash
git clone <repository-url>

cd skillgraph-ai
```

---

# Backend Setup

```bash
cd server

npm install
```

Create `.env`

```env
PORT=5000

NEO4J_URI=bolt+s://your-instance.databases.cognodb.com

NEO4J_USERNAME=cognodb

NEO4J_PASSWORD=your-password
```

Run database seed

```bash
npm run seed
```

Start backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# API Endpoints

## Developers

### Get All Developers

```
GET /developers
```

---

### Get Developer

```
GET /developers/:id
```

---

### Search Developers by Skill

```
GET /developers?skill=React
```

---

### Developer Recommendations

```
GET /developers/:id/recommendations
```

Returns developers with shared skills ranked by similarity.

---

### Developer Projects

```
GET /developers/:id/projects
```

---

## Skills

```
GET /skills
```

---

## Technologies

```
GET /technologies
```

---

## Companies

```
GET /companies
```

---

# Sample Response

```json
{
  "success": true,
  "count": 8,
  "data": [
    {
      "id": "dev-001",
      "name": "Aarav Sharma",
      "experience": 5
    }
  ]
}
```

---

# Recommendation Logic

Recommendations are generated using graph traversal.

The backend finds developers who share skills with the selected developer and ranks them by the number of common skills.

Example Cypher pattern:

```cypher
MATCH (d:Developer {id: $id})-[:HAS_SKILL]->(skill:Skill)<-[:HAS_SKILL]-(other:Developer)
WHERE d <> other
RETURN other, count(skill) AS commonSkills
ORDER BY commonSkills DESC
```

---

# Development Commands

Backend

```bash
npm run dev
npm run seed
npm run build
```

Frontend

```bash
npm run dev
npm run build
```

---

# Environment Variables

Server requires:

```env
PORT=

NEO4J_URI=

NEO4J_USERNAME=

NEO4J_PASSWORD=
```

---

# Assumptions

- CognoDB is Neo4j compatible.
- Database is seeded before running the application.
- Frontend communicates with the backend through REST APIs.

---

# Future Improvements

- JWT Authentication
- Pagination
- API Documentation using Swagger
- Unit Tests
- Docker Support
- CI/CD Pipeline

---

# Author

**Tariq Aziz**

React.js | TypeScript | Node.js | Graph Databases

---

Built as part of the **Wexa AI Software Engineer (Full-Stack/Web) Assessment**.