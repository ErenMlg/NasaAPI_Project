import React from 'react';
import '../styles/pages/Epic.css';
import { useEpicImages } from '../hooks/useEpicImage';
import Loading from '../components/Loading';

export default function EpicImages() {
  const { images, loading, error } = useEpicImages();

  return (
    <div className="epic-images-page">
      {loading && (
        <div className="loading-overlay">
          <Loading />
        </div>
      )}

      <h1>EPIC Images</h1>

      {error && (
        <div className="error-message">
          Error: {error.message}
        </div>
      )}

      {!loading && images.length === 0 && (
        <p className="no-images">No images available.</p>
      )}

      {!loading && images.length > 0 && (
        <div className="epic-images-grid">
          {images.map((img) => (
            <div key={img.identifier} className="epic-image-card">
              <a href={img.image_url} target="_blank" rel="noopener noreferrer">
                <img src={img.image_url} alt={img.caption} loading="lazy" />
              </a>
              <div className="image-info">
                <p>{img.caption}</p>
                <p><strong>Date:</strong> {img.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
