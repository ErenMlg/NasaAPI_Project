import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ApodPage from './pages/Apod.jsx';
import MarsPhotosPage from './pages/Mars.jsx';
import Asteroids from './pages/Asteroids.jsx';
import EpicImages from './pages/Epic.jsx';
import NasaSearch from './pages/NasaSearch.jsx';
import SolarSystem from './components/SolarSystem.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apod" element={<ApodPage />} />
      <Route path="/mars-photos" element={<MarsPhotosPage />} />
      <Route path="/asteroids" element={<Asteroids />} />
      <Route path="/epic-images" element={<EpicImages />} />
      <Route path="/nasa-search" element={<NasaSearch />} />
      <Route path="/solar-system" element={<SolarSystem />} />
    </Routes>
  );
}