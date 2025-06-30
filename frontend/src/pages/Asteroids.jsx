import React, { useState } from 'react';
import '../styles/pages/Asteroid.css';
import { useAsteroids } from '../hooks/useAsteroid';
import Loading from '../components/Loading';

export default function Asteroids() {
  const today = new Date().toISOString().split('T')[0];
  const [filterDate, setFilterDate] = useState(today);
  const { asteroids, loading, error } = useAsteroids(filterDate);

  return (
    <div className="asteroids-page">
      {loading && (
        <div className="loading-overlay">
          <Loading />
        </div>
      )}

      <h1>Near Earth Asteroids</h1>

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

      {!loading && asteroids.length === 0 && (
        <p className="no-asteroids">No asteroid data found for <b>{filterDate}</b>. Try another date.</p>
      )}

      {!loading && asteroids.length > 0 && (
        <div className="asteroids-grid">
          {asteroids.map((asteroid) => (
            <div key={asteroid.id} className="asteroid-card">
              <a href={asteroid.nasa_jpl_url} target="_blank" rel="noopener noreferrer">
                <h3>{asteroid.name}</h3>
              <div className="asteroid-info">
                <p><strong>Size:</strong> {asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(1)}m - {asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(1)}m</p>
                <p><strong>Velocity:</strong> {parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(0)} km/h</p>
                <p><strong>Distance:</strong> {parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toLocaleString()} km</p>
                <p><strong>Hazardous:</strong> {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
              </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
