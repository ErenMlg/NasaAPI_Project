import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'ldSwLV6Qu0p94wt6LJumNV5nbVwPEnM2m6YCeAW8';

export function useAsteroids(date) {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAsteroids() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed`, {
          params: {
            start_date: date,
            end_date: date,
            api_key: API_KEY,
          },
        });
        const data = response.data.near_earth_objects[date] || [];
        setAsteroids(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAsteroids();
  }, [date]);

  return { asteroids, loading, error };
}
