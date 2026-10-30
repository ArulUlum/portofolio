import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import Corners from './Corners';
import { elVar, project } from '../data';
import { cardStagger, fadeUp, popIn } from '../motion';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead tag="03 — Featured Quest" title="Featured Project" />

        <Reveal className="project" variants={cardStagger} whileHover={{ y: -3 }}>
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
                Live Site
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
              <span className="quest-rank__stars">★★★★★</span>
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
        </Reveal>
      </div>
    </section>
  );
}
