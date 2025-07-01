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
  { name: 'Mercury', texture: mercury, size: 0.4, distance: 5, angle: 0.1, description: 'The smallest planet in our solar system and closest to the Sun.' },
  { name: 'Venus', texture: venus, size: 0.7, distance: 8, angle: 1.2, description: 'The second planet from the Sun, known for its thick, toxic atmosphere.' },
  { name: 'Earth', texture: earth, size: 1, distance: 11, angle: 2.3, description: 'The third planet from the Sun and the only astronomical object known to harbor life.' },
  { name: 'Mars', texture: mars, size: 0.8, distance: 14, angle: 0.8, description: 'The fourth planet from the Sun, known as the Red Planet due to its reddish appearance.' },
  { name: 'Jupiter', texture: jupiter, size: 2, distance: 18, angle: 2.8, description: 'The largest planet in our solar system, known for its Great Red Spot and many moons.' },
  { name: 'Saturn', texture: saturn, size: 1.8, distance: 22, angle: 4.0, hasRing: true, description: 'The sixth planet from the Sun, known for its prominent ring system.' },
  { name: 'Uranus', texture: uranus, size: 1.5, distance: 26, angle: 3.1, hasRing: true, description: 'The seventh planet from the Sun, known for its blue color and unique tilt.' },
  { name: 'Neptune', texture: neptune, size: 1.4, distance: 30, angle: 5.7, description: 'The eighth planet from the Sun, known for its strong winds and deep blue color.' },
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
  description: 'The star at the center of our solar system, providing light and heat to the planets.',
});

export { planets };
