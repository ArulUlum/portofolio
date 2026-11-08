import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import RegionScene from './RegionScene';
import { elVar, skillGroups } from '../data';
import { popIn, stagger } from '../motion';

export default function Skills() {
  return (
    <section className="section region region--fontaine" id="skills">
      <RegionScene region="fontaine" />
      <div className="container">
        <SectionHead index={5} region="fontaine" title="Tech Stack" />
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <Reveal className="skills__col" key={group.title} variants={stagger}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.tags.map((tag) => (
                  <motion.span
                    key={tag.label}
                    style={elVar(tag.el)}
                    variants={popIn}
                    whileHover={{ y: -2 }}
                  >
                    {tag.label}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
