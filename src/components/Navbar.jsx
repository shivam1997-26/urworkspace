import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Button, Drawer, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './Logo';
import { APP_URL } from '../config';

const LINKS = [['/', 'Home'], ['/features', 'Features'], ['/solutions', 'Solutions'], ['/pricing', 'Pricing'], ['/about', 'About'], ['/contact', 'Contact']];
const cls = ({ isActive }) => `text-[15px] font-semibold transition-colors ${isActive ? 'text-brand-700' : 'text-stone-600 hover:text-ink'}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(244,242,238,.88)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e6dfcd', color: 'text.primary' }}>
      <Toolbar className="mx-auto w-full max-w-6xl !px-5" sx={{ minHeight: 68 }}>
        <Link to="/" className="mr-auto"><Logo /></Link>
        <nav className="mr-8 hidden gap-7 md:flex">{LINKS.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{l}</NavLink>)}</nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button href={`${APP_URL}/login`} color="inherit">Sign in</Button>
          <Button href={`${APP_URL}/register`} variant="contained">Start free</Button>
        </div>
        <IconButton className="md:!hidden" onClick={() => setOpen(true)} aria-label="Open menu"><MenuIcon /></IconButton>
      </Toolbar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 280 } }}>
        <div className="flex h-full flex-col p-5">
          <div className="mb-6 flex items-center justify-between"><Logo /><IconButton onClick={() => setOpen(false)}><CloseIcon /></IconButton></div>
          <div className="flex flex-col gap-5">{LINKS.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={cls} onClick={() => setOpen(false)}>{l}</NavLink>)}</div>
          <div className="mt-auto flex flex-col gap-2"><Button href={`${APP_URL}/login`} variant="outlined">Sign in</Button><Button href={`${APP_URL}/register`} variant="contained">Start free</Button></div>
        </div>
      </Drawer>
    </AppBar>
  );
}
