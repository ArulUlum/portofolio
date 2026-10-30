import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { experience } from '../data';
import { fadeLeft, stagger } from '../motion';

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHead tag="02 — Adventure Log" title="Work Experience" />
        <div className="timeline">
          {experience.map((job) => (
            <Reveal className="timeline__item" key={job.title} variants={stagger}>
              <div className="timeline__dot" />
              <motion.div className="timeline__content" variants={fadeLeft}>
                <div className="timeline__head">
                  <h3>{job.title}</h3>
                  <span className="timeline__date">{job.date}</span>
                </div>
                <p className="timeline__org">{job.org}</p>
                <motion.ul className="timeline__list" variants={stagger}>
                  {job.points.map((point) => (
                    <motion.li key={point} variants={fadeLeft}>
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
