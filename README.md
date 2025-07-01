# 🚀 NASA API Explorer

**NASA API Explorer** is a full-stack web application built with React and Node.js, utilizing NASA's public APIs and Google Gemini to provide an interactive space exploration experience.

---

## 🌐 Live Demo

- Frontend: https://nasaapi-frontend.onrender.com/
- Backend: https://nasaapi-backend-kzuj.onrender.com

---

## 🛠️ Tech Stack

- **Frontend:** React, React Three Fiber, Drei, CSS Modules
- **Backend:** Node.js, Express
- **APIs:** NASA Open APIs (EPIC, Mars Rover, NEO, APOD, Media Search)
- **Deployment:** Render

---

## 📦 Features

- 🌌 Interactive 3D Solar System with planet descriptions
- 📷 Mars Rover Photos with date-based filtering
- ☄️ Near-Earth Object (Asteroid) Tracker
- 🌍 EPIC Earth imagery
- 📅 Astronomy Picture of the Day (APOD)
- 🔍 NASA Image Search with pop-up detail view

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js >= 18
- A NASA API Key → https://api.nasa.gov

---

## ⚙️ Env Variables
NASA_API_KEY=your_nasa_api_key
GEMINI_API_KEY=your_gemini_api_key
PORT=5000

## 🚀 Backend Setup

```bash
git clone https://github.com/your-username/NasaAPI_Backend.git
cd NasaAPI_Backend
npm install
npm start
```


## 🌌 Frontend Setup

```bash
git clone https://github.com/your-username/NasaAPI_Frontend.git
cd NasaAPI_Frontend
npm install
npm start
```

## 📦 Folder Structure
backend/src/
├── routes/
├── services/
├── app.js
└── .env

frontend/src/
├── routes/
├── services/
├── app.js
└── .env
