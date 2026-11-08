import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHead from './SectionHead';
import RegionScene from './RegionScene';
import Corners from './Corners';
import { elVar, projects } from '../data';
import { cardStagger, fadeUp, popIn } from '../motion';

const slide = {
  enter: (dir) => ({ x: dir > 0 ? 70 : -70, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ x: dir > 0 ? -70 : 70, opacity: 0, transition: { duration: 0.2 } }),
};

const SWIPE_DISTANCE = 70;

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project"
      variants={cardStagger}
      initial="hidden"
      animate="show"
      whileHover={{ y: -3 }}
    >
      <Corners />
      <div className="project__info">
        <motion.div className="project__top" variants={fadeUp}>
          <span className="project__date">{project.date}</span>
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            {project.linkLabel}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.h3 variants={fadeUp}>{project.name}</motion.h3>
        <motion.div className="quest-rank" variants={fadeUp}>
          <span className="quest-rank__stars">{'★'.repeat(project.stars)}</span>
          <span className="quest-rank__label">{project.rank}</span>
        </motion.div>

        <ul className="project__list">
          {project.points.map((point) => (
            <motion.li key={point} variants={fadeUp}>
              {point}
            </motion.li>
          ))}
        </ul>

        <div className="project__tags">
          {project.tags.map((tag) => (
            <motion.span key={tag.label} style={elVar(tag.el)} variants={popIn}>
              {tag.label}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Arrow({ dir, onClick }) {
  return (
    <motion.button
      type="button"
      className={`carousel__arrow carousel__arrow--${dir < 0 ? 'prev' : 'next'}`}
      onClick={onClick}
      aria-label={dir < 0 ? 'Previous project' : 'Next project'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={dir < 0 ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
      </svg>
    </motion.button>
  );
}

export default function Projects() {
  const [[index, dir], setPage] = useState([0, 0]);
  const total = projects.length;

  const paginate = useCallback(
    (step) => setPage(([i]) => [(i + step + total) % total, step]),
    [total],
  );
  const goTo = (target) => setPage(([i]) => [target, target > i ? 1 : -1]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') paginate(-1);
    if (e.key === 'ArrowRight') paginate(1);
  };

  const onDragEnd = (_, { offset, velocity }) => {
    if (offset.x < -SWIPE_DISTANCE || velocity.x < -500) paginate(1);
    else if (offset.x > SWIPE_DISTANCE || velocity.x > 500) paginate(-1);
  };

  return (
    <section className="section region region--inazuma" id="projects">
      <RegionScene region="inazuma" />
      <div className="container">
        <SectionHead index={3} region="inazuma" title="Projects" />

        <div
          className="carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <div className="carousel__status">
            <div className="carousel__dots">
              {projects.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  className={`carousel__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Show ${p.name}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <span className="carousel__count">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          <div className="carousel__stage">
            <Arrow dir={-1} onClick={() => paginate(-1)} />
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                dragDirectionLock
                onDragEnd={onDragEnd}
                aria-live="polite"
              >
                <ProjectCard project={projects[index]} />
              </motion.div>
            </AnimatePresence>
            <Arrow dir={1} onClick={() => paginate(1)} />
          </div>
        </div>
      </div>
    </section>
  );
}
