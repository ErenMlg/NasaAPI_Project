import { useEffect, useState } from 'react';
import { fetchMarsPhotos } from '../services/api';

export const useMarsPhotos = (date = '') => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMarsPhotos(date)
      .then((res) => setPhotos(res.photos || []))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [date]);

  return { photos, loading, error };
};
