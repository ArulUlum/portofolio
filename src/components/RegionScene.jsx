import { useMemo, useRef } from 'react';
import { useInView } from 'framer-motion';
import Skyline from './Skylines';

// Per-region ambient particles: [count, min size px, max size px, min seconds, max seconds, min top %, max top %]
const PARTICLES = {
  mondstadt: [14, 3, 7, 16, 28, 6, 80],
  liyue: [12, 12, 20, 16, 28, 35, 90],
  inazuma: [18, 8, 14, 12, 22, 0, 55],
  sumeru: [18, 3, 9, 10, 20, 30, 92],
  fontaine: [16, 6, 16, 9, 18, 35, 95],
  natlan: [22, 2, 5, 5, 10, 40, 95],
};

// Deterministic pseudo-random so StrictMode double renders don't reshuffle the particles.
const rand = (i, salt) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};
const lerp = (a, b, t) => a + (b - a) * t;

export default function RegionScene({ region }) {
  const ref = useRef(null);
  const visible = useInView(ref, { margin: '120px 0px 120px 0px' });

  const particles = useMemo(() => {
    const [count, sMin, sMax, tMin, tMax, yMin, yMax] = PARTICLES[region];
    return Array.from({ length: count }, (_, i) => {
      const dur = lerp(tMin, tMax, rand(i, 1));
      return {
        key: i,
        style: {
          left: `${(rand(i, 2) * 96 + 2).toFixed(1)}%`,
          top: `${lerp(yMin, yMax, rand(i, 3)).toFixed(1)}%`,
          width: `${lerp(sMin, sMax, rand(i, 4)).toFixed(1)}px`,
          height: `${lerp(sMin, sMax, rand(i, 4)).toFixed(1)}px`,
          animationDuration: `${dur.toFixed(1)}s`,
          animationDelay: `-${(rand(i, 5) * dur).toFixed(1)}s`,
          '--dr': `${lerp(-40, 40, rand(i, 6)).toFixed(0)}px`,
        },
      };
    });
  }, [region]);

  return (
    <div ref={ref} className={`scene scene--${region}${visible ? ' is-visible' : ''}`} aria-hidden="true">
      <div className="scene__sky" />
      {region === 'inazuma' && (
        <div className="scene__lightning">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline points="72,0 64,24 70,26 58,52 64,54 50,86" />
          </svg>
        </div>
      )}
      {particles.map((p) => (
        <span key={p.key} className="rp" style={p.style} />
      ))}
      <Skyline region={region} />
    </div>
  );
}
