import { useEffect, useRef, useState } from 'react';

// Fades + slides children in when they scroll into view
export function Reveal({ children, delay = 0, y = 26, className = '' }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setOn(true); return; }
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { setOn(true); return; }       // already on screen after a page change: just show it
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { rootMargin: '0px 0px -5% 0px' });
    io.observe(el);
    const safety = setTimeout(() => setOn(true), 2500);                              // never stay invisible, whatever the browser does
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);
  return <div ref={ref} className={className} style={{ opacity: on ? 1 : 0, transform: on ? 'none' : `translateY(${y}px)`, transition: `opacity .7s ease ${delay}ms, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}ms` }}>{children}</div>;
}

// Counts up to `to` once visible
export function CountUp({ to, prefix = '', suffix = '', dur = 1300 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => { const t0 = performance.now(); const tick = (t) => { const p = Math.min(1, (t - t0) / dur); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); };
    if (!('IntersectionObserver' in window)) { setN(to); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    const safety = setTimeout(() => setN(to), 4000);                                  // show the real number even if it never scrolled into view
    return () => { io.disconnect(); clearTimeout(safety); };
  }, [to, dur]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}
