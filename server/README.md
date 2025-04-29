# 📘 Health Enrollment System

A full-stack web application to manage clients, view profiles, enroll them in programs, and handle authentication and attendance features.

---

## 🧰 Features

- Client registration and profile view (with modal popup)
- Search, pagination, and filtering
- Enrollment into multiple programs
- Secure API with API Key protection
- Mobile responsive using Bootstrap

---

## ⚙️ Technologies Used

### Frontend

- React.js (with Vite or Create React App)
- Bootstrap 5 for UI styling
- Axios for API calls

### Backend

- Node.js with Express.js
- MySQL as the database
- Knex.js as SQL query builder and migration tool
- Dotenv for environment configuration
- CORS and body-parser middleware

---

## 🖥️ Installation Guide

### 🔧 Prerequisites

Ensure you have the following installed:

- Node.js & npm: https://nodejs.org/
- MySQL: https://www.mysql.com/
- Git (optional): https://git-scm.com/

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/enrollment-system.git
cd enrollment-system
```

---

### 2️⃣ Backend Setup (Express + MySQL)

```bash
cd server
npm install
```

#### 🔑 Set environment variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=your_database_name
API_KEY=your_secure_api_key
```

#### 🛠️ Setup database with Knex

```bash
# Run migrations
npx knex migrate:latest

# (Optional) Run seed files if available
npx knex seed:run
```

#### ▶️ Start the backend

```bash
npm run dev
# or
node index.js
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd ../client
npm install
```

#### 🧪 Create `.env` file for React

```env
REACT_APP_API_KEY=your_secure_api_key
```

#### ▶️ Start the frontend

```bash
npm start
# or for Vite:
npm run dev
```

---

### 4️⃣ Required NPM Packages

#### Backend

```bash
npm install express mysql2 knex dotenv cors body-parser
```

#### Frontend

```bash
npm install axios bootstrap react-router-dom
```

Then include Bootstrap in `index.js`:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 📂 Folder Structure

```
enrollment-system/
├── client/            # React frontend
│   ├── src/
│   ├── public/
│   └── ...
├── server/            # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── migrations/
│   ├── seeds/
│   └── ...
```

---

## 🛡️ Security Notes

- API routes are protected using `X-API-Key` in headers.
- Ensure you rotate or securely store your `.env` file in production.

---

## ✅ Future Improvements

- User authentication with JWT
- Admin dashboard for analytics
- Role-based route guards in frontend
- CSV/Excel export for reports
- Unit and integration testing

---

## 🙌 Author

**Your Name**  
(https://github.com/benedictlangat2000)