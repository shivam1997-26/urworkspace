// Brand illustrations (SVG, no external images). Colours follow the logo: charcoal, orange, cream.
const INK = '#262626', OR = '#d98b2b', CREAM = '#fffdf8', SAND = '#f3eee0', LINE = '#e6dfcd';

const Person = ({ x, y, s = 1, c = INK, d = '0s' }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}><g className="animate-float" style={{ animationDelay: d }}>
    <circle cx="0" cy="-52" r="15" fill={c} /><path d="M-22 44 V-12 Q-22 -32 0 -32 Q22 -32 22 -12 V44 Z" fill={c} />
  </g></g>
);
const Card = ({ x, y, w = 110, h = 44, children, d = '0s', slow }) => (
  <g transform={`translate(${x} ${y})`}><g className={slow ? 'animate-float-slow' : 'animate-float'} style={{ animationDelay: d }}>
    <rect width={w} height={h} rx="12" fill={CREAM} stroke={LINE} /><g transform="translate(12 0)">{children}</g></g></g>
);
const Svg = ({ children, label }) => <svg viewBox="0 0 520 400" role="img" aria-label={label} className="h-auto w-full">{children}</svg>;
const Blob = () => <><ellipse cx="260" cy="210" rx="235" ry="170" fill={SAND} /><path d="M30 250 C 60 390 390 390 490 150" fill="none" stroke={OR} strokeWidth="10" strokeLinecap="round" /></>;

export const TeamArt = () => (
  <Svg label="A team working together"><Blob />
    <rect x="130" y="64" width="260" height="170" rx="18" fill={CREAM} stroke={LINE} />
    {[0, 1, 2].map((i) => <circle key={i} cx={150 + i * 12} cy="82" r="3.5" fill={LINE} />)}
    {[[160, 150, 60, INK], [196, 130, 80, OR], [232, 160, 50, INK], [268, 120, 90, OR], [304, 140, 70, INK], [340, 105, 105, OR]].map(([x, y, h, c], i) => <rect key={i} x={x} y={y + 40} width="22" height={h - 40 > 0 ? h - 40 + 20 : 20} rx="5" fill={c} opacity=".9" />)}
    <rect x="150" y="100" width="90" height="8" rx="4" fill={LINE} />
    <Person x="90" y="300" c={INK} /><Person x="190" y="318" s="1.15" c={OR} d=".6s" /><Person x="330" y="318" s="1.15" c={INK} d="1.2s" /><Person x="430" y="300" c={OR} d="1.8s" />
    <Card x="30" y="90" d=".3s"><circle cx="14" cy="22" r="11" fill="#2e7d4f" /><path d="M9 22 l4 4 l7 -8" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" /><text x="32" y="26" fontSize="13" fontWeight="700" fill={INK}>Approved</text></Card>
    <Card x="385" y="40" w="120" d="1s" slow><text x="4" y="19" fontSize="10" fill="#78716c">Collected</text><text x="4" y="36" fontSize="15" fontWeight="800" fill={INK}>₹4.2L</text></Card>
  </Svg>
);

export const ContactArt = () => (
  <Svg label="Talk to us"><Blob />
    <g className="animate-float-slow"><rect x="90" y="60" width="270" height="120" rx="26" fill={INK} /><path d="M130 180 l-8 36 l44 -36 z" fill={INK} />
      {[0, 1, 2].map((i) => <rect key={i} x="120" y={88 + i * 26} width={200 - i * 40} height="10" rx="5" fill={CREAM} opacity={0.9 - i * 0.2} />)}</g>
    <g className="animate-float" style={{ animationDelay: '.8s' }}><rect x="230" y="170" width="220" height="92" rx="24" fill={OR} /><path d="M410 262 l10 32 l-40 -32 z" fill={OR} />
      <circle cx="270" cy="216" r="16" fill={CREAM} /><path d="M262 216 l6 6 l11 -12" stroke={OR} strokeWidth="3.5" fill="none" strokeLinecap="round" /><rect x="300" y="206" width="110" height="9" rx="4.5" fill={CREAM} /><rect x="300" y="224" width="70" height="9" rx="4.5" fill={CREAM} opacity=".7" /></g>
    <g className="animate-float-slow" style={{ animationDelay: '.4s' }}><rect x="60" y="260" width="140" height="92" rx="14" fill={CREAM} stroke={LINE} /><path d="M60 270 L130 318 L200 270" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" /></g>
    <Person x="440" y="330" c={INK} d="1.4s" />
  </Svg>
);

