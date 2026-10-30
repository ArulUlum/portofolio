import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../motion';

// Scroll-triggered reveal. Pass `variants` to override (e.g. stagger parents).
export default function Reveal({ as = 'div', variants = fadeUp, delay = 0, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
