import { useEffect, useState } from 'react';

export default function Typewriter({ words }) {
  const [text, setText] = useState('');

  useEffect(() => {
    let word = 0;
    let chars = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = words[word];
      if (!deleting) {
        chars += 1;
        setText(current.slice(0, chars));
        if (chars === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
      } else {
        chars -= 1;
        setText(current.slice(0, chars));
        if (chars === 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? 40 : 80);
    };

    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <>
      <span className="typewriter">{text}</span>
      <span className="cursor">|</span>
    </>
  );
}
