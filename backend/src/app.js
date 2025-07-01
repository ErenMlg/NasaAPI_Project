import express from 'express';
import cors from 'cors';
import nasaRoutes from './routes/nasaRoutes.js';
import geminiRoutes from './routes/gemini.js';


const app = express();

app.use(cors()); 
app.use(express.json()); 

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Sunucu çalışıyor 🚀' });
});

app.use('/api/nasa', nasaRoutes);
app.use('/api/gemini', geminiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend ${PORT} portunda çalışıyor.`);
});
