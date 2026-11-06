import { useEffect, useLayoutEffect, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function Progress() {
  const [p, setP] = useState(0);
  useEffect(() => { const f = () => { const h = document.documentElement; setP(h.scrollHeight > h.clientHeight ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 : 0); }; f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  return <div className="fixed left-0 top-0 z-[2000] h-[3px] bg-accent-500" style={{ width: `${p}%` }} />;
}

function ScrollTop() { const { pathname } = useLocation(); useLayoutEffect(() => { window.scrollTo(0, 0); }, [pathname]); return null; }

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollTop />
      <Progress />
      <Navbar />
      <main className="flex-1" key={pathname}>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="py-32 text-center"><h1 className="text-4xl font-extrabold">Page not found</h1><a href="/" className="mt-4 inline-block font-semibold text-brand-700">Go home →</a></div>} />
        </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
