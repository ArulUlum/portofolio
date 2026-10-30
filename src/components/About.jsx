import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import CountUp from './CountUp';
import { aboutItems, facts } from '../data';
import { fadeUp, stagger } from '../motion';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead tag="01 — Profile" title="About Me" />
        <div className="about__grid">
          <Reveal as="ul" className="about__text" variants={stagger}>
            {aboutItems.map((item) => (
              <motion.li key={item} variants={fadeUp}>
                {item}
              </motion.li>
            ))}
          </Reveal>
          <Reveal className="about__facts" variants={stagger}>
            {facts.map((fact) => (
              <motion.div className="fact" key={fact.label} variants={fadeUp}>
                <span className="fact__num">
                  <CountUp to={fact.to} suffix={fact.suffix} decimals={fact.decimals} />
                </span>
                <span className="fact__label">{fact.label}</span>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
