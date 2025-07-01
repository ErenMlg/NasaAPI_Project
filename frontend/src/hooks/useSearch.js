import { useState } from 'react';
import { fetchSearchResults } from '../services/api';

export function useSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchSearchResults(query);
      setResults(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
}
