import { useMemo } from 'react';

const colors = [
  'var(--el-pyro)',
  'var(--el-hydro)',
  'var(--el-anemo)',
  'var(--el-electro)',
  'var(--el-dendro)',
  'var(--el-cryo)',
  'var(--el-geo)',
  'var(--accent)',
];

// Floating elemental dust. Randomised once per mount; motion is pure CSS.
export default function Particles() {
  const particles = useMemo(() => {
    const count = window.innerWidth < 720 ? 18 : 34;
    return Array.from({ length: count }, () => {
      const size = 2 + Math.random() * 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        left: `${Math.random() * 100}%`,
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        '--drift': `${(Math.random() - 0.5) * 80}px`,
        animationDuration: `${10 + Math.random() * 12}s`,
        animationDelay: `${Math.random() * 14}s`,
      };
    });
  }, []);

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((style, i) => (
        <span key={i} className="particle" style={style} />
      ))}
    </div>
  );
}
