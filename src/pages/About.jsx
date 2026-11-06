import Bolt from '@mui/icons-material/BoltOutlined';
import Handshake from '@mui/icons-material/HandshakeOutlined';
import Shield from '@mui/icons-material/ShieldOutlined';
import { CtaBanner, Heading, PageHero, Section } from '../components/Bits';
import { TeamArt } from '../components/Art';
import { CountUp, Reveal } from '../components/Motion';
import { MILESTONES, PHOTOS } from '../config';

const VALUES = [[Bolt, 'Simple first', 'If a screen needs training, we redesign it. Every flow should be obvious on day one.'], [Handshake, 'Built for India', 'GST invoices, PF, professional tax, TDS and weekly offs that match how Indian companies really work.'], [Shield, 'Your data, your control', 'Each company is separate, and role-based permissions decide who sees and approves what.']];
const NUMS = [[13, '', 'Department modules'], [32, '+', 'Built-in capabilities'], [2, ' min', 'To set up'], [5, '', 'Free users']];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="We make running a company less chaotic" text="Ur workplace started with one idea: teams lose hours moving between separate tools for tasks, HR, IT and accounts. So we put them together." art={PHOTOS.about ? <img src={PHOTOS.about} alt="Our team" className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-2xl" /> : <TeamArt />} />
      <Section className="!py-12"><div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">{NUMS.map(([n, s, l]) => <div key={l} className="rounded-3xl border border-[#e6dfcd] bg-[#fffdf8] p-6"><div className="text-4xl font-semibold"><CountUp to={n} suffix={s} /></div><div className="mt-1 text-sm text-stone-600">{l}</div></div>)}</div></Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal><div className="h-full rounded-[28px] bg-ink p-8 text-white sm:p-10"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">Our mission</p><h2 className="text-2xl font-semibold sm:text-3xl">Help every growing company work smart, without the heavy software.</h2><p className="mt-4 text-stone-400">Big ERPs are slow to set up and hard to use. We give you the tools that matter, ready in minutes, and clear enough that your team uses them on day one.</p></div></Reveal>
          <Reveal delay={120}><div className="h-full rounded-[28px] border border-[#e6dfcd] bg-[#fffdf8] p-8 sm:p-10"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-600">Our vision</p><h2 className="text-2xl font-semibold sm:text-3xl">A workplace where everyone grows together.</h2><p className="mt-4 text-stone-600">When tasks, people, IT and money live in one place, teams stop chasing updates and start moving faster, together.</p></div></Reveal>
        </div>
      </Section>
      <Section tint>
        <Heading eyebrow="What we believe" title="Three things we never compromise on" />
        <div className="grid gap-5 md:grid-cols-3">{VALUES.map(([Icon, t, d], i) => <Reveal key={t} delay={i * 100}><div className="h-full rounded-3xl border border-[#e6dfcd] bg-[#fffdf8] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white"><Icon /></div><h3 className="mb-2 text-xl font-semibold">{t}</h3><p className="text-stone-600">{d}</p></div></Reveal>)}</div>
      </Section>
      <Section>
        <Heading eyebrow="Our journey" title="From one idea to a full workplace platform" />
        <div className="relative mx-auto max-w-3xl border-l-2 border-[#e2d9c3] pl-8">{MILESTONES.map(([t, d], i) => <Reveal key={t} delay={i * 90}><div className="relative mb-9 last:mb-0"><span className={`absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border-4 border-[#faf7ef] ${i === MILESTONES.length - 1 ? 'bg-accent-500' : 'bg-ink'}`} /><h3 className="text-lg font-semibold">{t}</h3><p className="mt-1 text-stone-600">{d}</p></div></Reveal>)}</div>
      </Section>
      <CtaBanner />
    </>
  );
}
