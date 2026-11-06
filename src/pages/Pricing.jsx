import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { PricingArt } from '../components/Art';
import { CtaBanner, Heading, PageHero, Section } from '../components/Bits';
import { APP_URL, COMPARE, CONTACT, FAQ, PLANS } from '../config';

const inr = (n) => n.toLocaleString('en-IN');

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple, honest pricing" text="Start free. Upgrade when you need more. Pay yearly and get 2 months free." art={<PricingArt />} />
      <Section className="!pt-4">
        <div className="mb-10 flex justify-center">
          <ToggleButtonGroup exclusive value={yearly ? 'y' : 'm'} onChange={(_, v) => v && setYearly(v === 'y')} color="primary" size="small">
            <ToggleButton value="m" sx={{ px: 3 }}>Monthly</ToggleButton><ToggleButton value="y" sx={{ px: 3 }}>Yearly · 2 months free</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{PLANS.map((p) => (
          <div key={p.name} className={`relative flex flex-col rounded-3xl bg-[#fffdf8] p-6 ${p.popular ? 'border-2 border-ink shadow-xl shadow-black/10' : 'border border-stone-200'}`}>
            {p.popular && <span className="absolute -top-3 left-1/2 -transtone-x-1/2 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-stone-900">Most popular</span>}
            <h3 className="text-lg font-extrabold">{p.name}</h3>
            <div className="mt-2 text-4xl font-extrabold">₹{inr(yearly ? p.price * 10 : p.price)}<span className="text-sm font-medium text-stone-500"> /{yearly ? 'year' : 'month'}</span></div>
            <p className="mb-4 mt-1 min-h-[44px] text-sm text-stone-600">{p.tag}</p>
            <ul className="mb-6 grid flex-1 gap-2.5">{p.items.map((i) => <li key={i} className="flex gap-2 text-sm text-stone-700"><CheckCircle color="primary" sx={{ fontSize: 18 }} />{i}</li>)}</ul>
            <Button variant={p.popular ? 'contained' : 'outlined'} href={p.contact ? `mailto:${CONTACT.email}` : `${APP_URL}/register`}>{p.cta}</Button>
          </div>))}
        </div>
        <p className="mt-6 text-center text-sm text-stone-500">Prices are exclusive of 18% GST.</p>
      </Section>
      <Section>
        <Heading eyebrow="Compare plans" title="See exactly what is included" />
        <div className="overflow-x-auto rounded-3xl border border-[#e6dfcd] bg-[#fffdf8]"><table className="w-full min-w-[640px] text-left text-sm">
          <thead><tr className="border-b border-[#e6dfcd]"><th className="p-4 font-semibold">Feature</th>{PLANS.map((p) => <th key={p.name} className="p-4 text-center font-semibold">{p.name}</th>)}</tr></thead>
          <tbody>{COMPARE.map(([name, ...v]) => <tr key={name} className="border-b border-[#ece8de] last:border-0"><td className="p-4 text-stone-700">{name}</td>{v.map((x, i) => <td key={i} className="p-4 text-center">{x === 1 ? <span className="font-bold text-emerald-700">✓</span> : x === 0 ? <span className="text-stone-300">—</span> : <b>{x}</b>}</td>)}</tr>)}</tbody>
        </table></div>
      </Section>
      <Section tint>
        <Heading eyebrow="FAQ" title="Questions? Answers." />
        <div className="mx-auto max-w-3xl">{FAQ.map(([q, a]) => (
          <Accordion key={q} disableGutters elevation={0} sx={{ border: '1px solid #e6dfcd', mb: 1.5, borderRadius: '12px !important', '&:before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<ExpandMore />}><span className="font-semibold">{q}</span></AccordionSummary><AccordionDetails><p className="text-stone-600">{a}</p></AccordionDetails>
          </Accordion>))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
