import { Pill } from './Bits';

// Realistic product screens built with HTML/CSS (not photos), so they stay sharp and on-brand.
export const Frame = ({ title, children, className = '' }) => (
  <div className={`overflow-hidden rounded-3xl border border-[#e6dfcd] bg-[#fffdf8] text-left shadow-2xl shadow-black/10 ${className}`}>
    <div className="flex items-center gap-1.5 border-b border-[#e6dfcd] bg-[#faf7ef] px-4 py-2.5">{[0, 1, 2].map((i) => <i key={i} className="h-2.5 w-2.5 rounded-full bg-stone-300" />)}<span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-stone-500">{title}</span></div>
    <div className="p-4 sm:p-5">{children}</div>
  </div>
);
const Av = ({ t, c = '#262626' }) => <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white" style={{ background: c }}>{t}</span>;
const Kpi = ({ a, b, tone = '' }) => <div className="rounded-2xl bg-[#f3eee0] p-3"><div className="text-[11px] text-stone-500">{a}</div><div className={`text-lg font-bold ${tone}`}>{b}</div></div>;
const Head = ({ t, s }) => <div className="mb-3"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-600">{s}</p><h4 className="text-xl font-semibold">{t}</h4></div>;

export const HRScreen = () => (
  <Frame title="app.urworkplace.in/attendance"><Head s="HR" t="Attendance · Today" />
    <div className="mb-4 grid grid-cols-3 gap-2.5"><Kpi a="Present" b="46 / 52" /><Kpi a="Late today" b="4" tone="text-amber-700" /><Kpi a="On leave" b="3" /></div>
    <div className="mb-4 flex h-16 items-end gap-2 rounded-2xl border border-[#e6dfcd] bg-white p-3">{[60, 80, 72, 90, 85, 40, 20].map((h, i) => <div key={i} className="flex-1 rounded-t bg-[#262626]" style={{ height: `${h}%`, opacity: i > 4 ? 0.25 : 1 }} />)}</div>
    {[['PS', 'Priya Sharma', '09:12', 'Present', 'ok', '#d98b2b'], ['AK', 'Amit Kumar', '09:48', 'Late', 'warn', '#262626'], ['RV', 'Ravi Verma', '—', 'On leave', 'info', '#8a867c'], ['NS', 'Neha Singh', '09:05', 'Present', 'ok', '#d98b2b']].map(([i, n, t, s, tn, c]) => (
      <div key={n} className="flex items-center gap-3 border-t border-[#efe9d8] py-2.5 text-[13px]"><Av t={i} c={c} /><span className="flex-1 font-medium">{n}</span><span className="text-stone-500">{t}</span><Pill tone={tn}>{s}</Pill></div>))}
  </Frame>
);

export const ITScreen = () => (
  <Frame title="app.urworkplace.in/it/tickets"><Head s="IT" t="Support tickets" />
    <div className="mb-4 grid grid-cols-3 gap-2.5"><Kpi a="Open" b="8" /><Kpi a="Past SLA" b="1" tone="text-red-700" /><Kpi a="Avg. resolve" b="2.4 h" /></div>
    {[['IT-0042', 'Laptop not booting', 'Critical', 'bad', 'Past SLA', 'RK', '#262626'], ['IT-0043', 'Wi-Fi weak in cabin 3', 'Medium', 'warn', '5h left', 'SM', '#d98b2b'], ['IT-0044', 'Email password reset', 'Low', 'info', 'Resolved', 'RK', '#262626'], ['IT-0045', 'New joiner laptop', 'High', 'warn', '3h left', 'SM', '#d98b2b']].map(([n, s, p, tn, sla, a, c]) => (
      <div key={n} className="flex items-center gap-3 border-t border-[#efe9d8] py-2.5 text-[13px]"><span className="w-14 font-mono text-[11px] text-stone-500">{n}</span><span className="flex-1 font-medium">{s}</span><span className="hidden sm:block"><Pill tone={tn}>{p}</Pill></span><span className={`w-16 text-right text-[11px] font-semibold ${sla === 'Past SLA' ? 'text-red-700' : 'text-stone-500'}`}>{sla}</span><Av t={a} c={c} /></div>))}
  </Frame>
);

export const FinanceScreen = () => (
  <Frame title="app.urworkplace.in/finance/invoices"><Head s="Finance" t="Invoice INV-2026-0012" />
    <div className="relative rounded-2xl border border-[#e6dfcd] bg-white p-4 text-[12.5px]">
      <span className="absolute right-4 top-4 rotate-6 rounded-md border-2 border-emerald-700 px-2 py-0.5 text-xs font-extrabold tracking-widest text-emerald-700">PAID</span>
      <div className="mb-3 flex items-center gap-2"><img src="/logo-mark.png" alt="" className="h-8 w-auto" /><div><b>Ur workplace</b><div className="text-[11px] text-stone-500">GSTIN 20ABCDE1234F1Z5</div></div></div>
      <div className="mb-2 text-stone-500">Billed to <b className="text-ink">Sharma Traders</b></div>
      {[['Annual plan · Business', '1', '50,000'], ['Onboarding & training', '1', '9,000']].map(([d, q, a]) => <div key={d} className="flex justify-between border-t border-[#efe9d8] py-1.5"><span>{d} <span className="text-stone-400">× {q}</span></span><span>₹{a}</span></div>)}
      <div className="flex justify-between border-t border-[#efe9d8] py-1.5 text-stone-500"><span>CGST 9% + SGST 9%</span><span>₹10,620</span></div>
      <div className="flex justify-between border-t-2 border-ink pt-2 text-base font-extrabold"><span>Total</span><span>₹69,620</span></div>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-2.5"><Kpi a="To collect" b="₹4.2L" /><Kpi a="Collected this month" b="₹11.8L" tone="text-emerald-700" /></div>
  </Frame>
);

export const CRMScreen = () => (
  <Frame title="app.urworkplace.in/crm/leads"><Head s="CRM" t="Sales pipeline" />
    <div className="grid grid-cols-3 gap-2.5">{[['New', [['Kiran & Co.', '₹40k'], ['Metro Foods', '₹95k']]], ['Proposal', [['Nova Logistics', '₹1.2L']]], ['Won', [['Bright School', '₹60k'], ['Sharma Traders', '₹70k']]]].map(([h, cards]) => (
      <div key={h} className="rounded-2xl border border-[#e6dfcd] bg-[#faf7ef] p-2.5"><div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-stone-500">{h}</div>
        {cards.map(([n, v]) => <div key={n} className="mb-2 rounded-xl border border-[#e6dfcd] bg-white p-2.5 text-[12px]"><b>{n}</b><div className="mt-1 flex justify-between text-stone-500"><span>{v}</span><span className="text-accent-600">Follow-up today</span></div></div>)}</div>))}</div>
  </Frame>
);

export const SCREENS = { HR: HRScreen, IT: ITScreen, Finance: FinanceScreen, CRM: CRMScreen };
