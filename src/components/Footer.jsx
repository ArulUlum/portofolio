import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__quote">— Wishing you clear skies and safe travels. —</p>
        <div className="footer__inner">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Framer Motion.
          </p>
          <a href="#top" className="footer__top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
