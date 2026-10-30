import Reveal from './Reveal';

export default function SectionHead({ tag, title }) {
  return (
    <>
      <Reveal as="p" className="section__tag">
        <span className="diamond" />
        {tag}
      </Reveal>
      <Reveal as="h2" className="section__title" delay={0.08}>
        {title}
      </Reveal>
    </>
  );
}
