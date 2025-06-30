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
    throw new Error('Yakın dünya cismi verileri alınamadı.');
  }
}

export async function getEpicImages(date = '') {
  try {
    // API çağrısı: https://api.nasa.gov/EPIC/api/natural/date/2024-06-20
    const url = date
      ? `${NASA_API_BASE}/EPIC/api/natural/date/${date}`
      : `${NASA_API_BASE}/EPIC/api/natural`;

    const response = await axios.get(url, {
      params: {
        api_key: NASA_API_KEY
      }
    });

    // Her görsel için erişilebilir URL hesapla
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
        media_type: 'image' // sadece görselleri alıyoruz (video da istenirse genişletilebilir)
      }
    });

    // API'nin veri yapısını sadeleştiriyoruz
    const results = response.data.collection.items.map((item) => ({
      title: item.data[0]?.title,
      description: item.data[0]?.description,
      date_created: item.data[0]?.date_created,
      image_url: item.links?.[0]?.href // görsel linki
    }));

    return results;
  } catch (error) {
    console.error('NASA arşiv araması başarısız:', error.message);
    throw new Error('Görsel arama verileri alınamadı.');
  }
}

