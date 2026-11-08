import Reveal from './Reveal';
import { regions } from '../regions';

export default function SectionHead({ index, region, title }) {
  const { name, motto } = regions[region];
  return (
    <>
      <Reveal as="p" className="section__tag">
        <span className="diamond" />
        <span className="section__name">
          {String(index).padStart(2, '0')} — {name}
        </span>
        <span className="section__motto">{motto}</span>
      </Reveal>
      <Reveal as="h2" className="section__title" delay={0.08}>
        {title}
      </Reveal>
    </>
  );
}
