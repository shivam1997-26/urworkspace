import { useState } from 'react';
import { Alert, Button, MenuItem, TextField } from '@mui/material';
import Mail from '@mui/icons-material/MailOutline';
import Phone from '@mui/icons-material/PhoneOutlined';
import Place from '@mui/icons-material/PlaceOutlined';
import Clock from '@mui/icons-material/AccessTimeOutlined';
import { PageHero, Section, Heading } from '../components/Bits';
import { ContactArt } from '../components/Art';
import { Reveal } from '../components/Motion';
import { CONTACT, FORM_ENDPOINT, HOURS, PHOTOS } from '../config';

const TOPICS = ['Book a demo', 'Pricing & plans', 'HR & payroll', 'IT helpdesk', 'Finance & invoices', 'CRM & sales', 'Partnership', 'Something else'];
const QUICK = [['Book a demo', 'See the product with your own use case.', 'Book a demo'], ['Talk to support', 'Already using Ur workplace? We will help.', 'Something else'], ['Partner with us', 'Consultants and accountants, let us work together.', 'Partnership']];

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', phone: '', company: '', topic: 'Book a demo', message: '' });
  const [state, setState] = useState('idle');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault(); setState('sending');
    if (FORM_ENDPOINT) {
      try { const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) }); setState(r.ok ? 'sent' : 'error'); } catch { setState('error'); }
    } else {                                    // no backend: open the visitor's email app with everything filled in
      const body = `${f.message}\n\n${f.name} · ${f.company || '—'}\n${f.email} · ${f.phone || '—'}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`${f.topic} — ${f.name}`)}&body=${encodeURIComponent(body)}`; setState('mail');
    }
  };
  const info = [[Mail, 'Email us', CONTACT.email, `mailto:${CONTACT.email}`], [Phone, 'Call us', CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, '')}`], [Place, 'Visit us', CONTACT.address], [Clock, 'Working hours', HOURS]];
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your workplace" text="Questions about plans, a demo, or moving your team over? Tell us a little and we will reply within one working day." art={PHOTOS.contact ? <img src={PHOTOS.contact} alt="Contact" className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-2xl" /> : <ContactArt />} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2"><div className="relative h-full overflow-hidden rounded-[28px] bg-ink p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 animate-float-slow rounded-full bg-accent-500/25 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">Get in touch</p>
            <h2 className="relative mb-8 mt-2 text-2xl font-semibold sm:text-3xl">We would love to hear from you</h2>
            <div className="relative grid gap-5">{info.map(([Icon, t, v, href]) => (
              <div key={t} className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400"><Icon /></span><div><div className="text-sm text-stone-400">{t}</div>{href ? <a href={href} className="font-semibold hover:text-accent-400">{v}</a> : <div className="font-semibold">{v}</div>}</div></div>))}</div>
            <div className="relative mt-8 rounded-2xl bg-white/5 p-4 text-sm text-stone-300"><b className="text-white">Typical reply time:</b> within 1 working day. Demo requests are usually answered the same day.</div>
          </div></Reveal>
          <Reveal delay={120} className="lg:col-span-3"><form onSubmit={submit} className="grid gap-4 rounded-[28px] border border-[#e6dfcd] bg-[#fffdf8] p-6 shadow-xl shadow-black/5 sm:p-9">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <div className="grid gap-4 sm:grid-cols-2"><TextField label="Your name" required value={f.name} onChange={set('name')} /><TextField label="Work email" type="email" required value={f.email} onChange={set('email')} /></div>
            <div className="grid gap-4 sm:grid-cols-2"><TextField label="Phone (optional)" value={f.phone} onChange={set('phone')} /><TextField label="Company" value={f.company} onChange={set('company')} /></div>
            <TextField select label="I am interested in" value={f.topic} onChange={set('topic')}>{TOPICS.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}</TextField>
            <TextField label="How can we help?" required multiline minRows={4} value={f.message} onChange={set('message')} />
            <Button type="submit" variant="contained" size="large" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message'}</Button>
            {state === 'sent' && <Alert severity="success">Thank you! We have received your message and will reply within one working day.</Alert>}
            {state === 'mail' && <Alert severity="success">Your email app should open with the message ready. Just press send.</Alert>}
            {state === 'error' && <Alert severity="error">Could not send. Please email us at {CONTACT.email}.</Alert>}
          </form></Reveal>
        </div>
      </Section>
      <Section tint>
        <Heading eyebrow="How can we help?" title="Choose what fits you" />
        <div className="grid gap-5 md:grid-cols-3">{QUICK.map(([t, d, topic], i) => <Reveal key={t} delay={i * 100}><a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(topic)}`} className="group block h-full rounded-3xl border border-[#e6dfcd] bg-[#fffdf8] p-7 transition hover:-translate-y-1 hover:border-ink hover:shadow-xl hover:shadow-black/5"><h3 className="text-lg font-semibold">{t}</h3><p className="mb-4 mt-1.5 text-stone-600">{d}</p><span className="font-semibold text-accent-600 transition group-hover:ml-1">Email us →</span></a></Reveal>)}</div>
      </Section>
    </>
  );
}
