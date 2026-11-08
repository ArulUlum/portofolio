import { motion } from 'framer-motion';
import Typewriter from './Typewriter';
import { profile, roles } from '../data';
import { fadeUp, stagger } from '../motion';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div className="container hero__inner" variants={stagger} initial="hidden" animate="show">
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
    </section>
  );
}
