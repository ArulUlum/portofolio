import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import RegionScene from './RegionScene';
import Corners from './Corners';
import CountUp from './CountUp';
import { aboutText, facts, profile } from '../data';
import { fadeLeft, fadeUp, stagger } from '../motion';

export default function About() {
  return (
    <section className="section region region--mondstadt" id="about">
      <RegionScene region="mondstadt" />
      <div className="container">
        <SectionHead index={1} region="mondstadt" title="About Me" />
        <div className="about__grid">
          <Reveal className="about__photo" variants={fadeLeft}>
            <img src={profile.photo} alt={profile.name} />
            <Corners />
          </Reveal>
          <div className="about__body">
            <Reveal as="p" className="about__text" variants={fadeUp}>
              {aboutText}
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
      </div>
    </section>
  );
}
