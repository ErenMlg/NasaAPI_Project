
import { useEffect, useState } from 'react';
import { fetchEpicImages } from '../services/api';

export function useEpicImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEpicImages()
      .then(setImages)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { images, loading, error };
}
