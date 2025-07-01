import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/nasa';

export const fetchApod = async () => {
  const res = await axios.get(`${BASE_URL}/apod`);
  return res.data;
};

export const fetchMarsPhotos = async (date = '') => {
  const res = await axios.get(`${BASE_URL}/mars-photos`, {
    params: date ? { date } : {}
  });
  return res.data;
};

export const fetchAsteroids = async (startDate = '', endDate = '') => {
  const res = await axios.get(`${BASE_URL}/neo-feed`, {
    params: { start_date: startDate, end_date: endDate }
  });
  return res.data;
};

export const fetchEpicImages = async () => {
  const res = await axios.get(`${BASE_URL}/epic`);
  return res.data;
};

export const fetchSearchResults = async (query) => {
  const res = await axios.get(`${BASE_URL}/media-search`, {
    params: { p : query }
  });
  return res.data;
};

export const sendToGemini = async (message) => {
  const res = await axios.post('${BASE_URL}/api/gemini/chat', { message });
  return res.data;
};

