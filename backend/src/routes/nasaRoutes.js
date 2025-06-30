import express from 'express';
import { getMarsPhotosByDate } from '../services/nasaService.js';

const router = express.Router();

router.get('/mars-photos', async (req, res) => {
  const date = req.query.date || new Date().toLocaleDateString('en-CA');
  try {
    const photos = await getMarsPhotosByDate(date);
    res.json({
      photos: photos,
      date: date,
      message: photos.length > 0 ? 'Mars photos retrieved successfully.' : `No Mars photos found for the ${date}.`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

import { getAPOD } from '../services/nasaService.js';

router.get('/apod', async (req, res) => {
  const date = req.query.date || ''; // Boşsa bugünün tarihi alınır
  try {
    const data = await getAPOD(date);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

import { getNeoFeed } from '../services/nasaService.js';

router.get('/neo-feed', async (req, res) => {
  const start = req.query.start_date || '';
  const end = req.query.end_date || '';

  try {
    const data = await getNeoFeed(start, end);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

import { getEpicImages } from '../services/nasaService.js';

router.get('/epic', async (req, res) => {
  const date = req.query.date || ''; // yyyy-mm-dd

  try {
    const data = await getEpicImages(date);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

import { searchNasaMedia } from '../services/nasaService.js';

router.get('/media-search', async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Arama sorgusu gerekli (q=?).' });
  }

  try {
    const results = await searchNasaMedia(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;