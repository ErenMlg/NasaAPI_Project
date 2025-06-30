import mercury from '../assets/textures/mercury.jpg';
import venus from '../assets/textures/venus.jpg';
import earth from '../assets/textures/earth.jpg';
import mars from '../assets/textures/mars.jpg';
import jupiter from '../assets/textures/jupiter.jpg';
import saturn from '../assets/textures/saturn.jpg';
import uranus from '../assets/textures/uranus.jpg';
import neptune from '../assets/textures/neptune.jpg';
import sun from '../assets/textures/sun.jpg';

const rawPlanets = [
  { name: 'Mercury', texture: mercury, size: 0.4, distance: 5, angle: 0.1 },
  { name: 'Venus', texture: venus, size: 0.7, distance: 8, angle: 1.2 },
  { name: 'Earth', texture: earth, size: 1, distance: 11, angle: 2.3 },
  { name: 'Mars', texture: mars, size: 0.8, distance: 14, angle: 0.8 },
  { name: 'Jupiter', texture: jupiter, size: 2, distance: 18, angle: 2.8 },
  { name: 'Saturn', texture: saturn, size: 1.8, distance: 22, angle: 4.0, hasRing: true },
  { name: 'Uranus', texture: uranus, size: 1.5, distance: 26, angle: 3.1, hasRing: true},
  { name: 'Neptune', texture: neptune, size: 1.4, distance: 30, angle: 5.7 },
];

  
const planets = rawPlanets.map((planet) => {
  const x = Math.cos(planet.angle) * planet.distance;
  const z = Math.sin(planet.angle) * planet.distance;
  const y = 0;
  return {
    ...planet,
    position: [x, y, z],
    distance: planet.distance
  };
});

// Güneş merkezde
planets.unshift({
  name: 'Sun',
  texture: sun,
  size: 3,
  position: [0, 0, 0],
});

export { planets };
