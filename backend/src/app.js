import express from 'express';
import cors from 'cors';
import nasaRoutes from './routes/nasaRoutes.js';


const app = express();

// Middleware
app.use(cors()); // CORS: frontend-backend arasında iletişim sağlar
app.use(express.json()); // JSON body parse eder

// Test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Sunucu çalışıyor 🚀' });
});

app.use('/api/nasa', nasaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend ${PORT} portunda çalışıyor.`);
});
