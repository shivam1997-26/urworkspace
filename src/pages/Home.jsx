import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { CtaBanner, FeatureCard, Heading, Pill, Section } from '../components/Bits';
import { CountUp, Reveal } from '../components/Motion';
import { SCREENS } from '../components/Screens';
import { APP_URL, FEATURES, INDUSTRIES, PROBLEMS, SECURITY, SOLUTIONS } from '../config';

const STEPS = [['Create your workspace', 'A guided sign-up: you, your company, modules and work hours.'], ['Add your team', 'Invite employees and give each person the right role.'], ['Set your rules', 'Weekly offs, holidays, leave types and approval flows.'], ['Start working', 'Track tasks, attendance, tickets and invoices from day one.']];
const STATS = [[13, '', 'Department modules'], [2, ' min', 'To set up your company'], [5, '', 'Users free forever'], [100, '%', 'Role-based access']];
const TICKER = ['Projects & tasks', 'Attendance', 'Payroll', 'IT helpdesk', 'GST invoices', 'Leave & approvals', 'CRM', 'Inventory', 'Vendor bills', 'Hiring', 'Reports'];

// Hero: a mini version of the real dashboard with an animated "Get started" checklist
function AppMock() {
  const items = ['Complete your company profile', 'Add your team', 'Create your first task', 'Confirm work hours'];
  const [done, setDone] = useState(0);
  useEffect(() => { const t = setInterval(() => setDone((d) => (d >= items.length ? 0 : d + 1)), 1500); return () => clearInterval(t); }, []);
  return (
    <div className="relative mx-auto mt-16 max-w-4xl">
      <div className="overflow-hidden rounded-3xl border border-[#e6dfcd] bg-[#fffdf8] text-left shadow-2xl shadow-black/10">
        <div className="flex items-center gap-1.5 border-b border-[#e6dfcd] px-4 py-3">{[0, 1, 2].map((i) => <i key={i} className="h-2.5 w-2.5 rounded-full bg-stone-300" />)}<span className="ml-3 rounded-md bg-stone-200/70 px-3 py-0.5 text-[11px] text-stone-500">app.urworkplace.in/dashboard</span></div>
        <div className="grid sm:grid-cols-[170px_1fr]">
          <div className="hidden border-r border-[#e6dfcd] p-4 text-[13px] text-stone-600 sm:block">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Overview</p>
            {['Dashboard', 'Tasks', 'Projects'].map((x, i) => <div key={x} className={`mb-1 rounded-xl px-3 py-2 ${i ? '' : 'bg-white font-semibold text-ink shadow-sm'}`}>{x}</div>)}
            <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Departments</p>
            {['HR', 'IT', 'Finance'].map((x) => <div key={x} className="mb-1 rounded-xl px-3 py-2">{x}</div>)}
          </div>
          <div className="p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-600">Company overview</p>
            <h3 className="mb-4 text-2xl font-semibold">Operations at a glance</h3>
            <div className="mb-4 grid grid-cols-3 gap-2.5">{[['Present', '46/52'], ['Open tickets', '8'], ['To collect', '₹4.2L']].map(([a, b]) => <div key={a} className="rounded-2xl bg-[#f3eee0] p-3"><div className="text-[11px] text-stone-500">{a}</div><div className="text-lg font-bold">{b}</div></div>)}</div>
            <div className="rounded-2xl border border-[#e6dfcd] bg-white p-4">
              <div className="mb-2 flex justify-between text-[13px] font-semibold"><span>Get started — {done} of {items.length} done</span></div>
              <div className="mb-3 h-1.5 rounded bg-stone-200"><div className="h-1.5 rounded bg-ink transition-all duration-700" style={{ width: `${(done / items.length) * 100}%` }} /></div>
              {items.map((t, i) => (
                <div key={t} className="flex items-center gap-3 border-t border-stone-100 py-2 text-[13px]">
                  <span className={`grid h-5 w-5 place-items-center rounded-full text-[11px] text-white transition-colors duration-500 ${i < done ? 'bg-emerald-700' : 'bg-stone-200'}`}>{i < done ? '✓' : ''}</span>
                  <span className={i < done ? 'text-stone-400 line-through' : ''}>{t}</span>
                </div>))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -left-6 top-24 hidden animate-float rounded-2xl border border-[#e6dfcd] bg-white px-4 py-3 text-left text-[13px] shadow-xl lg:block"><b>Leave approved</b><br /><span className="text-stone-500">Priya · 2 days</span></div>
      <div className="absolute -right-8 top-40 hidden animate-float-slow rounded-2xl border border-[#e6dfcd] bg-white px-4 py-3 text-left text-[13px] shadow-xl lg:block"><b>IT-0042 resolved</b><br /><span className="text-stone-500">within SLA · 2h</span></div>
      <div className="absolute -bottom-6 left-16 hidden animate-float rounded-2xl border border-[#e6dfcd] bg-white px-4 py-3 text-left text-[13px] shadow-xl lg:block"><b>Payment received</b><br /><span className="text-emerald-700">₹59,000 · INV-2026-0012</span></div>
    </div>
  );
}

export default function Home() {
  const [tab, setTab] = useState(0);
  const m = SOLUTIONS[tab];
  return (
    <>
      <div className="relative overflow-hidden pb-24 pt-14 text-center sm:pt-20">
        {/* logo-inspired swoosh rings + soft dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(#e2d9c3 1.2px, transparent 1.2px)', backgroundSize: '26px 26px', maskImage: 'radial-gradient(ellipse at 50% 30%, #000 20%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, #000 20%, transparent 70%)' }} />
        <svg className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] animate-spin-slow opacity-70" viewBox="0 0 200 200" fill="none"><path d="M20 120 C 20 60, 90 20, 170 50" stroke="#d98b2b" strokeWidth="9" strokeLinecap="round" /></svg>
        <svg className="pointer-events-none absolute -right-48 bottom-10 h-[560px] w-[560px] animate-spin-slow opacity-50" style={{ animationDirection: 'reverse' }} viewBox="0 0 200 200" fill="none"><path d="M30 140 C 40 190, 150 190, 180 90" stroke="#d98b2b" strokeWidth="7" strokeLinecap="round" /></svg>
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="mb-6 inline-flex animate-pop items-center gap-2 rounded-full border border-[#e2d9c3] bg-[#fffdf8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600"><i className="h-2 w-2 rounded-full bg-accent-500" />Built for growing Indian companies</p>
          <h1 className="mx-auto max-w-4xl text-[44px] font-semibold leading-[1.02] sm:text-7xl lg:text-[84px]">Work smart.<br /><span className="relative inline-block text-accent-500">Grow together.<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none"><path d="M2 8 Q 75 1 150 7 T 298 5" fill="none" stroke="#262626" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="320" strokeDashoffset="320"><animate attributeName="stroke-dashoffset" to="0" dur="1.2s" begin=".5s" fill="freeze" /></path></svg></span></h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-stone-600 sm:text-xl">Ur workplace brings tasks, attendance &amp; payroll, an IT helpdesk and GST invoicing into one simple workspace, so your team spends time on work, not on tools.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3"><Button href={`${APP_URL}/register`} variant="contained" size="large">Start free, no card needed</Button><Button component={Link} to="/solutions" variant="outlined" color="primary" size="large">Explore solutions</Button></div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-stone-600">{['Free for up to 5 users', '14-day trial of all modules', 'GST & PF ready', 'Setup in 2 minutes'].map((t) => <span key={t} className="flex items-center gap-1.5"><span className="font-bold text-accent-500">✓</span>{t}</span>)}</div>
          <AppMock />
        </div>
      </div>

      <div className="overflow-hidden border-y border-[#e6dfcd] bg-[#fffdf8] py-4"><div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">{[...TICKER, ...TICKER].map((t, i) => <span key={i} className="flex items-center gap-10">{t}<i className="h-1.5 w-1.5 rounded-full bg-accent-500" /></span>)}</div></div>

      <Section className="!py-12"><div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">{STATS.map(([n, suf, l]) => <div key={l}><div className="text-4xl font-semibold sm:text-5xl"><CountUp to={n} suffix={suf} /></div><div className="mt-1 text-sm text-stone-600">{l}</div></div>)}</div></Section>

      <Section>
        <Heading eyebrow="Our promise" title="Work smart. Grow together." text="Two simple ideas behind every screen we build." />
        <div className="grid gap-5 md:grid-cols-2">
          {[['Work smart', 'Let the software do the boring part.', ['Auto-numbered tickets and invoices', 'SLA deadlines set by priority', 'Payments matched to invoices automatically', 'Payroll, PF and loan recovery in one click']], ['Grow together', 'One workspace the whole team shares.', ['Everyone sees their own tasks, leave and payslips', 'Clear approval chains, nothing lost in chat', 'Roles decide who can view, edit and approve', 'HR, IT and Finance stay in sync']]].map(([t, d, pts], i) => (
            <Reveal key={t} delay={i * 120}><div className={`h-full rounded-[28px] p-8 sm:p-10 ${i ? 'bg-ink text-white' : 'border border-[#e6dfcd] bg-[#fffdf8]'}`}>
              <h3 className={`text-3xl font-semibold ${i ? 'text-accent-400' : 'text-accent-600'}`}>{t}</h3><p className={`mb-6 mt-2 ${i ? 'text-stone-400' : 'text-stone-600'}`}>{d}</p>
              <ul className="grid gap-3">{pts.map((p) => <li key={p} className="flex gap-2.5 text-[15px]"><CheckCircle sx={{ fontSize: 19, mt: '2px', color: '#d98b2b' }} />{p}</li>)}</ul>
            </div></Reveal>))}
        </div>
      </Section>

      <Section tint>
        <Heading eyebrow="The problem" title="Growing teams outgrow spreadsheets and chat groups" />
        <div className="grid gap-5 md:grid-cols-3">{PROBLEMS.map(([t, d], i) => <Reveal key={t} delay={i * 100}><div className="h-full rounded-3xl border border-[#e6dfcd] bg-[#fffdf8] p-7"><div className="mb-4 text-3xl font-semibold text-accent-500">0{i + 1}</div><h3 className="mb-2 text-lg font-semibold">{t}</h3><p className="text-[15px] text-stone-600">{d}</p></div></Reveal>)}</div>
      </Section>

      <Section>
        <Heading eyebrow="Features" title="Everything your team needs, nothing it doesn't" text="Clean screens, clear steps and approvals that just work, on phone and desktop." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{FEATURES.map((f, i) => <FeatureCard key={f.title} {...f} delay={(i % 3) * 90} />)}</div>
      </Section>

      <Section dark>
        <Reveal><div className="mb-10 text-center"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">Solutions</p><h2 className="text-3xl font-semibold sm:text-[42px] sm:leading-[1.1]">One platform, every department</h2></div></Reveal>
        <div className="mb-8 flex flex-wrap justify-center gap-2">{SOLUTIONS.map((s, i) => <button key={s.key} onClick={() => setTab(i)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${i === tab ? 'border-white bg-white text-ink' : 'border-white/20 text-stone-300 hover:border-white/50'}`}>{s.key}</button>)}</div>
        <div key={tab} className="mx-auto grid max-w-5xl animate-pop gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 md:grid-cols-2">
          <div><h3 className="text-2xl font-semibold">{m.title}</h3><p className="mb-5 mt-1 text-stone-400">{m.lead}</p><ul className="grid gap-3">{m.points.map((p) => <li key={p} className="flex gap-2.5 text-[15px] text-stone-200"><CheckCircle sx={{ fontSize: 19, mt: '2px', color: '#f0b45c' }} />{p}</li>)}</ul></div>
          <div className="content-center">{(() => { const S = SCREENS[m.key]; return <S />; })()}</div>
        </div>
        <div className="mt-8 text-center"><Button component={Link} to="/solutions" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }} variant="outlined">See all solutions →</Button></div>
      </Section>

      <Section>
        <Heading eyebrow="How it works" title="Up and running in minutes" text="A guided setup. No consultants, no long onboarding calls." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{STEPS.map(([t, d], i) => <Reveal key={t} delay={i * 110}><div><div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-ink font-semibold text-white">{i + 1}</div><h3 className="font-semibold">{t}</h3><p className="mt-1.5 text-[15px] text-stone-600">{d}</p></div></Reveal>)}</div>
      </Section>

      <Section tint>
        <Heading eyebrow="Who it's for" title="Built for teams like yours" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{INDUSTRIES.map(([ic, t, d], i) => <Reveal key={t} delay={(i % 3) * 90}><div className="h-full rounded-3xl border border-[#e6dfcd] bg-[#fffdf8] p-6 transition hover:-translate-y-1 hover:shadow-lg"><div className="mb-3 text-3xl">{ic}</div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-[15px] text-stone-600">{d}</p></div></Reveal>)}</div>
      </Section>

      <Section>
        <Heading eyebrow="Security & control" title="You decide who sees and approves what" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{SECURITY.map(([t, d], i) => <Reveal key={t} delay={i * 90}><div className="h-full rounded-3xl border border-[#e6dfcd] p-6"><CheckCircle sx={{ color: '#d98b2b' }} /><h3 className="mb-1.5 mt-3 font-semibold">{t}</h3><p className="text-[15px] text-stone-600">{d}</p></div></Reveal>)}</div>
      </Section>
      <CtaBanner />
    </>
  );
}
