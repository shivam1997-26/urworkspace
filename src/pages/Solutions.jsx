import CheckCircle from '@mui/icons-material/CheckCircle';
import { CtaBanner, Eyebrow, PageHero, Section } from '../components/Bits';
import { SolutionsArt } from '../components/Art';
import { SCREENS } from '../components/Screens';
import { Reveal } from '../components/Motion';
import { SOLUTIONS } from '../config';

export default function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="A module for every department" text="Switch on only what you need. Everything shares one login, one team list and one set of permissions." art={<SolutionsArt />} />
      {SOLUTIONS.map((s, i) => {
        const Screen = SCREENS[s.key];
        return (
          <Section key={s.key} tint={i % 2 === 0}>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <Reveal className={i % 2 ? 'md:order-2' : ''}><div><Eyebrow>{s.key}</Eyebrow><h2 className="text-3xl font-semibold sm:text-4xl">{s.title}</h2><p className="mb-6 mt-3 text-lg text-stone-600">{s.lead}</p>
                <ul className="grid gap-3">{s.points.map((p) => <li key={p} className="flex gap-3 text-[15px] text-stone-700"><CheckCircle sx={{ fontSize: 20, mt: '2px', color: '#d98b2b' }} />{p}</li>)}</ul></div></Reveal>
              <Reveal delay={120}><Screen /></Reveal>
            </div>
          </Section>
        );
      })}
      <CtaBanner />
    </>
  );
}
