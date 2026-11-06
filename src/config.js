import TaskAlt from '@mui/icons-material/TaskAlt';
import AccessTime from '@mui/icons-material/AccessTime';
import Payments from '@mui/icons-material/Payments';
import SupportAgent from '@mui/icons-material/SupportAgent';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import Lock from '@mui/icons-material/Lock';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Inventory2 from '@mui/icons-material/Inventory2';
import BarChart from '@mui/icons-material/BarChart';

// ▼ Edit these once, the whole site updates
export const APP_URL = 'https://taskhub-frontend-bm0t.onrender.com';   // your deployed Ur workplace app (no trailing slash)
export const CONTACT = { email: 'hello@yourdomain.com', phone: '+91 00000 00000', address: 'Jharkhand, India' };

export const FEATURES = [
  { icon: TaskAlt, title: 'Projects & tasks', text: 'Kanban boards, Jira-style tickets, assignees, due dates and comments. See who is doing what at a glance.' },
  { icon: AccessTime, title: 'Attendance & leave', text: 'Web and GPS check-in, late marks, leave balances and holidays, all following your own work week.' },
  { icon: Payments, title: 'Payroll & payslips', text: 'Run salary in a click with PF, professional tax, TDS, bonus and loan recovery. Employees download their own payslips.' },
  { icon: SupportAgent, title: 'IT helpdesk with SLA', text: 'Auto-numbered tickets, priority-based deadlines, asset and software-licence tracking, access and change requests.' },
  { icon: ReceiptLong, title: 'GST invoices & bills', text: 'Printable GST invoices, payments that match invoices automatically, vendor bills with approval before payment.' },
  { icon: Lock, title: 'Roles & approvals', text: 'Decide exactly who can see and approve what. Leave, expenses, loans and bills follow a clear approval chain.' },
  { icon: PeopleAlt, title: 'CRM & leads', text: 'Capture leads, follow up on time, import from Excel and turn deals into customers in the same tool.' },
  { icon: Inventory2, title: 'Inventory & vendors', text: 'Track stock, purchase orders and suppliers so purchase, store and finance stay in sync.' },
  { icon: BarChart, title: 'Reports & insights', text: 'Attendance, payroll and ticket reports plus department dashboards showing what needs attention today.' },
];

export const MODULES = {
  HR: { title: 'HR that employees actually enjoy', points: ['Attendance, shifts, late marks & leave', 'Payroll, payslips, loans & advances', 'Hiring: job openings and candidate pipeline', 'Onboarding, exit and HR letters', 'Appraisals, documents and announcements'] },
  IT: { title: 'An IT desk that never misses a deadline', points: ['Tickets with automatic SLA by priority', 'Employees raise issues in seconds', 'Assets assigned to people, warranty alerts', 'Software licences and renewal reminders', 'Access and change requests with approvals'] },
  Finance: { title: 'Know who owes you and whom you owe', points: ['GST invoices with CGST / SGST / IGST', 'Payments match invoices automatically', 'Vendor bills approved before payment', 'Employee claims and salary in one view', 'Overdue alerts and monthly collection'] },
};

export const PLANS = [
  { name: 'Free', price: 0, tag: 'Tasks & projects for small teams', cta: 'Get started', items: ['Up to 5 users', 'Projects & tasks', 'IT & Finance modules', 'Roles & permissions'] },
  { name: 'Starter', price: 999, tag: 'Tasks plus full HRMS', cta: 'Choose Starter', items: ['Up to 25 users', 'Attendance & leave', 'Payroll & payslips', 'Hiring & onboarding'] },
  { name: 'Business', price: 2499, tag: 'HRMS + GPS attendance, CRM, inventory', cta: 'Try 14 days free', popular: true, items: ['Up to 100 users', 'Everything in Starter', 'GPS attendance', 'CRM, inventory & vendors'] },
  { name: 'Enterprise', price: 5999, tag: 'Unlimited users', cta: 'Talk to us', contact: true, items: ['Unlimited users', 'Everything in Business', 'Priority support', 'Custom onboarding'] },
];

export const FAQ = [
  ['Is Ur workplace really free to start?', 'Yes. The Free plan supports up to 5 users with projects, tasks, IT and Finance modules. You can also try every module free for 14 days.'],
  ['Can I use my own weekly offs and shift timing?', 'Yes. Each company sets its own weekly offs, shift timing and grace period. Attendance, leave and payroll follow them.'],
  ['Does it handle Indian payroll and GST?', 'Payroll supports PF, professional tax, TDS, bonus and loan recovery. Invoices are GST-ready with CGST/SGST/IGST and a printable format.'],
  ['Who can see my data?', 'Every company\'s data is kept separate. Inside your company, role-based permissions control who can view, edit and approve each module.'],
  ['Can I switch plans later?', 'Anytime. Upgrade when you need HR, CRM or more users. Your data stays exactly where it is.'],
];

// ───────── More content for the richer pages ─────────
export const PROBLEMS = [
  ['Tasks in one tool, HR in another', 'Attendance in an app, payroll in Excel, tickets on WhatsApp. Nothing talks to anything else.'],
  ['Approvals lost in chat', 'Leave, expense and bill approvals hide in messages, so people wait and money is paid late.'],
  ['No single view of the business', 'You cannot see what is overdue, who is absent and what is pending without asking five people.'],
];

