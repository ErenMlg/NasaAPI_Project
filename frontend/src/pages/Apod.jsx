import React from 'react';
import '../styles/pages/Apod.css';
import { useApod } from '../hooks/useApod';
import Loading from '../components/Loading';

export default function ApodPage() {
  const { data: apod, loading, error } = useApod();

  if (loading) return <Loading />;
  if (error) return <div className="apod-page">Error: {error.message}</div>;

  return (
    <div className="apod-page">
      <div className="apod-container">
        <div className="apod-image-wrapper">
          <img src={apod.url} alt={apod.title} className="apod-image" />
        </div>
        <div className="apod-text">
          <h1>{apod.title}</h1>
          <p className="apod-date">{apod.date}</p>
          <p className="apod-explanation">{apod.explanation}</p>
          <a href={apod.hdurl} target="_blank" rel="noopener noreferrer" className="hd-link">
            View HD Resolution ↗
            </a>
        </div>
      </div>
    
    </div>
  );
}
