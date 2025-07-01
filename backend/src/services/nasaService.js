import axios from 'axios';
import { NASA_API_KEY, NASA_API_BASE } from '../config.js';

export async function getMarsPhotosByDate(date = '2020-07-01') {
  try {
    const response = await axios.get(`${NASA_API_BASE}/mars-photos/api/v1/rovers/curiosity/photos`, {
      params: {
        earth_date: date,
        api_key: NASA_API_KEY
      }
    });
    return response.data.photos;
  } catch (error) {
    console.error('Mars fotoğrafları alınırken hata oluştu:', error.message);
    throw new Error('NASA Mars verilerine ulaşılamadı.');
  }
}

export async function getNeoFeed(startDate = '', endDate = '') {
  try {
    const response = await axios.get(`${NASA_API_BASE}/neo/rest/v1/feed`, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: NASA_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('NEO verisi alınırken hata:', error.message);
    throw new Error('Cant fetch Near Earth Objects (NEO) data. It may be due to an invalid date range or network issues. Please check your input and try again. Max date range is 7 days.');
  }
}

export async function getAPOD(date = '') {
  try {
    const response = await axios.get(`${NASA_API_BASE}/planetary/apod`, {
      params: {
        api_key: NASA_API_KEY,
        date // opsiyonel, boşsa bugünün görseli gelir
      }
    });
    return response.data;
  } catch (error) {
    console.error('APOD verisi alınırken hata:', error.message);
    throw new Error('Günün astronomi fotoğrafı alınamadı.');
  }
}

export async function getEpicImages(date = '') {
  try {
    const url = date
      ? `${NASA_API_BASE}/EPIC/api/natural/date/${date}`
      : `${NASA_API_BASE}/EPIC/api/natural`;

    const response = await axios.get(url, {
      params: {
        api_key: NASA_API_KEY
      }
    });

    const images = response.data.map((img) => {
      const [year, month, day] = img.date.split(' ')[0].split('-');
      return {
        ...img,
        image_url: `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${img.image}.png`
      };
    });

    return images;
  } catch (error) {
    console.error('EPIC verisi alınırken hata:', error.message);
    throw new Error('Dünya görüntüleri alınamadı.');
  }
}

export async function searchNasaMedia(query) {
  try {
    const response = await axios.get(`https://images-api.nasa.gov/search`, {
      params: {
        q: query,
        media_type: 'image'
      }
    });

    const results = response.data.collection.items.map((item) => ({
      title: item.data[0]?.title,
      description: item.data[0]?.description,
      date_created: item.data[0]?.date_created,
      image_url: item.links?.[0]?.href 
    }));

    if (results.length === 0) {
      throw new Error(`No results found for the given '${query}'.`);
    }

    return results;
  } catch (error) {
    throw error;
  }
}