export const SOLUTIONS = [
  { key: 'HR', title: 'HR & payroll', lead: 'From the first day to the last, in one place.', points: ['Attendance with web and GPS check-in, late marks and half days', 'Leave balances, holidays and your own weekly offs', 'One-click payroll with PF, professional tax, TDS and loan recovery', 'Hiring pipeline: job openings, interviews and offers', 'Onboarding, exit, HR letters and appraisals'], rows: [['Priya S. · Casual leave', 'Pending', 'warn'], ['Amit K. · Work from home', 'Approved', 'ok'], ['October payroll · 52 people', 'Published', 'ok'], ['Offer · Sr. Designer', 'Sent', 'info']] },
  { key: 'IT', title: 'IT helpdesk', lead: 'Every request gets a number, an owner and a clock.', points: ['Tickets with automatic SLA by priority', 'Employees raise issues in seconds, no training', 'Assets assigned to people with warranty alerts', 'Software licences with renewal reminders', 'Access and change requests with approvals'], rows: [['IT-0042 · Laptop not booting', 'Past SLA', 'bad'], ['IT-0043 · Wi-Fi in cabin 3', 'In progress', 'warn'], ['IT-0044 · Email reset', 'Resolved', 'ok'], ['Licence · Design suite', 'Renews in 12d', 'warn']] },
  { key: 'Finance', title: 'Finance', lead: 'Know who owes you and whom you owe.', points: ['GST invoices with CGST / SGST / IGST, printable as PDF', 'Payments match invoices automatically', 'Vendor bills approved before payment', 'Employee claims and salary in one view', 'Overdue alerts and monthly collection'], rows: [['INV-2026-0012 · ₹59,000', 'Partial', 'warn'], ['INV-2026-0013 · ₹1,18,000', 'Paid', 'ok'], ['BILL-2026-0007 · Rent', 'Overdue', 'bad'], ['Claims to reimburse', '₹18,400', 'info']] },
  { key: 'CRM', title: 'CRM & sales', lead: 'Never miss a follow-up again.', points: ['Capture leads and import them from Excel', 'Follow-up reminders on your dashboard', 'Assign leads to the right person', 'Move deals through your own pipeline stages', 'Turn a won deal into a customer'], rows: [['Sharma Traders', 'Follow-up today', 'warn'], ['Nova Logistics', 'Proposal sent', 'info'], ['Bright School', 'Won', 'ok'], ['Kiran & Co.', 'New', 'info']] },
];

export const INDUSTRIES = [
  ['💳', 'Fintech & services', 'Payouts, support tickets, GST invoicing and team HR together.'],
  ['🏢', 'Growing companies', 'Tasks, HR and accounts for 5 to 500 people without a heavy ERP.'],
  ['🚚', 'Logistics & field teams', 'GPS attendance, field visits, inventory and vendors.'],
  ['🎓', 'Schools & institutes', 'Staff HR, fees and admin requests in one place.'],
  ['🏥', 'Clinics & healthcare', 'Staff shifts, assets, procurement and approvals.'],
  ['📈', 'Sales teams', 'Leads, follow-ups, targets and incentives.'],
];

export const SECURITY = [
  ['Separate company data', 'Every company has its own isolated workspace.'],
  ['Role-based access', 'Control who can view, create, edit and approve in each module.'],
  ['Approval trails', 'Every step is recorded with who did it and when.'],
  ['Self-approval blocked', 'The person who raised a bill or loan cannot approve it alone.'],
];

export const COMPARE = [
  ['Projects & tasks', 1, 1, 1, 1], ['Roles & permissions', 1, 1, 1, 1], ['IT helpdesk & assets', 1, 1, 1, 1], ['Finance: invoices & bills', 1, 1, 1, 1],
  ['Attendance & leave', 0, 1, 1, 1], ['Payroll & payslips', 0, 1, 1, 1], ['Hiring & onboarding', 0, 1, 1, 1],
  ['GPS attendance', 0, 0, 1, 1], ['CRM & leads', 0, 0, 1, 1], ['Inventory & vendors', 0, 0, 1, 1],
  ['Users included', '5', '25', '100', 'Unlimited'], ['Priority support', 0, 0, 0, 1],
];

export const TAGLINE = 'Work Smart. Grow Together.';

// ▼ Optional real photos: paste an image URL (or put a file in /public and use '/team.jpg'). Leave '' to show the illustration.
export const PHOTOS = { about: '', contact: '' };
// ▼ Optional: a Formspree/Getform URL makes the contact form send directly. Leave '' to open the visitor's email app instead.
export const FORM_ENDPOINT = '';
export const HOURS = 'Mon – Sat, 10:00 – 18:30 IST';
export const CAPS = ['Attendance', 'GPS check-in', 'Leave balances', 'Holidays', 'Payslips (PDF)', 'HR letters', 'Onboarding & exit', 'Appraisals', 'Announcements', 'Employee directory', 'Expense claims', 'Loans & advances', 'Job openings', 'Candidate pipeline', 'IT tickets & SLA', 'Asset tracking', 'Software licences', 'Access requests', 'Change requests', 'GST invoices', 'Payments', 'Vendor bills', 'Recurring plans', 'Leads & follow-ups', 'Excel import', 'Purchase orders', 'Inventory', 'Vendors', 'Field visits', 'Notifications', 'Audit trail', 'Role permissions'];
export const MILESTONES = [['Spotted the problem', 'Teams were switching between five tools for tasks, HR, IT and accounts.'], ['Built the core', 'Projects, tasks, roles and approvals in one simple workspace.'], ['Added HR, IT & Finance', 'Attendance, payroll, SLA tickets, GST invoices and vendor bills.'], ['What we are building next', 'ESI & employer PF, Form 16, shift rosters, budgets and SLA e-mail alerts.']];
