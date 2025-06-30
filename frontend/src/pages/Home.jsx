import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import astreoidImage from '../assets/images/asteroid.jpg';
import epicImage from '../assets/images/epic.jpg';
import nasaImage from '../assets/images/nasa.jpg';
import marsImage from '../assets/images/mars.jpg';
import { useApod } from '../hooks/useApod';
import LoadingComponent from '../components/Loading';

const apiCards = [
  { title: 'APOD', desc: 'Günün uzay fotoğrafı', path: '/apod'},
  { title: 'Mars Photos', desc: 'Mars araçlarının çektiği fotoğraflar', path: '/mars-photos', image: marsImage },
  { title: 'Neo Feed', desc: 'Yaklaşan asteroid verileri', path: '/asteroids', image: astreoidImage },
  { title: 'Epic Images', desc: 'Dünya\'nın günlük uydu görüntüleri', path: '/epic-images', image: epicImage },
  { title: 'NASA Media Search', desc: 'NASA medya arama motoru', path: '/media-search', image: nasaImage },
];

export default function HomePage() {
  const { data: apod, loading } = useApod();

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="stars-background">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars radius={100} depth={50} count={5000} factor={4} fade />
          </Canvas>
        </div>

        <div className="hero-content">
          <h1>Explore the space system</h1>
          <p>Are you ready to explore space system with 3D simulation?</p>
          <Link to="/solar-system" className="explore-button">Explore</Link>
        </div>
      </section>

      <section className="cards-section">
        <div className="cards-grid">
          {apiCards.map((api, i) => (
            <div className="feature-card" key={i}>
              <div className="card-image-container">
                { i === 0 && loading ? (
                  <LoadingComponent />
                ) : (
                  <img src={i === 0 ? apod.url : api.image} alt={`${api.title} görseli`} className="card-image"/>
                )}
                
              </div>
              <div className="card-content">
                <h3>{api.title}</h3>
                <p>{api.desc}</p>
                <Link to={api.path} className="go-button">Git</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
