import React, { useState } from 'react';
import '../styles/pages/Mars.css';
import { useMarsPhotos } from '../hooks/userMarsPhotos';
import Loading from '../components/Loading';

export default function MarsPhotos() {
  const today = new Date().toISOString().split('T')[0];
  const [filterDate, setFilterDate] = useState(today);
  const { photos, loading, error } = useMarsPhotos(filterDate);

  return (
    <div className="mars-photos-page">
      {loading && (
        <div className="loading-overlay">
          <Loading />
        </div>
      )}

      <h1>Mars Photos</h1>

      <div className="filter-section">
        <label>
          Date:
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="custom-date-input"
          />
        </label>
      </div>

      {error && (
        <div className="error-message">
          Error: {error.message}
        </div>
      )}

      {!loading && photos.length === 0 && (
        <p className="no-photos">No photos found for <b>{filterDate}</b>, Please try another date.</p>
      )}

        {!loading && photos.length > 0 && (
        <div className="mars-photos-grid">
            {photos.map((photo) => (
            <div key={photo.id} className="mars-photo-card">
                <a href={photo.img_src} target="_blank" rel="noopener noreferrer">
                <img src={photo.img_src} alt={`Mars - ${photo.id}`} />
                </a>
                <div className="photo-info">
                <p><strong>Camera:</strong> {photo.camera.full_name}</p>
                <p><strong>Date:</strong> {photo.earth_date}</p>
                <p><strong>Rover:</strong> {photo.rover.name}</p>
                </div>
            </div>
            ))}
        </div>
        )}
  </div>
    );
}

