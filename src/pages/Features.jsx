import { CtaBanner, FeatureCard, Heading, PageHero, Section } from '../components/Bits';
import { FeaturesArt } from '../components/Art';
import { Reveal } from '../components/Motion';
import { CAPS, FEATURES } from '../config';

const GROUPS = [['Work', 'Plan and track the work', [0, 8, 5]], ['People', 'Look after your team', [1, 2, 6]], ['Money & operations', 'Keep the business running', [3, 4, 7]]];

export default function Features() {
  return (
    <>
      <PageHero eyebrow="Features" title="Features that fit how you work" text="Tasks, HR, IT and finance share one login, one team list and one set of permissions, so nothing falls between tools." art={<FeaturesArt />} />
      {GROUPS.map(([k, t, idx], g) => (
        <Section key={k} tint={g === 1}>
          <Heading eyebrow={k} title={t} />
          <div className="grid gap-5 md:grid-cols-3">{idx.map((i, n) => <FeatureCard key={FEATURES[i].title} {...FEATURES[i]} delay={n * 90} />)}</div>
        </Section>
      ))}
      <Section>
        <Heading eyebrow="And much more" title="32 capabilities, ready to switch on" text="Everything below is built in. Turn on only what your company needs." />
        <Reveal><div className="flex flex-wrap justify-center gap-2.5">{CAPS.map((c) => <span key={c} className="rounded-full border border-[#e6dfcd] bg-[#fffdf8] px-4 py-2 text-sm font-medium text-stone-700 transition hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white">{c}</span>)}</div></Reveal>
      </Section>
      <CtaBanner />
    </>
  );
}
