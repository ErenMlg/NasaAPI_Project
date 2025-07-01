
import { useEffect, useState } from 'react';
import { fetchAsteroids } from '../services/api';

export function useAsteroids(startDate, endDate) {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAsteroids(startDate, endDate)
      .then((data) => {
        const all = [];
        Object.values(data.near_earth_objects).forEach((arr) => all.push(...arr));
        setAsteroids(all);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [startDate, endDate]);

  return { asteroids, loading, error };
}
