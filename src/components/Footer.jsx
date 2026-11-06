import { Link } from 'react-router-dom';
import Logo from './Logo';
import { APP_URL, CONTACT, TAGLINE } from '../config';

export default function Footer() {
  const col = (t, items) => (<div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">{t}</h4><ul className="space-y-2.5 text-[15px] text-stone-300">{items.map(([to, l, ext]) => <li key={l}>{ext ? <a href={to} className="transition hover:text-white">{l}</a> : <Link to={to} className="transition hover:text-white">{l}</Link>}</li>)}</ul></div>);
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo light className="h-12" />
          <p className="mt-5 text-lg font-semibold text-white">{TAGLINE}</p>
          <p className="mt-2 max-w-sm text-stone-400">Tasks, HR & payroll, IT helpdesk and GST invoicing in one simple workspace, built for growing Indian companies.</p>
          <a href={`${APP_URL}/register`} className="mt-5 inline-block rounded-xl bg-[#faf7ef] px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white">Start free →</a>
        </div>
        {col('Product', [['/features', 'Features'], ['/solutions', 'Solutions'], ['/pricing', 'Pricing'], [`${APP_URL}/login`, 'Sign in', 1]])}
        {col('Solutions', [['/solutions', 'HR & payroll'], ['/solutions', 'IT helpdesk'], ['/solutions', 'Finance'], ['/solutions', 'CRM & sales']])}
        {col('Company', [['/about', 'About'], ['/contact', 'Contact'], [`mailto:${CONTACT.email}`, CONTACT.email, 1]])}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-stone-500">© {new Date().getFullYear()} Ur workplace. All rights reserved.</div>
    </footer>
  );
}
