import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from './Typewriter';
import { profile, roles } from '../data';
import { fadeUp, stagger } from '../motion';

const photoIn = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <section className="hero" id="top">
      <div className="shooting-star" />
      <div className="shooting-star shooting-star--2" />

      <motion.div className="container hero__inner" variants={stagger} initial="hidden" animate="show">
        <motion.div className="hero__photo-outer" variants={photoIn} style={{ y: photoY }}>
          <div className="hero__rays" />
          <div className="hero__photo-wrap">
            <img src={profile.photo} alt={profile.name} className="hero__photo" />
          </div>
        </motion.div>

        <motion.p className="hero__eyebrow" variants={fadeUp}>
          <span className="diamond" />
          Traveler&apos;s Profile
          <span className="diamond" />
        </motion.p>
        <motion.h1 className="hero__name" variants={fadeUp}>
          {profile.name}
        </motion.h1>
        <motion.h2 className="hero__role" variants={fadeUp}>
          <Typewriter words={roles} />
        </motion.h2>
        <motion.p className="hero__desc" variants={fadeUp}>
          Computer Science graduate building backends with <strong>Python (Flask, FastAPI)</strong>,{' '}
          <strong>PostgreSQL</strong>, <strong>WebMethods</strong> &amp; <strong>APIGW</strong> — big into AI, ML, and
          Deep Learning.
        </motion.p>

        <motion.div className="hero__actions" variants={fadeUp}>
          <motion.a href="#contact" className="btn btn--primary" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
            Get In Touch
          </motion.a>
          <motion.a href="#projects" className="btn btn--ghost" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
            View Projects
          </motion.a>
        </motion.div>

        <motion.div className="hero__meta" variants={fadeUp}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="sep">•</span>
          <a href={profile.phoneHref}>{profile.phone}</a>
          <span className="sep">•</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github.com/ArulUlum
          </a>
          <span className="sep">•</span>
          <span>{profile.location}</span>
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
