import React, { useMemo } from 'react';
import { Line } from '@react-three/drei';

const OrbitRing = ({ radius }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
    }
    return pts;
  }, [radius]);

  return (
    <Line
      points={points}
      color="white"
      lineWidth={0.2}
      dashed={false}
      opacity={0.3}
      transparent
    />
  );
};

export default OrbitRing;
