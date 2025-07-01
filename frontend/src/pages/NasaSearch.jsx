import React, { useState } from 'react';
import '../styles/pages/NasaSearch.css';
import { useSearch } from '../hooks/useSearch';
import Loading from '../components/Loading';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const { results, loading, error, search } = useSearch();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    results.length = 0;
    if (query.trim()) {
      search(query.trim());
    }
  };

  return (
    <div className="search-page">
      <h1>NASA Media Search</h1>

      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search NASA images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={!query.trim()}>Ara</button>
      </form>

      {loading && <Loading />}
      {error && <p className="error-message">Error, {error.response?.data?.error}</p>}

      <div className="search-results-grid">
        {results.map((item, idx) => (
          <div
            key={idx}
            className="search-result-card"
            onClick={() => setSelectedItem(item)}
            style={{ cursor: 'pointer' }}
          >
            <img src={item.image_url} alt={item.title} loading="lazy" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p><strong>Date:</strong> {item.date_created}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>×</button>
            <a href={selectedItem.image_url} target="_blank" rel="noopener noreferrer">
                <img src={selectedItem.image_url} alt={selectedItem.title} />
            </a>
            <div className="modal-details">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
                <p><strong>Date:</strong> {selectedItem.date_created}</p>
          </div>
         </div>
        </div>
      )}
    </div>
  );
}
