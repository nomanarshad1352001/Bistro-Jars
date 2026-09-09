"use client";

import Reveal from "@/components/anim/Reveal";

export default function PageHeader({
  kicker,
  title,
  sub,
  children,
}: {
  kicker: string;
  title: string;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-32 pb-12 md:px-10 md:pt-44 md:pb-16">
      <Reveal y={16}>
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-copper" />
          <p className="label-caps">{kicker}</p>
        </div>
      </Reveal>
      <Reveal>
        <h1 className="headline max-w-4xl text-[clamp(2.8rem,7.5vw,6.5rem)] text-cream">
          {title}
        </h1>
      </Reveal>
      {sub ? (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl leading-relaxed text-sand">{sub}</p>
        </Reveal>
      ) : null}
      {children}
    </header>
  );
}
