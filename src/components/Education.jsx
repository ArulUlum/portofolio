import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import RegionScene from './RegionScene';
import Corners from './Corners';
import { education } from '../data';
import { cardStagger, fadeUp } from '../motion';

export default function Education() {
  return (
    <section className="section region region--sumeru" id="education">
      <RegionScene region="sumeru" />
      <div className="container">
        <SectionHead index={4} region="sumeru" title="Education & Roles" />

        <Reveal className="edu" variants={cardStagger} whileHover={{ y: -3 }}>
          <Corners />
          <motion.div className="edu__head" variants={fadeUp}>
            <h3>{education.school}</h3>
            <span className="edu__date">{education.date}</span>
          </motion.div>
          <motion.p className="edu__degree" variants={fadeUp}>
            {education.degree}
          </motion.p>
          <ul className="timeline__list">
            {education.roles.map((role) => (
              <motion.li key={role.title} variants={fadeUp}>
                <strong>{role.title}</strong>, {role.years} — {role.desc}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
