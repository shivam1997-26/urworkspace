import { Button } from '@mui/material';
import { APP_URL } from '../config';
import { Reveal } from './Motion';

export const Eyebrow = ({ children }) => <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-600">{children}</p>;
export const Heading = ({ eyebrow, title, text, center = true }) => (
  <Reveal><div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-[42px] sm:leading-[1.1]">{title}</h2>
    {text && <p className="mt-4 text-lg text-stone-600">{text}</p>}
  </div></Reveal>
);
export const Section = ({ children, tint, dark, className = '' }) => (
  <section className={`py-16 sm:py-24 ${tint ? 'bg-[#f3eee0]' : ''} ${dark ? 'bg-ink text-white' : ''} ${className}`}><div className="mx-auto max-w-6xl px-5">{children}</div></section>
);
export const PageHero = ({ eyebrow, title, text, art, crumb }) => (
  <div className="relative overflow-hidden border-b border-[#e6dfcd] bg-gradient-to-b from-[#fffdf8] to-[#faf7ef]">
    <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#e2d9c3 1.2px, transparent 1.2px)', backgroundSize: '26px 26px', maskImage: 'linear-gradient(90deg, transparent, #000 90%)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 90%)' }} />
    <div className={`relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 ${art ? 'md:grid-cols-2' : 'text-center'}`}>
      <div className={art ? '' : 'mx-auto max-w-3xl'}>
        <nav className="mb-5 text-sm text-stone-500"><a href="/" className="hover:text-ink">Home</a> <span className="mx-1.5">/</span> <span className="font-semibold text-ink">{crumb || eyebrow}</span></nav>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl sm:leading-[1.04]">{title}</h1><p className="mt-5 max-w-xl text-lg text-stone-600">{text}</p>
      </div>
      {art && <div className="mx-auto w-full max-w-md md:max-w-none">{art}</div>}
    </div>
  </div>
);
export const FeatureCard = ({ icon: Icon, title, text, delay = 0 }) => (
  <Reveal delay={delay}><div className="group h-full rounded-3xl border border-[#e6dfcd] bg-[#fffdf8] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-ink hover:shadow-xl hover:shadow-black/5">
    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white transition group-hover:rotate-6 group-hover:bg-accent-600"><Icon /></div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3><p className="text-[15px] leading-relaxed text-stone-600">{text}</p>
  </div></Reveal>
);
export const Pill = ({ tone = 'ok', children }) => {
  const c = { ok: 'bg-emerald-100 text-emerald-800', warn: 'bg-amber-100 text-amber-800', bad: 'bg-red-100 text-red-800', info: 'bg-stone-200 text-stone-700' }[tone];
  return <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${c}`}>{children}</span>;
};
export const CtaBanner = () => (
  <Section><Reveal><div className="relative overflow-hidden rounded-[32px] bg-ink px-6 py-16 text-center text-white sm:py-20">
    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-float-slow rounded-full bg-accent-500/25 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 animate-float rounded-full bg-accent-400/15 blur-3xl" />
    <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">Get started</p>
    <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold sm:text-5xl sm:leading-[1.1]">Bring your whole company into one workspace</h2>
    <p className="relative mx-auto mt-4 max-w-xl text-stone-400">Create your free workspace in about two minutes. No card needed.</p>
    <Button href={`${APP_URL}/register`} size="large" sx={{ mt: 4, bgcolor: '#faf7ef', color: '#262626', '&:hover': { bgcolor: '#fff' }, position: 'relative' }}>Start free today →</Button>
  </div></Reveal></Section>
);
