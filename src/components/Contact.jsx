import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import RegionScene from './RegionScene';
import { contacts, elVar } from '../data';
import { fadeUp, stagger } from '../motion';

export default function Contact() {
  return (
    <section className="section section--contact region region--natlan" id="contact">
      <RegionScene region="natlan" />
      <div className="container contact__inner">
        <SectionHead index={6} region="natlan" title="Let's Connect" />
        <Reveal as="p" className="contact__desc">
          Open to work, collaborations, or just talking backend and AI. Reach out through any channel below.
        </Reveal>
        <Reveal className="contact__links" variants={stagger}>
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              className="contact__link"
              variants={fadeUp}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact__dot" style={elVar(c.el)} />
              <span className="contact__label">{c.label}</span>
              <span className="contact__value">{c.value}</span>
            </motion.a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