export const FeaturesArt = () => (
  <Svg label="Modules working together"><Blob />
    {Array.from({ length: 9 }).map((_, i) => {
      const x = 130 + (i % 3) * 100, y = 60 + Math.floor(i / 3) * 100, dark = [0, 4, 8].includes(i), org = [2, 6].includes(i);
      return (<g key={i} transform={`translate(${x} ${y})`}><g className={i % 2 ? 'animate-float' : 'animate-float-slow'} style={{ animationDelay: `${i * 0.25}s` }}>
        <rect width="84" height="84" rx="20" fill={dark ? INK : org ? OR : CREAM} stroke={LINE} />
        {i % 3 === 0 && <><circle cx="42" cy="34" r="12" fill={dark || org ? CREAM : INK} opacity=".9" /><rect x="22" y="56" width="40" height="8" rx="4" fill={dark || org ? CREAM : OR} /></>}
        {i % 3 === 1 && [0, 1, 2].map((k) => <rect key={k} x={20 + k * 16} y={50 - k * 10 - 8} width="11" height={18 + k * 10} rx="3" fill={dark || org ? CREAM : k === 2 ? OR : INK} />)}
        {i % 3 === 2 && <><path d="M22 44 l14 14 l28 -30" stroke={dark ? OR : org ? CREAM : INK} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>}
      </g></g>);
    })}
  </Svg>
);

export const SolutionsArt = () => {
  const nodes = [['HR', 260, 40, INK, '#fff'], ['IT', 440, 200, OR, '#fff'], ['Finance', 260, 360, INK, '#fff'], ['CRM', 80, 200, CREAM, INK]];
  return (
    <Svg label="One platform for every department"><ellipse cx="260" cy="200" rx="235" ry="175" fill={SAND} />
      <g style={{ transformOrigin: '260px 200px' }} className="animate-spin-slow"><circle cx="260" cy="200" r="150" fill="none" stroke={OR} strokeWidth="2.5" strokeDasharray="4 12" strokeLinecap="round" /></g>
      {nodes.map(([, x, y]) => <line key={x + y} x1="260" y1="200" x2={x} y2={y} stroke={LINE} strokeWidth="2" />)}
      <circle cx="260" cy="200" r="62" fill={CREAM} stroke={LINE} /><image href="/logo-mark.png" x="214" y="166" width="92" height="68" />
      {nodes.map(([t, x, y, f, tc], i) => (<g key={t} transform={`translate(${x} ${y})`}><g className={i % 2 ? 'animate-float' : 'animate-float-slow'} style={{ animationDelay: `${i * 0.4}s` }}>
        <rect x="-48" y="-22" width="96" height="44" rx="22" fill={f} stroke={LINE} /><text textAnchor="middle" y="6" fontSize="15" fontWeight="700" fill={tc}>{t}</text></g></g>))}
    </Svg>
  );
};

export const PricingArt = () => (
  <Svg label="Plans that grow with you"><Blob />
    {[[100, 230, 120, CREAM], [215, 180, 170, CREAM], [330, 120, 230, INK]].map(([x, y, h, f], i) => (<g key={x}><g className="animate-float-slow" style={{ animationDelay: `${i * 0.5}s` }}>
      <rect x={x} y={y} width="95" height={h} rx="18" fill={f} stroke={LINE} />{[0, 1, 2].map((k) => <rect key={k} x={x + 16} y={y + 60 + k * 22} width={63 - k * 12} height="8" rx="4" fill={f === INK ? CREAM : LINE} opacity={f === INK ? 0.8 : 1} />)}
      <text x={x + 16} y={y + 34} fontSize="15" fontWeight="800" fill={f === INK ? CREAM : INK}>{['Free', 'Starter', 'Business'][i]}</text></g></g>))}
    <g className="animate-float" style={{ animationDelay: '1s' }}><circle cx="378" cy="92" r="24" fill={OR} /><path d="M378 76 l5 11 12 1 -9 8 3 12 -11 -6 -11 6 3 -12 -9 -8 12 -1 z" fill={CREAM} /></g>
  </Svg>
);
